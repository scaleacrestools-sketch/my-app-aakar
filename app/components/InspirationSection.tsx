"use client";

import Image from "next/image";
import { useState } from "react";

const expandedInspirations = [
  {
    id: 1,
    title: "Living Room",
    image: "/3d-rendering-classic-european-dining-room-and-livi-2026-01-07-01-44-53-utc.webp",
  },
  {
    id: 2,
    title: "Master Bedroom",
    image: "/3d-rendering-luxury-and-modern-yellow-living-room-2026-01-06-10-37-51-utc.webp",
  },
  {
    id: 3,
    title: "False Ceiling",
    image: "/3d-rendering-luxury-and-modern-green-living-room-2026-01-07-06-07-35-utc.webp",
  },
  {
    id: 4,
    title: "Modular Kitchen",
    image: "/3d-rendering-luxury-and-modern-living-room-with-go-2026-01-06-10-38-41-utc.webp",
  },
  {
    id: 5,
    title: "Wardrobe",
    image: "/interior-of-modern-design-room-3d-illustration-2026-01-05-05-39-20-utc.webp",
  },
  {
    id: 6,
    title: "Kitchen",
    image: "/blank-picture-frames-mockups-on-white-wall-white-2026-01-05-06-03-49-utc.webp",
  },
];

export default function InspirationSection() {
  const [showExpandedView, setShowExpandedView] = useState(false);

  return (
    <section className="bg-white py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 gap-3">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6D3A22] mb-2 sm:mb-3 md:mb-4 px-2">
              Inspiration for home interior designs
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#45291cdd] max-w-5xl px-2">
              Give your home a new look with these interior design ideas curated for you.
            </p>
          </div>
          <a
            href="#view-all"
            className="text-[#6D3A22] hover:text-[#C4957A] font-semibold text-sm sm:text-base whitespace-nowrap flex items-center group self-start sm:self-auto"
          >
            View All
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
          </a>
        </div>

        {!showExpandedView ? (
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              <InspirationCard
                title="Kids Room"
                image="/3d-illustration-mockup-photo-frame-in-living-room-2026-01-07-00-54-10-utc.webp"
                className="col-span-1 sm:col-span-1 lg:col-span-3"
              />
              <InspirationCard
                title="Home Office"
                image="/3d-illustration-mockup-photo-frame-in-living-room-2026-01-07-00-54-46-utc.webp"
                className="col-span-1 sm:col-span-1 lg:col-span-1"
              />
              <InspirationCard
                title="Guest Bedroom"
                image="/3d-rendering-luxury-and-modern-yellow-living-room-2026-01-06-10-37-51-utc.webp"
                className="col-span-2 sm:col-span-1 lg:col-span-1"
              />
              <InspirationCard
                title="Foyer"
                image="/Image-Section.webp"
                className="col-span-1 sm:col-span-1 lg:col-span-1"
              />
              <InspirationCard
                title="Dining Room"
                image="/image_02-1.webp"
                className="col-span-1 sm:col-span-1 lg:col-span-1"
              />
              <InspirationCard
                title="Bathroom"
                image="/3d-rendering-luxury-and-modern-living-room-with-go-2026-01-06-10-38-41-utc.webp"
                className="col-span-2 sm:col-span-2 lg:col-span-3"
              />
            </div>

            <button
              onClick={() => setShowExpandedView(true)}
              className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-gray-100 transition-colors z-10 flex items-center justify-center cursor-pointer"
              aria-label="Next"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800"
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
        ) : (
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
              <ExpandedInspirationCard
                title={expandedInspirations[0].title}
                image={expandedInspirations[0].image}
                className="col-span-1 sm:col-span-1 md:col-span-2"
              />
              <ExpandedInspirationCard
                title={expandedInspirations[1].title}
                image={expandedInspirations[1].image}
                className="col-span-1 sm:col-span-1 md:col-span-1"
              />
              <ExpandedInspirationCard
                title={expandedInspirations[2].title}
                image={expandedInspirations[2].image}
                className="col-span-2 sm:col-span-1 md:col-span-1"
              />
              <ExpandedInspirationCard
                title={expandedInspirations[3].title}
                image={expandedInspirations[3].image}
                className="col-span-1 sm:col-span-1 md:col-span-1"
              />
              <ExpandedInspirationCard
                title={expandedInspirations[4].title}
                image={expandedInspirations[4].image}
                className="col-span-1 sm:col-span-1 md:col-span-2"
              />
              <ExpandedInspirationCard
                title={expandedInspirations[5].title}
                image={expandedInspirations[5].image}
                className="col-span-2 sm:col-span-2 md:col-span-1"
              />
            </div>

            <button
              onClick={() => setShowExpandedView(false)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-3 bg-white rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-gray-100 transition-colors z-10 flex items-center justify-center cursor-pointer"
              aria-label="Back"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800"
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
          </div>
        )}
      </div>
    </section>
  );
}

function InspirationCard({
  title,
  image,
  className,
}: {
  title: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={`relative group cursor-pointer ${className}`}>
      <div className="relative h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] w-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 z-10">
          <span className="bg-[#6D3A22] text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium shadow-md">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

function ExpandedInspirationCard({
  title,
  image,
  className,
}: {
  title: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={`relative group cursor-pointer ${className || ""}`}>
      <div className="relative h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] w-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 z-10">
          <span className="bg-[#6D3A22] text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium shadow-md">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

