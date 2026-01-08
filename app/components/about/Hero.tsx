"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/3d-illustration-mockup-photo-frame-in-living-room-2026-01-07-00-54-10-utc.webp"
          alt="Interior Design"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/20 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <span className="block text-stone-200 text-sm md:text-base uppercase tracking-[0.2em] mb-4 animate-fade-in-up">
          Est. 2020
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up-delay">
          Curating Silence <br /> & Space
        </h1>

        <p className="text-stone-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
          We design interiors that breathe. Where architecture meets emotion, and every detail tells a quiet story of luxury.
        </p>
      </div>
    </section>
  );
}

