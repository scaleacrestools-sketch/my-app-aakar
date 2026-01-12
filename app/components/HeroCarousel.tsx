"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const heroImages = [
  {
    id: 1,
    src: "/3d-rendering-classic-european-dining-room-and-livi-2026-01-07-01-44-53-utc.webp",
    alt: "Modern interior design",
    heading: " Where Dreams Take Shape",
    description: "Transform your house into the home you've always ",
    highlight: "imagined",
  },
  {
    id: 2,
    src: "/imgi_44_service06-768x569-1.webp",
    alt: "Modern minimalist design",
    heading: "Beautiful Homes, Beautiful Prices",
    description: "Get your dream kitchen designed from ",
    highlight: "₹1.2 Lakhs",
  },
  {
    id: 3,
    src: "/interior-of-modern-design-room-3d-illustration-2026-01-05-05-39-20-utc.webp",
    alt: "Minimalist living room",
    heading: "Ghar Ki Khubsurati, Dil Se",
    description: "(The Beauty of Home, From the Heart) Trusted by ",
    highlight: "5000+ families",
    descriptionSuffix: " across India",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen w-full">
      <div className="relative h-full w-full">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
            quality={100}
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 md:bottom-24 lg:bottom-28 left-1/2 transform -translate-x-1/2 z-20 text-center w-full px-4">
        <h1 
          key={`heading-${currentSlide}`}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg px-2 animate-fade-in"
        >
          {heroImages[currentSlide].heading}
        </h1>
        <p 
          key={`description-${currentSlide}`}
          className="text-base sm:text-md md:text-lg lg:text-xl text-white/90 mb-4 md:mb-6 drop-shadow-md px-2 max-w-3xl mx-auto animate-fade-in"
        >
          {heroImages[currentSlide].description}
          <span className="text-white font-semibold bg-[#D2A68A]/50 px-2 py-0.5 rounded">
            {heroImages[currentSlide].highlight}
          </span>
          {heroImages[currentSlide].descriptionSuffix || ""}
        </p>
        <div className="flex justify-center">
          <Link href="/contact-us">
            <button className="flex bg-gradient-to-r from-[#6D3A22] to-[#5A2F1A] text-white font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 items-center justify-center gap-1.5 group relative overflow-hidden text-xs sm:text-sm w-full sm:w-auto">
              <span className="relative z-10">BOOK FREE CONSULTATION</span>
              <svg className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{
                backgroundImage: 'url(/pattern/flip-3.svg)',
                backgroundSize: '200px 200px',
              }}></div>
            </button>
          </Link>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 md:p-4 shadow-lg hover:bg-gray-100 transition-colors hidden sm:flex cursor-pointer"
        aria-label="Previous slide"
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
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 md:p-4 shadow-lg hover:bg-gray-100 transition-colors hidden sm:flex cursor-pointer"
        aria-label="Next slide"
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

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

