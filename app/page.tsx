"use client";

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

export default function Home() {
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
    </div>
  );
}
