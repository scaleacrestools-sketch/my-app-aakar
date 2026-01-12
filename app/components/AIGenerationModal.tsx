"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface AIGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIGenerationModal({
  isOpen,
  onClose,
}: AIGenerationModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [roomType, setRoomType] = useState<string>("general");
  const [style, setStyle] = useState<string>("modern");
  const [requests, setRequests] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file");
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError("Image size should be less than 10MB");
        return;
      }

      setImageFile(file);
      setError(null);
      setSuggestions(null);
      setGeneratedImages([]);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!imageFile) {
      setError("Please select an image first");
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setSuggestions(null);
    setGeneratedImages([]);

    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("roomType", roomType);
      formData.append("style", style);
      if (requests.trim()) {
        formData.append("requests", requests.trim());
      }

      const response = await fetch("/api/analyze-room", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.details 
          ? `${data.error}: ${data.details}` 
          : data.error || "Failed to analyze image";
        throw new Error(errorMessage);
      }

      if (data.success && data.suggestions) {
        setSuggestions(data.suggestions);
        if (data.generatedImages && Array.isArray(data.generatedImages) && data.generatedImages.length > 0) {
          setGeneratedImages(data.generatedImages);
        }
      } else {
        throw new Error("No suggestions received");
      }
    } catch (err: any) {
      setError(err.message || "Failed to analyze the image. Please try again.");
      console.error("Error analyzing image:", err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
    setImageFile(null);
    setSuggestions(null);
    setGeneratedImages([]);
    setError(null);
    setRoomType("general");
    setStyle("modern");
    setRequests("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onClose();
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImageFile(null);
    setSuggestions(null);
    setGeneratedImages([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-8 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden relative my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="relative w-full h-32 md:h-40 bg-gradient-to-r from-[#6D3A22] to-[#8B4E2F]">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-white hover:text-gray-200 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors z-10"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">
              AI Interior Design Assistant
            </h2>
            <p className="text-white/90 text-sm md:text-base">
              Upload your room image and get personalized design suggestions
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* Image Upload Section */}
          {!selectedImage && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#6D3A22] transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center justify-center space-y-4"
              >
                <div className="bg-gray-100 rounded-full p-6">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 font-medium text-lg mb-1">
                    Click to upload your room image
                  </p>
                  <p className="text-gray-500 text-sm">
                    Supports JPG, PNG, WEBP (Max 10MB)
                  </p>
                </div>
              </label>
            </div>
          )}

          {/* Selected Image Preview - Show when image is selected and no suggestions yet, or when analyzing */}
          {selectedImage && !suggestions && (
            <div className="space-y-4">
              {/* Preferences Form */}
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Design Preferences
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Room Type */}
                  <div className="relative">
                    <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                      Room Type
                    </label>
                    <div className="relative">
                      <select
                        id="roomType"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D3A22] focus:border-transparent text-sm bg-white text-gray-900 appearance-none cursor-pointer"
                      >
                      <option value="general">General</option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Dining Room">Dining Room</option>
                      <option value="Hall">Hall</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Bathroom">Bathroom</option>
                      <option value="Study Room">Study Room</option>
                      <option value="Balcony">Balcony</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    </div>
                  </div>

                  {/* Design Style */}
                  <div className="relative">
                    <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-2">
                      Design Style
                    </label>
                    <div className="relative">
                      <select
                        id="style"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D3A22] focus:border-transparent text-sm bg-white text-gray-900 appearance-none cursor-pointer"
                      >
                      <option value="modern">Modern</option>
                      <option value="Minimalist">Minimalist</option>
                      <option value="Contemporary">Contemporary</option>
                      <option value="Scandinavian">Scandinavian</option>
                      <option value="Traditional">Traditional</option>
                      <option value="Classic">Classic</option>
                      <option value="Luxury">Luxury</option>
                      <option value="Rustic">Rustic</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Bohemian">Bohemian</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    </div>
                  </div>
                </div>

                {/* Additional Requests */}
                <div>
                  <label htmlFor="requests" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requests (Optional)
                  </label>
                  <textarea
                    id="requests"
                    value={requests}
                    onChange={(e) => setRequests(e.target.value)}
                    placeholder="e.g., Add cozy lighting, Include wooden elements, Bright and airy feel..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D3A22] focus:border-transparent text-sm resize-none"
                  />
                </div>
              </div>

              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-gray-200">
                <Image
                  src={selectedImage}
                  alt="Selected room"
                  fill
                  className="object-contain"
                />
                {!isAnalyzing && (
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors z-10"
                    aria-label="Remove image"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                )}
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                    <div className="bg-white/90 rounded-lg p-4 flex items-center gap-3">
                      <svg
                        className="animate-spin h-5 w-5 text-[#6D3A22]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span className="text-gray-900 font-medium">Analyzing room...</span>
                    </div>
                  </div>
                )}
              </div>
              {!isAnalyzing && (
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full bg-[#6D3A22] hover:bg-[#5A2F1A] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md text-base transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Get Design Suggestions
                </button>
              )}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Suggestions Display */}
          {suggestions && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">
                  Design Suggestions
                </h3>
              </div>

              {/* Original Image Preview */}
              {selectedImage && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-600 uppercase">Original Room</h4>
                  <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border-2 border-gray-200">
                    <Image
                      src={selectedImage}
                      alt="Your room"
                      fill
                      className="object-contain bg-gray-50"
                    />
                  </div>
                </div>
              )}

              {/* Generated Design Images */}
              {generatedImages.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-600 uppercase">
                    AI-Generated Design Visualizations
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {generatedImages.map((imageUrl, index) => (
                      <div
                        key={index}
                        className="relative w-full rounded-lg overflow-hidden border-2 border-[#6D3A22] shadow-lg group"
                      >
                        <div className="relative w-full aspect-square">
                          <img
                            src={imageUrl}
                            alt={`Generated design ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute top-2 left-2 bg-[#6D3A22]/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Design Option {index + 1}
                        </div>
                        <a
                          href={imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-gray-800 text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-1 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          View Full Size
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions Text */}
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
                <div className="prose prose-sm max-w-none">
                  <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                    {suggestions.split("\n").map((line, index) => {
                      // Format headings and lists
                      if (line.match(/^\d+\./)) {
                        return (
                          <p key={index} className="font-semibold text-gray-900 mt-4 mb-2">
                            {line}
                          </p>
                        );
                      } else if (line.trim().length > 0) {
                        return (
                          <p key={index} className="mb-3 text-gray-700">
                            {line}
                          </p>
                        );
                      } else {
                        return <br key={index} />;
                      }
                    })}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleRemoveImage}
                  disabled={isAnalyzing}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800 font-semibold py-3 rounded-md text-base transition-colors"
                >
                  Upload New Image
                </button>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="flex-1 bg-[#6D3A22] hover:bg-[#5A2F1A] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md text-base transition-colors flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    "Re-analyze Image"
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

