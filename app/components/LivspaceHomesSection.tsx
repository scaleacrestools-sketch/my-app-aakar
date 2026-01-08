"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const homeImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    alt: "Contemporary 4 BHK penthouse, Noida",
    title: "Contemporary 4 BHK penthouse, Noida",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7c1?w=800&q=80",
    alt: "Elegant 2 BHK flat, Mumbai",
    title: "Elegant 2 BHK flat, Mumbai",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    alt: "Contemporary 3 BHK house, Gurgaon",
    title: "Contemporary 3 BHK house, Gurgaon",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Modern 3 BHK apartment, Delhi",
    title: "Modern 3 BHK apartment, Delhi",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    alt: "Luxury 5 BHK villa, Bangalore",
    title: "Luxury 5 BHK villa, Bangalore",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1631889993951-fc3d2e8d3ba8?w=800&q=80",
    alt: "Spacious 2 BHK flat, Pune",
    title: "Spacious 2 BHK flat, Pune",
  },
];

export default function LivspaceHomesSection() {
  const [homeCarouselIndex, setHomeCarouselIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive carousel
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.ceil(homeImages.length / itemsPerView) - 1;

  return (
    <section className="bg-gray-50 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Get a glimpse of Livspace homes
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Latest dream home interiors delivered the hassle-free way
            </p>
          </div>
          <button className="bg-[#D2A68A] hover:bg-[#C4957A] text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm uppercase transition-colors w-full sm:w-auto whitespace-nowrap">
            GET FREE QUOTE
          </button>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${homeCarouselIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {homeImages.map((image) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 w-full md:w-1/3 relative group"
                >
                  <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setHomeCarouselIndex((prev) =>
                prev > 0 ? prev - 1 : maxIndex
              );
            }}
            className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors z-10 flex items-center justify-center"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              setHomeCarouselIndex((prev) =>
                prev < maxIndex ? prev + 1 : 0
              );
            }}
            className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors z-10 flex items-center justify-center"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {Array.from({ length: maxIndex + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setHomeCarouselIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === homeCarouselIndex
                      ? "bg-gray-800"
                      : "bg-gray-400"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

