"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

// Hero carousel images - using placeholder images, replace with your actual images
const heroImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
    alt: "Modern bedroom interior",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7c1?w=1920&q=80",
    alt: "Living room design",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
    alt: "Kitchen interior",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Carousel Section */}
      <section className="relative h-screen w-full pt-28">
        {/* Carousel Container */}
        <div className="relative h-full w-full">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
        <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>

        {/* Trust Badge - Top Left */}
        <div className="absolute top-8 left-8 z-20 hidden md:block">
          <div className="bg-white rounded-full px-6 py-4 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="text-xs font-semibold text-gray-800 mb-1">
                India&apos;s Most <span className="text-[#C97A7A]">TRUSTED</span> Brand
              </div>
              <div className="flex gap-1 mb-1">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-yellow-400 text-xs">★</span>
              </div>
              <div className="text-[10px] text-gray-500">
                Research by White Page
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content Overlay - Bottom Center */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-center w-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Home to beautiful interiors
          </h1>
          <button className="bg-[#C97A7A] hover:bg-[#B86565] text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors shadow-lg">
            BOOK FREE CONSULTATION
          </button>
        </div>

        {/* Carousel Navigation Arrow - Right */}
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors"
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

        {/* Carousel Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Floating WhatsApp Button - Bottom Right */}
        <a
          href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-30 bg-green-500 hover:bg-green-600 rounded-lg p-4 shadow-2xl transition-all hover:scale-110"
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

      {/* Content Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title and Description */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              One-stop shop for all things interiors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. With a wide range of furniture & decor, we have your back from start to finish.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Modular Interiors Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                  alt="Modular Interiors"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Modular Interiors
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Customizable modular solutions for modern living spaces
                </p>
                <div className="flex items-center text-[#C97A7A] font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">Explore</span>
                  <svg
                    className="w-5 h-5 ml-2"
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
                </div>
              </div>
            </div>

            {/* Full Home Interiors Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                  alt="Full Home Interiors"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Full Home Interiors
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete interior design solutions for your entire home
                </p>
                <div className="flex items-center text-[#C97A7A] font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">Explore</span>
                  <svg
                    className="w-5 h-5 ml-2"
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
                </div>
              </div>
            </div>

            {/* Luxury Interiors Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
                  alt="Luxury Interiors"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Luxury Interiors
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Premium design solutions for sophisticated living spaces
                </p>
                <div className="flex items-center text-[#C97A7A] font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">Explore</span>
                  <svg
                    className="w-5 h-5 ml-2"
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
                </div>
              </div>
            </div>

            {/* Renovations Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80"
                  alt="Renovations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Renovations
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Transform your existing space with expert renovation services
                </p>
                <div className="flex items-center text-[#C97A7A] font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">Explore</span>
                  <svg
                    className="w-5 h-5 ml-2"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Inspiration for home interior designs
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Give your home a new look with these interior design ideas curated for you.
              </p>
            </div>
            <a
              href="#view-all"
              className="text-[#C97A7A] hover:text-[#B86565] font-semibold text-lg whitespace-nowrap ml-6 flex items-center group"
            >
              View All
              <svg
                className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
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
            </a>
          </div>

          {/* Inspiration Cards Grid - 2x3 Layout */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {/* Living Room Card - Wider */}
              <div className="relative group cursor-pointer lg:col-span-3">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
                    alt="Living Room"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">Living Room</h3>
                  </div>
                </div>
              </div>

              {/* Master Bedroom Card - Narrower */}
              <div className="relative group cursor-pointer lg:col-span-1">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
                    alt="Master Bedroom"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">Master Bedroom</h3>
                  </div>
                </div>
              </div>

              {/* False Ceiling Card - Narrower */}
              <div className="relative group cursor-pointer lg:col-span-1">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                    alt="False Ceiling"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">False Ceiling</h3>
                  </div>
                </div>
              </div>

              {/* Homes by Livspace Card - Narrower */}
              <div className="relative group cursor-pointer lg:col-span-1">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80"
                    alt="Homes by Livspace"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">Homes by Livspace</h3>
                  </div>
                </div>
              </div>

              {/* Kitchen Card - Wider */}
              <div className="relative group cursor-pointer lg:col-span-3">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80"
                    alt="Kitchen"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">Kitchen</h3>
                  </div>
                </div>
              </div>

              {/* Wardrobe Card - Narrower */}
              <div className="relative group cursor-pointer lg:col-span-1">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
                    alt="Wardrobe"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">Wardrobe</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrow - Right Side */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors z-10 hidden lg:flex items-center justify-center"
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
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why choose us
          </h2>

          {/* Infinite Scroll Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-6">
                {/* First Set of Cards */}
                {[
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#C97A7A] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2K</span>
                        </div>
                      </div>
                    ),
                    text: "2,000+ designers",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="text-[#C97A7A] text-xl font-bold">10</span>
                        </div>
                      </div>
                    ),
                    text: "Flat 10-year warranty¹",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="text-[#C97A7A] text-xl font-bold">45</span>
                        </div>
                        <div className="absolute bottom-0 right-0">
                          <svg className="w-4 h-4 text-[#C97A7A]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                          </svg>
                        </div>
                      </div>
                    ),
                    text: "45-day move-in guarantee²",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <div className="absolute top-0 right-0">
                          <svg className="w-6 h-6 text-[#C97A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    ),
                    text: "146 quality checks",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <div className="absolute -top-2 right-0">
                          <svg className="w-6 h-6 text-[#C97A7A]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    ),
                    text: "1,00,000+ happy homes",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#C97A7A] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">100</span>
                        </div>
                      </div>
                    ),
                    text: "100+ cities",
                  },
                ].map((card, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gray-100 rounded-full blur-xl opacity-50"></div>
                      <div className="relative flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium text-center text-sm">
                      {card.text}
                    </p>
                  </div>
                ))}

                {/* Duplicate Set for Infinite Scroll */}
                {[
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#C97A7A] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2K</span>
                        </div>
                      </div>
                    ),
                    text: "2,000+ designers",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="text-[#C97A7A] text-xl font-bold">10</span>
                        </div>
                      </div>
                    ),
                    text: "Flat 10-year warranty¹",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="text-[#C97A7A] text-xl font-bold">45</span>
                        </div>
                        <div className="absolute bottom-0 right-0">
                          <svg className="w-4 h-4 text-[#C97A7A]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                          </svg>
                        </div>
                      </div>
                    ),
                    text: "45-day move-in guarantee²",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <div className="absolute top-0 right-0">
                          <svg className="w-6 h-6 text-[#C97A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    ),
                    text: "146 quality checks",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <div className="absolute -top-2 right-0">
                          <svg className="w-6 h-6 text-[#C97A7A]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    ),
                    text: "1,00,000+ happy homes",
                  },
                  {
                    icon: (
                      <div className="relative">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#C97A7A] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">100</span>
                        </div>
                      </div>
                    ),
                    text: "100+ cities",
                  },
                ].map((card, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gray-100 rounded-full blur-xl opacity-50"></div>
                      <div className="relative flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium text-center text-sm">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Centre Banner Section */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Section - Purple Overlay */}
              <div className="lg:col-span-2 bg-purple-900 p-4 lg:p-5 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1.5">
                  Come, see endless designs
                </h2>
                <div className="mb-1.5">
                  <span className="text-lg md:text-xl lg:text-2xl text-white">at our</span>
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#C97A7A] ml-2">
                    Experience Centre
                  </span>
                </div>
                <p className="text-white text-sm mb-3 opacity-90">
                  Walk into any of our centres in 50+ cities
                </p>
                <button className="bg-[#C97A7A] hover:bg-[#B86565] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors inline-flex items-center gap-2 w-fit">
                  Find one near you
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Right Section - Showroom Image */}
              <div className="lg:col-span-3 relative h-56 lg:h-auto min-h-[240px]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                  alt="Experience Centre Showroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Check out some of our customer reviews
            </h2>
            <a
              href="#view-more"
              className="text-[#C97A7A] hover:text-[#B86565] font-semibold text-lg whitespace-nowrap ml-6 flex items-center group"
            >
              View More
              <svg
                className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
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
            </a>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review Card 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7c1?w=600&q=80"
                  alt="Rohit Paul & Shveta"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                  <div className="bg-white rounded-full p-4 mb-3 cursor-pointer hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm">Rohit Paul & Shveta</p>
                    <p className="text-white text-xs opacity-90">Gurugram</p>
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-2 left-4 text-gray-300 text-6xl font-serif leading-none">"</div>
                <p className="text-gray-700 text-sm leading-relaxed relative z-10 pt-4">
                  Hats off to the entire team at Livspace. They finished the project ahead of time.
                </p>
                <div className="absolute bottom-2 right-4 text-gray-300 text-6xl font-serif leading-none">"</div>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                  alt="Swati & Gaurav"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                  <div className="bg-white rounded-full p-4 mb-3 cursor-pointer hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm">Swati & Gaurav</p>
                    <p className="text-white text-xs opacity-90">Bangalore</p>
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-2 left-4 text-gray-300 text-6xl font-serif leading-none">"</div>
                <p className="text-gray-700 text-sm leading-relaxed relative z-10 pt-4">
                  Our experience with Livspace was nice thanks to the project managers
                </p>
                <div className="absolute bottom-2 right-4 text-gray-300 text-6xl font-serif leading-none">"</div>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
                  alt="Puja Bhatia"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                  <div className="bg-white rounded-full p-4 mb-3 cursor-pointer hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm">Puja Bhatia</p>
                    <p className="text-white text-xs opacity-90">Gurugram</p>
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-2 left-4 text-gray-300 text-6xl font-serif leading-none">"</div>
                <p className="text-gray-700 text-sm leading-relaxed relative z-10 pt-4">
                  We reached out to Livspace and they designed the house that we really wanted.
                </p>
                <div className="absolute bottom-2 right-4 text-gray-300 text-6xl font-serif leading-none">"</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
