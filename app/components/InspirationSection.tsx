"use client";

import Image from "next/image";
import { useState } from "react";

const expandedInspirations = [
  {
    id: 1,
    title: "Kids Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
  },
  {
    id: 2,
    title: "Home Office",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7c1?w=1200&q=80",
  },
  {
    id: 3,
    title: "Guest Bedroom",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
  },
  {
    id: 4,
    title: "Foyer",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    id: 5,
    title: "Dining Room",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
  },
  {
    id: 6,
    title: "Bathroom",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80",
  },
];

export default function InspirationSection() {
  const [showExpandedView, setShowExpandedView] = useState(false);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
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
            className="text-[#C97A7A] hover:text-[#B86565] font-semibold text-base sm:text-lg whitespace-nowrap flex items-center group self-start sm:self-auto"
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
                title="Living Room"
                image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
                className="col-span-1 sm:col-span-1 lg:col-span-3"
              />
              <InspirationCard
                title="Master Bedroom"
                image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
                className="col-span-1 sm:col-span-1 lg:col-span-1"
              />
              <InspirationCard
                title="False Ceiling"
                image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                className="col-span-2 sm:col-span-1 lg:col-span-1"
              />
              <InspirationCard
                title="Homes by Livspace"
                image="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80"
                className="col-span-1 sm:col-span-1 lg:col-span-1"
              />
              <InspirationCard
                title="Wardrobe"
                image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
                className="col-span-1 sm:col-span-1 lg:col-span-1"
              />
              <InspirationCard
                title="Kitchen"
                image="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80"
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
      <div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] w-full rounded-lg overflow-hidden">
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

