"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 bg-white relative overflow-hidden">
      {/* Decorative Line */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-stone-200"></div> */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 sm:mb-8 leading-tight px-2">
          Ready to transform <br className="hidden sm:block" /> your space?
        </h2>
        <p className="text-base sm:text-lg text-stone-500 mb-8 sm:mb-10 font-light max-w-2xl mx-auto px-2">
          Let&apos;s create something extraordinary together. Schedule a
          consultation to discuss your vision.
        </p>

        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 sm:gap-3 bg-[#D2A68A] hover:bg-[#C4957A] active:bg-[#C4957A] text-white px-6 sm:px-8 py-3 sm:py-4 uppercase tracking-widest text-xs font-bold transition-colors duration-300 rounded-lg min-h-[44px]"
        >
          Start a Project
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
        </Link>
      </div>
    </section>
  );
}

