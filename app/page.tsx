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
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroCarousel />
      <ContentSection />
      <InspirationSection />
      <WhyChooseUsSection />
      <ExperienceCentreSection />
      <CustomerReviewsSection />
      <LivspaceHomesSection />
      <TrophyCabinetSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
