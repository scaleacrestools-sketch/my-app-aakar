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
    
    // Get user preferences
    const roomType = (formData.get("roomType") as string) || "general";
    const style = (formData.get("style") as string) || "modern";
    const requests = (formData.get("requests") as string) || "";

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

    // Build enhanced prompt with user preferences
    const preferencesText = `
User Preferences:
- Room Type: ${roomType}
- Preferred Design Style: ${style}
${requests ? `- Additional Requests: ${requests}` : ""}
`;

    const basePrompt = `You are an expert interior designer. Analyze the ACTUAL room image provided and give SPECIFIC, IMAGE-BASED recommendations. 

CRITICAL: You MUST look at the actual image and describe what you SEE. Do NOT provide generic template suggestions. Every recommendation must be based on what is actually visible in the image.

User Preferences:
${preferencesText}

INSTRUCTIONS:
1. First, carefully examine the image and describe what you actually see:
   - What furniture is currently in the room? (describe specific pieces you see)
   - What colors are actually present in the walls, furniture, and decor?
   - What is the current layout and arrangement?
   - What style does the room currently have? (describe what you observe)
   - What lighting fixtures or windows are visible?
   - What specific elements need improvement?

2. Based on what you ACTUALLY SEE in the image, provide specific recommendations:
   - Suggest changes to the EXISTING furniture placement you see
   - Recommend color changes based on the CURRENT colors visible
   - Suggest improvements to the ACTUAL layout shown
   - Recommend specific furniture pieces that would work with what's already there
   - Suggest lighting improvements based on the CURRENT lighting situation
   - Recommend decor that complements what's already in the room

3. Style the recommendations toward ${style} while working with the existing room elements.

4. Make all suggestions specific to what you see in the image - mention specific items, colors, or areas visible in the photo.

DO NOT:
- Provide generic template responses
- Make assumptions about what might be in the room
- Give suggestions that don't reference the actual image content
- Use placeholder text or generic descriptions

DO:
- Describe exactly what you see in the image
- Reference specific visible elements in your recommendations
- Provide concrete, actionable suggestions based on the actual room
- Work with the existing elements visible in the photo

${requests ? `Additionally, address this specific request: ${requests}` : ""}

Provide your analysis in a clear, structured format that directly references what you see in the image.`;

    // Use OpenAI Vision API to analyze the room
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: basePrompt,
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
    const generatedImages: string[] = [];

    // Extract key information from suggestions for image generation
    // Use user's preferred style, or extract from suggestions if not provided
    const suggestionsLower = suggestions.toLowerCase();
    
    // Use user's preferred style, or extract from suggestions
    let designStyle = style.toLowerCase();
    if (designStyle === "general" || !designStyle) {
      // Fallback to extracting from suggestions
      if (suggestionsLower.includes("contemporary")) designStyle = "contemporary";
      else if (suggestionsLower.includes("classic")) designStyle = "classic";
      else if (suggestionsLower.includes("minimalist")) designStyle = "minimalist";
      else if (suggestionsLower.includes("traditional")) designStyle = "traditional";
      else if (suggestionsLower.includes("luxury")) designStyle = "luxury";
      else if (suggestionsLower.includes("scandinavian")) designStyle = "scandinavian";
      else designStyle = "modern";
    }

    // Create a detailed prompt for DALL-E 3 based on the analysis and user preferences
    // DALL-E 3 has a 1000 character limit for prompts
    const keyRecommendations = suggestions
      .replace(/\n/g, ' ')
      .replace(/\d+\./g, '') // Remove numbered lists
      .substring(0, 500)
      .trim();
    
    // Build prompt with user preferences
    const roomTypeText = roomType !== "general" ? `${roomType}, ` : "";
    const requestsText = requests ? `, ${requests}` : "";
    const basePromptForImage = `Professional interior design visualization of a ${roomTypeText}${designStyle} style room${requestsText}. ${keyRecommendations}`;
    const qualityAppend = `. Beautiful furniture, elegant lighting, sophisticated colors, cozy atmosphere, photorealistic, high-end photography, 4K quality`;
    
    // Ensure total length is under 1000 characters
    imageGenerationPrompt = (basePromptForImage + qualityAppend).substring(0, 1000);

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
    } catch (imageError: unknown) {
      console.error("Error generating images:", imageError);
      // Continue even if image generation fails - we still have text suggestions
    }

    return NextResponse.json({
      success: true,
      suggestions,
      generatedImages: generatedImages.length > 0 ? generatedImages : null,
    });
  } catch (error: unknown) {
    console.error("Error analyzing room:", error);
    
    // Type guard for error handling
    const errorObj = error as { code?: string; status?: number; message?: string; type?: string };
    
    // Handle specific OpenAI API errors - check multiple ways the error might be structured
    const isOpenAIError = error instanceof OpenAI.APIError || 
                         errorObj.code === 'invalid_api_key' || 
                         errorObj.status === 401 ||
                         (errorObj.message && errorObj.message.includes('API key')) ||
                         errorObj.type === 'invalid_request_error';

    if (isOpenAIError) {
      const statusCode = errorObj.status || 401;
      let errorMessage = "OpenAI API authentication failed";
      let details = errorObj.message || "Invalid API key";

      if (errorObj.code === 'invalid_api_key' || statusCode === 401 || errorObj.message?.includes('Incorrect API key')) {
        errorMessage = "Invalid OpenAI API Key";
        details = "The provided API key is incorrect or has been revoked. Please verify your API key at https://platform.openai.com/account/api-keys and ensure it's correctly set in your .env.local file. Make sure you're using a valid secret key (starts with 'sk-') and not a project key or organization key.";
      } else if (errorObj.status === 429) {
        errorMessage = "OpenAI API Rate Limit";
        details = "You've exceeded the rate limit for OpenAI API. Please try again later.";
      } else if (errorObj.status === 402) {
        errorMessage = "OpenAI API Payment Required";
        details = "Your OpenAI account requires payment. Please add billing information at https://platform.openai.com/account/billing";
      }

      return NextResponse.json(
        {
          error: errorMessage,
          details: details,
          code: errorObj.code || 'invalid_api_key',
        },
        { status: statusCode }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        error: "Failed to analyze room image",
        details: errorObj.message || "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
