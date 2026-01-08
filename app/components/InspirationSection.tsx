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
    title: "Homes by Livspace",
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
    <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 md:mb-10 gap-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
              Inspiration for home interior designs
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
              Give your home a new look with these interior design ideas curated for you.
            </p>
          </div>
          <a
            href="#view-all"
            className="text-[#D2A68A] hover:text-[#C4957A] font-semibold text-base sm:text-lg whitespace-nowrap flex items-center group self-start sm:self-auto"
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
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg hover:bg-gray-100 transition-colors z-10 flex items-center justify-center"
              aria-label="Next"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800"
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-gray-100 transition-colors z-10 flex items-center justify-center"
              aria-label="Back"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
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
      <div className="relative h-[180px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] w-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
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
      <div className="relative h-[180px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] w-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <div className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded shadow-sm">
            <h3 className="text-gray-900 text-sm sm:text-base font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

