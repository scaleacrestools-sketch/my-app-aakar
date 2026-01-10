import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI API key is configured
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY is not set in environment variables");
      return NextResponse.json(
        {
          error: "OpenAI API key is not configured. Please set OPENAI_API_KEY in your environment variables.",
          details: "Server configuration error",
        },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const formData = await request.formData();
    const imageFile = formData.get("image") as File;

    if (!imageFile) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!imageFile.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload an image file." },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    if (imageFile.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Image size exceeds 10MB limit. Please upload a smaller image." },
        { status: 400 }
      );
    }

    // Convert image file to base64
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString("base64");
    const dataUrl = `data:${imageFile.type};base64,${base64Image}`;

    // Use OpenAI Vision API to analyze the room
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `You are an expert interior designer. Analyze this room image and provide detailed interior design suggestions. Include:
              
1. Current room assessment (style, colors, layout, furniture)
2. Design style recommendations (modern, contemporary, classic, minimalist, etc.)
3. Color palette suggestions that would work well
4. Furniture recommendations (types, placement, styles)
5. Lighting suggestions
6. Decor and accessory ideas
7. Specific improvements and enhancements
8. Any space optimization tips

Please provide comprehensive, professional interior design advice in a clear, structured format.`,
            },
            {
              type: "image_url",
              image_url: {
                url: dataUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 2000,
    });

    const suggestions = response.choices[0]?.message?.content || "No suggestions generated.";

    // Generate interior design visualization images using DALL-E
    // Extract key design elements from suggestions to create a prompt
    let imageGenerationPrompt = "";
    let generatedImages: string[] = [];

    // Extract key information from suggestions for image generation
    // Look for design style, colors, and key elements mentioned in the analysis
    const suggestionsLower = suggestions.toLowerCase();
    
    // Extract design style
    let designStyle = "modern";
    if (suggestionsLower.includes("contemporary")) designStyle = "contemporary";
    else if (suggestionsLower.includes("classic")) designStyle = "classic";
    else if (suggestionsLower.includes("minimalist")) designStyle = "minimalist";
    else if (suggestionsLower.includes("traditional")) designStyle = "traditional";
    else if (suggestionsLower.includes("luxury")) designStyle = "luxury";
    else if (suggestionsLower.includes("scandinavian")) designStyle = "scandinavian";

    // Create a detailed prompt for DALL-E 3 based on the analysis
    // DALL-E 3 has a 1000 character limit for prompts
    const keyRecommendations = suggestions
      .replace(/\n/g, ' ')
      .replace(/\d+\./g, '') // Remove numbered lists
      .substring(0, 600)
      .trim();
    
    // Build prompt within character limit
    const basePrompt = `Professional interior design visualization, ${designStyle} style room, ${keyRecommendations}`;
    const qualityAppend = `. Beautiful furniture, elegant lighting, sophisticated colors, cozy atmosphere, photorealistic, high-end photography, 4K quality`;
    
    // Ensure total length is under 1000 characters
    imageGenerationPrompt = (basePrompt + qualityAppend).substring(0, 1000);

    try {
      // Generate interior design image using DALL-E 3
      const imageResponse = await openai.images.generate({
        model: "dall-e-3",
        prompt: imageGenerationPrompt,
        n: 1,
        size: "1024x1024",
        quality: "hd",
      });

      if (imageResponse.data && imageResponse.data[0]?.url) {
        generatedImages.push(imageResponse.data[0].url);
      }
    } catch (imageError: any) {
      console.error("Error generating images:", imageError);
      // Continue even if image generation fails - we still have text suggestions
    }

    return NextResponse.json({
      success: true,
      suggestions,
      generatedImages: generatedImages.length > 0 ? generatedImages : null,
    });
  } catch (error: any) {
    console.error("Error analyzing room:", error);
    
    // Handle specific OpenAI API errors - check multiple ways the error might be structured
    const isOpenAIError = error instanceof OpenAI.APIError || 
                         error.code === 'invalid_api_key' || 
                         error.status === 401 ||
                         (error.message && error.message.includes('API key')) ||
                         error.type === 'invalid_request_error';

    if (isOpenAIError) {
      const statusCode = error.status || 401;
      let errorMessage = "OpenAI API authentication failed";
      let details = error.message || "Invalid API key";

      if (error.code === 'invalid_api_key' || statusCode === 401 || error.message?.includes('Incorrect API key')) {
        errorMessage = "Invalid OpenAI API Key";
        details = "The provided API key is incorrect or has been revoked. Please verify your API key at https://platform.openai.com/account/api-keys and ensure it's correctly set in your .env.local file. Make sure you're using a valid secret key (starts with 'sk-') and not a project key or organization key.";
      } else if (error.status === 429) {
        errorMessage = "OpenAI API Rate Limit";
        details = "You've exceeded the rate limit for OpenAI API. Please try again later.";
      } else if (error.status === 402) {
        errorMessage = "OpenAI API Payment Required";
        details = "Your OpenAI account requires payment. Please add billing information at https://platform.openai.com/account/billing";
      }

      return NextResponse.json(
        {
          error: errorMessage,
          details: details,
          code: error.code || 'invalid_api_key',
        },
        { status: statusCode }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        error: "Failed to analyze room image",
        details: error.message || "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
