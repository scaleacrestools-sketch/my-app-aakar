"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingAIAssistant from "../components/FloatingAIAssistant";

type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "The Tribeca Loft",
    category: "Residential",
    location: "New York, NY",
    year: "2023",
    image: "/project-image/luxury-family-room-2026-01-06-00-54-17-utc.webp",
  },
  {
    id: "2",
    title: "Aesop Boutique",
    category: "Commercial",
    location: "Paris, France",
    year: "2022",
    image: "/project-image/beautiful-shot-of-the-modern-style-open-space-offi-2026-01-07-07-20-51-utc.webp",
  },
  {
    id: "3",
    title: "Casa Minimalista",
    category: "Residential",
    location: "Barcelona, Spain",
    year: "2023",
    image: "/project-image/dining-table-in-modern-kitchen-and-living-room-2025-04-03-10-40-22-utc.webp",
  },
  {
    id: "4",
    title: "Hotel de L'O",
    category: "Hospitality",
    location: "Copenhagen, Denmark",
    year: "2021",
    image: "/project-image/interior-of-a-hotel-reception-3d-illustration-2026-01-05-05-03-03-utc.webp",
  },
  {
    id: "5",
    title: "Studio Noir",
    category: "Commercial",
    location: "Berlin, Germany",
    year: "2022",
    image: "/project-image/a-modern-empty-canteen-in-an-office-building-2025-04-13-22-46-51-utc.webp",
  },
  {
    id: "6",
    title: "Hudson Retreat",
    category: "Residential",
    location: "Upstate NY",
    year: "2020",
    image: "/project-image/interior-of-modern-house-dining-room-with-glass-t-2026-01-07-05-28-14-utc.webp",
  },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />

      <div className="pt-[104px] sm:pt-[108px] min-h-screen">
        {/* Header */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 mb-4 md:mb-6 animate-fade-in-up">
              Selected Works
            </h1>
            <p className="text-base sm:text-lg text-stone-500 font-light max-w-2xl mx-auto animate-fade-in-up-delay">
              A curated collection of spaces defined by silence, light, and texture.
            </p>
          </div>
        </section>

        {/* Filter */}
        <div className="flex justify-center mb-12 md:mb-16 space-x-4 sm:space-x-6 md:space-x-12 px-4 sm:px-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 pb-2 whitespace-nowrap ${
                activeCategory === category
                  ? "text-stone-900 border-b-2 border-stone-900 font-medium"
                  : "text-stone-400 hover:text-stone-600 border-b-2 border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <section className="pb-12 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-stone-100 mb-4 md:mb-6 relative">
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] uppercase tracking-widest px-3 py-2 font-bold">
                      View Project
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#D2A68A] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">
                      {project.location}
                    </p>
                  </div>
                  <span className="text-stone-400 text-xs font-medium italic ml-4">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
      <FloatingAIAssistant />
    </div>
  );
}

