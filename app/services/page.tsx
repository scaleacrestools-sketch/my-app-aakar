"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/about/CTASection";
import ExperienceCentreSection from "../components/ExperienceCentreSection";

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

const serviceChoices = [
  {
    need: "For New Homes",
    service: "Complete Home Interior Package",
    image: "/pattern/find.svg",
  },
  {
    need: "For Kitchen Upgrade",
    service: "Modular Kitchen Design",
    image: "/pattern/find.svg",
  },
  {
    need: "For Storage Issues",
    service: "Wardrobe & Storage Solutions",
    image: "/pattern/find.svg",
  },
  {
    need: "For Single Room",
    service: "Room-wise Interior Design",
    image: "/pattern/find.svg",
  },
  {
    need: "For Budget Makeover",
    service: "Renovation & Remodeling",
    image: "/pattern/find.svg",
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
        {/* AI Design Assistant Button */}
        <section className="py-1.5 sm:py-2 px-4 sm:px-6 lg:px-8 bg-[#F5EDE4] border-b border-[#6D3A22]/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#6D3A22] to-[#5A2F1A] flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#6D3A22] leading-tight">AI Design Assistant</h3>
                  <p className="text-[10px] sm:text-xs text-[#45291cdd] leading-tight">Get instant design recommendations</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-[#6D3A22] to-[#5A2F1A] text-white font-semibold text-xs sm:text-sm rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1.5 group relative overflow-hidden">
                <span className="relative z-10">Try AI Assistant</span>
                <svg className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{
                  backgroundImage: 'url(/pattern/flip-3.svg)',
                  backgroundSize: '200px 200px',
                }}></div>
              </button>
            </div>
          </div>
        </section>

        {/* Header */}
        <section className="py-6 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F4] relative overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'url(/pattern/flip.svg)',
              backgroundSize: '600px 600px',
              backgroundRepeat: 'repeat',
              backgroundPosition: '0 0',
            }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-[#6D3A22] mb-3 sm:mb-4 md:mb-6 px-2">
              Quality Interiors That Fit Your Budget
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#45291cdd] max-w-2xl mx-auto px-2">
            We&apos;ve designed 5,000+ Indian homes and learned what matters most – quality that lasts, designs that work for your lifestyle, and honest pricing. From modular kitchens to complete home makeovers, every project gets the same dedication and care.

            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pt-6 sm:pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"

          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#6D3A22]/10 hover:border-[#6D3A22]/30 relative"
                >
                  {/* Card Pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                      backgroundImage: 'url(/pattern/flip-3.svg)',
                      backgroundSize: '600px 600px',
                      backgroundRepeat: 'repeat',
                      backgroundPosition: '0 0',
                    }}
                  />
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-5 relative z-10">
                    <h3 className="text-base sm:text-lg font-bold text-[#6D3A22] mb-2 group-hover:text-[#5A2F1A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#45291cdd] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-3 flex items-center text-[#6D3A22] text-xs font-medium group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
              ))}
            </div>
          </div>
        </section>
         {/* Service Description */}
         <ExperienceCentreSection
           heading="Everything Your Home Needs, All in One Place"
           paragraph="From modular kitchens to complete home interiors, we offer end-to-end solutions designed for Indian homes and lifestyles."
           leftImage="/aakar-1.webp"
           rightImage="/aakar-2.webp"
         />
        {/* How to Choose Section */}
        <section className="py-6 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'url(/pattern/flip.svg)',
              backgroundSize: '600px 600px',
              backgroundRepeat: 'repeat',
              backgroundPosition: '0 0',
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#6D3A22] mb-3 sm:mb-4 opacity-80">
                HOW TO CHOOSE YOUR SERVICE
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6D3A22] mb-2 sm:mb-3">
                Not Sure Which Service You Need?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {serviceChoices.map((choice, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-lg  shadow-md hover:shadow-xl transition-all duration-300 border border-[#6D3A22]/10 hover:border-[#6D3A22]/30 cursor-pointer"
                >
                  {/* Card Pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.02] pointer-events-none rounded-lg"
                  />
                  {/* Content with Icon on Left */}
                  <div className="relative z-10 flex items-stretch gap-4 sm:gap-5">
                    {/* Icon Box - Left */}
                    <div className="shrink-0 flex items-center">
                      <div className="h-full flex items-center">
                        <Image
                          src={choice.image}
                          alt={choice.service}
                          width={40}
                          height={40}
                          className="h-full w-[100px]"
                        />
                      </div>
                    </div>
                    {/* Content - Right */}
                    <div className="flex-1 min-w-0 p-3 flex flex-col justify-center">
                      {/* Flow Design */}
                      <div className="space-y-2">
                        {/* Need Section */}
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#6D3A22]/40"></div>
                          <span className="text-xs sm:text-sm font-medium text-[#6D3A22] opacity-80">
                            {choice.need}
                          </span>
                        </div>
                        {/* Flow Arrow Line */}
                        <div className="flex items-center gap-2 pl-1">
                          <div className="w-px h-4 bg-[#6D3A22]/30"></div>
                          <svg className="w-4 h-4 text-[#6D3A22] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {/* Service Section */}
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#6D3A22]"></div>
                          <span className="text-sm sm:text-base md:text-lg font-bold text-[#6D3A22] group-hover:text-[#5A2F1A] transition-colors">
                            {choice.service}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry CTA */}
        <CTASection />
      </div>

      <Footer />
      <FloatingAIAssistant />
    </div>
  );
}

