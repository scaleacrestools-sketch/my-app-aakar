"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Expert Guidance, Personalized Plans",
    description: "Our experienced designers understand your lifestyle, preferences, and budget to create customized interior solutions. Get 3D visualizations of your space before we even start work, so you know exactly what you're getting.",
    image: "/3d-illustration-mockup-photo-frame-in-living-room-2026-01-07-00-56-05-utc.webp",
    chip: "Design Consultation",
  },
  {
    id: 2,
    title: "Quality That Lasts Generations",
    description: "We source only the finest materials – from imported laminates and hardware to durable plywood and elegant finishes. Every material comes with quality certification and our 10-year warranty for complete peace of mind.",
    image: "/demo9-slide-2.webp",
    chip: "Premium Materials",
  },
  {
    id: 3,
    title: "Skilled Craftsmen, Flawless Execution",
    description: "Our trained installation teams bring years of experience and attention to detail. We follow strict timelines, maintain cleanliness throughout the project, and ensure every joint, every finish is perfect down to the millimeter.",
    image: "/image_02-1.webp",
    chip: "Expert Installation",
  },
  {
    id: 4,
    title: "We're Here Long After Installation",
    description: "Your relationship with us doesn't end at handover. Enjoy dedicated after-sales service, quick resolution of any concerns, and regular maintenance support. Because your satisfaction is our long-term commitment.",
    image: "/Image-Section.webp",
    chip: " After-Sales Support",
  },
];

export default function ContentSection() {
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="bg-[#FAF7F4] py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6D3A22] mb-2 sm:mb-3 md:mb-4 px-2">
            Everything You Need, All Under One Roof
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#45291cdd] max-w-5xl mx-auto px-2">
          From concept to completion, Aakar Interior handles every aspect of your home transformation. No running around, no coordination hassles – just sit back and watch your dream home come to life with our comprehensive interior solutions. 
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service) => {
            const isExpanded = !!expandedIds[service.id];

            return (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 z-10">
                  <span className="bg-[#6D3A22] text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium shadow-md">
                    {service.chip}
                  </span>
                </div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#6D3A22] mb-1 sm:mb-2">
                  {service.title}
                </h3>
                <p
                  className="text-gray-600 text-[9px] sm:text-[10px] md:text-xs leading-tight sm:leading-relaxed"
                  style={
                    isExpanded
                      ? {}
                      : {
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }
                  }
                >
                  {service.description}
                </p>
                <button
                  type="button"
                  className="text-[#6D3A22] text-[10px] sm:text-xs md:text-sm font-semibold hover:underline"
                  onClick={() => toggleExpand(service.id)}
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}

