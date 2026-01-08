"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/about/Hero";
import StorySection from "../components/about/StorySection";
import StatsSection from "../components/about/StatsSection";
import ValuesSection from "../components/about/ValuesSection";
import TeamSection from "../components/about/TeamSection";
import CTASection from "../components/about/CTASection";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="pt-[80px] sm:pt-[96px] md:pt-[100px]">
        <Hero />
        <StorySection />
        <StatsSection />
        <ValuesSection />
        {/* <TeamSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

