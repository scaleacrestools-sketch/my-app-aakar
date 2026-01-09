"use client";

import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-6 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #6D3A22 1px, transparent 1px),
            linear-gradient(180deg, #6D3A22 1px, transparent 1px),
            radial-gradient(circle at 1px 1px, #D2A68A 0.5px, transparent 0)
          `,
          backgroundSize: '80px 80px, 80px 80px, 40px 40px',
          backgroundPosition: '0 0, 0 0, 0 0',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#6D3A22] mb-3 sm:mb-4 opacity-80">
              Our Story
            </h2>
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6D3A22] mb-4 sm:mb-6 md:mb-8 leading-tight">
              We Build Dream Homes for Real Families
            </h3>
            <div className="space-y-4 sm:space-y-5 text-[#45291cdd] leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
              Started with a simple mission: to make quality interior design affordable and accessible for every Indian family. Today, we&apos;ve transformed 5,000+ homes across Gurugram, Noida, Ghaziabad, Faridabad, Meerut, Panipat, Rohtak, and each project teaches us something new about what makes a house feel like home.
              </p>
              <p>
              We know you&apos;ve worked hard for your home. That&apos;s why we treat every project – whether it&apos;s a 2BHK apartment or a 4BHK villa – with the same dedication and care. Our team handles everything so you can focus on the exciting part: watching your vision come to life.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10">
              <div className="relative w-36 sm:w-40 md:w-48 h-12 sm:h-14 md:h-16 opacity-70">
                <Image
                  src="/AAKAR-BLACK-scaled.webp"
                  alt="AAKAR Signature"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-3 sm:mt-4 ml-4 sm:ml-7 text-xs sm:text-sm text-[#6D3A22] uppercase tracking-widest font-medium opacity-70">
                AAKAR Team
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer relative shadow-lg">
              <Image
                src="/demo9-slide-2.webp"
                alt="Interior Design Detail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                quality={90}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white p-2 sm:p-3 hidden md:block shadow-xl rounded-lg group hover:scale-105 transition-transform duration-300 cursor-pointer border border-[#6D3A22]/10">
              <Image
                src="/image_02-1.webp"
                alt="Material Palette"
                fill
                className="object-cover rounded-md"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

