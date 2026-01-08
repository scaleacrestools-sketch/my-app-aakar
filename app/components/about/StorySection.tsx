"use client";

import Image from "next/image";

export default function StorySection() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-3 sm:mb-4">
              Our Story
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 sm:mb-8 leading-tight">
              Designing for the art of living.
            </h3>
            <div className="space-y-4 sm:space-y-6 text-stone-600 font-light leading-relaxed text-base sm:text-lg">
              <p>
                AAKAR was born from a simple belief: that the spaces we inhabit shape who we are. Founded with a vision to bridge the gap between classical elegance and modern functionality.
              </p>
              <p>
                We don&apos;t just fill rooms with furniture; we sculpt light, texture, and volume to create sanctuaries from the chaotic world outside. Our approach is deeply collaborative, ensuring that every project is a true reflection of the client&apos;s soul, translated through our design language of understated luxury.
              </p>
              {/* <p>
                From sprawling country estates to compact urban lofts, our signature is an unwavering commitment to quality materials and timeless aesthetics.
              </p> */}
            </div>
            <div className="mt-8 sm:mt-10">
              <div className="relative w-36 sm:w-40 md:w-48 h-12 sm:h-14 md:h-16 opacity-60 grayscale">
                <Image
                  src="/AAKAR-BLACK-scaled.webp"
                  alt="Signature"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-2 ml-4 sm:ml-7 text-xs sm:text-sm text-stone-400 uppercase tracking-widest">
                AAKAR Team
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative animate-fade-in-right">
            <div className="aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer relative">
              <Image
                src="/demo9-slide-2.webp"
                alt="Interior Detail"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white p-2 sm:p-3 hidden md:block shadow-xl group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/image_02-1.webp"
                alt="Material Palette"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

