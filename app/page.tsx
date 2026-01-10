"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ContentSection from "./components/ContentSection";
import InspirationSection from "./components/InspirationSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ExperienceCentreSection from "./components/ExperienceCentreSection";
import CustomerReviewsSection from "./components/CustomerReviewsSection";
import LivspaceHomesSection from "./components/LivspaceHomesSection";
import TrophyCabinetSection from "./components/TrophyCabinetSection";
import DesignSessionSection from "./components/DesignSessionSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import CTASection from "./components/about/CTASection";
import AIGenerationModal from "./components/AIGenerationModal";

export default function Home() {
  const [showAIModal, setShowAIModal] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroCarousel />
      <ExperienceCentreSection />
      <ContentSection />
      <DesignSessionSection />
      <InspirationSection />
      <WhyChooseUsSection />
      <CustomerReviewsSection />
      <LivspaceHomesSection />
      <TrophyCabinetSection />
      <FAQSection />
      <CTASection />
      <Footer />

      {/* AI Design Assistant Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowAIModal(true)}
          className="bg-gradient-to-r from-[#6D3A22] to-[#8B4E2F] hover:from-[#5A2F1A] hover:to-[#6D3A22] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
          aria-label="Open AI Interior Design Assistant"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="hidden sm:inline">AI Design Assistant</span>
          <span className="sm:hidden">AI</span>
        </button>
      </div>

      <AIGenerationModal
        isOpen={showAIModal}
        onClose={() => setShowAIModal(false)}
      />
    </div>
  );
}
