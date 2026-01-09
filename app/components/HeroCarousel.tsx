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
            <button className="flex bg-[#6D3A22] hover:bg-[#5A2F1A] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg items-center justify-center gap-1.5 md:gap-2 group text-sm font-medium w-full sm:w-auto cursor-pointer transition-colors">
              BOOK FREE CONSULTATION
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

      <a
        href="https://wa.me/919266023436"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-30 bg-green-500 hover:bg-green-600 rounded-lg p-3 md:p-4 shadow-2xl transition-all hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </section>
  );
}

