"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    id: 1,
    title: "Full-Service Design",
    description:
      "From initial concept to final installation, we handle every detail. This turn-key service is ideal for large-scale renovations and new builds.",
    image: "/3d-rendering-classic-european-dining-room-and-livi-2026-01-07-01-44-53-utc.webp",
  },
  {
    id: 2,
    title: "Interior Architecture",
    description:
      "We collaborate with architects and builders to optimize floor plans, select finishes, and design custom millwork that defines the space.",
    image: "/3d-rendering-living-room-with-sofa-near-winter-sce-2026-01-07-02-05-36-utc.webp",
  },
  {
    id: 3,
    title: "Furniture & Styling",
    description:
      "For spaces that are built but unfinished. We source unique vintage finds, custom pieces, and art to layer personality into your home.",
    image: "/3d-rendering-luxury-and-modern-green-living-room-2026-01-07-06-07-35-utc.webp",
  },
  {
    id: 4,
    title: "Virtual Consultation",
    description:
      "Expert guidance for clients worldwide. We provide mood boards, floor plans, and shopping lists for you to execute at your own pace.",
    image: "/3d-rendering-luxury-and-modern-living-room-with-go-2026-01-06-10-38-41-utc.webp",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We begin by understanding your lifestyle, needs, and aesthetic aspirations through deep listening.",
  },
  {
    num: "02",
    title: "Concept",
    desc: "We present initial layouts, mood boards, and material palettes to establish the design direction.",
  },
  {
    num: "03",
    title: "Design & Develop",
    desc: "Detailed drawings, sourcing, and procurement. We refine every element before execution begins.",
  },
  {
    num: "04",
    title: "Execution",
    desc: "Construction oversight, installation, and the final styling reveal where your home comes to life.",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />

      <div className="pt-[80px] sm:pt-[96px] md:pt-[100px]">
        {/* Header */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-stone-50 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 sm:mb-6 animate-fade-in-up px-2">
              Our Expertise
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-500 font-light max-w-2xl mx-auto animate-fade-in-up-delay px-2">
              We offer a comprehensive suite of design services tailored to elevate your living experience, blending functionality with artful aesthetics.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              {services.map((service, idx) => (
                <div
                  key={service.id}
                  className="group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden bg-stone-100 mb-4 sm:mb-6 relative rounded-sm">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 sm:mb-3 group-hover:text-stone-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-stone-500 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <svg
                      className="text-stone-300 w-5 h-5 sm:w-6 sm:h-6 group-hover:text-stone-900 transition-colors flex-shrink-0 mt-1"
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
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-stone-900 text-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-3 sm:mb-4">
                How We Work
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">The Process</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#D2A68A] absolute -top-4 sm:-top-6 md:-top-8 -left-1 sm:-left-2 z-0 opacity-30 select-none">
                    {step.num}
                  </div>
                  <div className="relative z-10 pt-6 sm:pt-8">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-stone-400 leading-relaxed border-t border-stone-800 pt-3 sm:pt-4">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry CTA */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-stone-100 text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4 sm:mb-6 px-2">
            Unsure what you need?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mb-6 sm:mb-8 max-w-xl mx-auto px-2">
            Every project is unique. Contact us to discuss your specific requirements and we&apos;ll tailor a proposal for you.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#D2A68A] hover:bg-[#C4957A] active:bg-[#C4957A] text-white border border-[#D2A68A] hover:border-[#C4957A] px-6 sm:px-8 py-3 sm:py-4 text-xs uppercase tracking-widest transition-all duration-300 rounded-lg min-h-[44px] flex items-center justify-center"
          >
            Book a Discovery Call
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}

