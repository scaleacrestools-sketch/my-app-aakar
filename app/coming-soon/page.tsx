"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ComingSoon() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="pt-[80px] sm:pt-[96px] md:pt-[100px] min-h-[calc(100vh-180px)] sm:min-h-[calc(100vh-200px)] flex items-center justify-center bg-stone-50 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto w-full py-12 sm:py-16 md:py-20 text-center">
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-900 mb-4 sm:mb-6 leading-tight px-2">
              Coming Soon
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#D2A68A] mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="mb-8 sm:mb-10 md:mb-12 animate-fade-in-up px-2" style={{ animationDelay: "0.2s" }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-600 font-light mb-3 sm:mb-4 leading-relaxed">
              We're working hard to bring you something amazing.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
              Stay tuned for updates and be the first to know when we launch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-fade-in-up px-2" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/"
              className="bg-[#D2A68A] hover:bg-[#C4957A] active:bg-[#C4957A] text-white px-6 sm:px-8 py-3 sm:py-4 uppercase tracking-widest text-xs font-bold transition-colors duration-300 rounded-lg text-center min-h-[44px] flex items-center justify-center"
            >
              Go to Home
            </Link>
            <Link
              href="/contact-us"
              className="bg-white border-2 border-stone-300 hover:border-[#D2A68A] active:border-[#D2A68A] text-stone-900 hover:text-[#D2A68A] active:text-[#D2A68A] px-6 sm:px-8 py-3 sm:py-4 uppercase tracking-widest text-xs font-bold transition-all duration-300 rounded-lg text-center min-h-[44px] flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

