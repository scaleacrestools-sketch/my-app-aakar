"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingAIAssistant from "../components/FloatingAIAssistant";

type CityData = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  address: string;
  phone: string;
  email: string;
  features: string[];
};

const cities: CityData[] = [
  {
    id: "delhi",
    name: "Delhi",
    tagline: "The Capital Studio",
    description:
      "Located in the heart of New Delhi, our flagship studio blends modern urban dynamism with quiet sophistication. We specialize in high-end residential lofts and corporate sanctuaries in the bustle of the metropolis.",
    image: "/3d-rendering-luxury-and-modern-living-room-with-go-2026-01-06-10-38-41-utc.webp",
    address: "Plot No. 5, 2nd Floor, Left Side, Kehar Singh Estate, Westend Marg, Lane No. 2, Saidulajab, New Delhi - 110030",
    phone: "+91 9266023436",
    email: "aakar.interior.officials@gmail.com",
    features: ["Luxury Penthouse Design", "Corporate Interiors", "Art Consultation"],
  },
  {
    id: "agra",
    name: "Agra",
    tagline: "The Heritage Atelier",
    description:
      "Inspired by the timeless symmetry of Mughal architecture, our Agra studio focuses on restoration and heritage-infused luxury. We craft spaces that honor history while embracing contemporary living.",
    image: "/3d-rendering-luxury-and-modern-yellow-living-room-2026-01-06-10-37-51-utc.webp",
    address: "12 Taj Ganj, Fatehabad Road, Agra, 282001",
    phone: "+91 9266023436",
    email: "aakar.interior.officials@gmail.com",
    features: ["Heritage Restoration", "Stone & Marble Craft", "Boutique Hotels"],
  },
  {
    id: "mathura",
    name: "Mathura",
    tagline: "The Sanctuary",
    description:
      "Nestled in the spiritual heart of India, our Mathura studio is dedicated to holistic design. We create serene, meditative spaces that promote well-being, using natural materials and ancient design principles.",
    image: "/3d-rendering-tropical-style-resort-suite-living-re-2026-01-06-11-05-14-utc.webp",
    address: "8 Krishna Nagar, Mathura, 281004",
    phone: "+91 9266023436",
    email: "aakar.interior.officials@gmail.com",
    features: ["Vastu Compliant Design", "Eco-friendly Materials", "Spiritual Retreats"],
  },
];

function CitiesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cityParam = searchParams.get("city");
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);

  useEffect(() => {
    if (cityParam) {
      const city = cities.find((c) => c.id === cityParam);
      if (city) {
        setSelectedCity(city);
      }
    } else {
      setSelectedCity(null);
    }
  }, [cityParam]);

  const handleCityClick = (cityId: string) => {
    router.push(`/cities?city=${cityId}`);
  };

  const handleBackClick = () => {
    router.push("/cities");
    setSelectedCity(null);
  };

  return (
    <>

      {!selectedCity ? (
        <div className="pt-[104px] sm:pt-[108px] min-h-screen bg-[#FAF7F4] relative overflow-hidden">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in-up relative z-10">
            <div className="text-center mb-16 md:mb-24">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#6D3A22] mb-4 md:mb-6 leading-tight">
                Our Studios
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#45291cdd] font-light max-w-2xl mx-auto leading-relaxed">
                Three cities, three distinct expressions of our design philosophy. Select a location to explore our regional presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {cities.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCityClick(city.id)}
                  className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards",
                    opacity: 0,
                  }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6D3A22]/70 via-[#6D3A22]/20 to-transparent group-hover:from-[#6D3A22]/80 transition-all duration-500 z-10" />
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      quality={90}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                        {city.name}
                      </h2>
                      <p className="text-stone-200 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
                        {city.tagline}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg
                          className="w-5 h-5 text-[#6D3A22]"
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
                  <div className="p-6 md:p-8 bg-white relative overflow-hidden">
                    {/* Card Pattern */}
                    <div 
                      className="absolute inset-0 opacity-[0.02] pointer-events-none"

                    />
                    <p className="text-[#45291cdd] text-sm md:text-base line-clamp-3 mb-6 leading-relaxed min-h-[4.5rem] relative z-10">
                      {city.description}
                    </p>
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#6D3A22] group-hover:text-[#5A2F1A] transition-colors relative z-10">
                      Visit Studio
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Detailed City View */
        <div className="animate-fade-in-up">
          {/* Hero Image for City */}
          <div className="relative h-[55vh] sm:h-[65vh] md:h-[70vh] w-full overflow-hidden">
              <Image
                src={selectedCity.image}
                alt={selectedCity.name}
                fill
                className="w-full h-full object-cover"
                priority
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#6D3A22]/60 via-[#6D3A22]/50 to-[#6D3A22]/70" />
              <div className="absolute inset-0 flex items-center justify-center pt-[104px] sm:pt-[108px]">
                <div className="text-center text-white px-4 animate-fade-in-up">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] mb-3 md:mb-5 font-medium text-white/90">
                    AAKAR Interior
                  </p>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-3 md:mb-4 drop-shadow-2xl leading-tight text-white">
                    {selectedCity.name}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 font-light italic max-w-xl mx-auto">
                    {selectedCity.tagline}
                  </p>
                </div>
              </div>
              <button
                onClick={handleBackClick}
                className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-12 flex items-center space-x-2 text-white/90 hover:text-white transition-all duration-300 bg-[#6D3A22]/40 hover:bg-[#6D3A22]/60 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                  Back to All Studios
                </span>
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none"

              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 relative z-10">
                <div className="space-y-8 md:space-y-10">
                  <div>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#6D3A22] mb-3 block opacity-80">
                      About Our Studio
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6D3A22] mb-6 md:mb-8 leading-tight">
                      {selectedCity.tagline}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-[#45291cdd] font-light leading-relaxed">
                      {selectedCity.description}
                    </p>
                  </div>

                  <div className="pt-6 md:pt-8 border-t border-[#6D3A22]/20">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#45291cdd] mb-6 opacity-80">
                      Our Specializations
                    </h3>
                    <ul className="space-y-4">
                      {selectedCity.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-[#45291cdd] group">
                          <span className="w-2 h-2 bg-[#6D3A22] rounded-full mr-4 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                          <span className="text-base sm:text-lg font-medium flex-1 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl border border-[#6D3A22]/10 shadow-xl lg:-mt-2 md:-mt-16 relative z-10 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                  {/* Card Pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.02] pointer-events-none"

                  />
                  <div className="mb-4 md:mb-5 relative z-10">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6D3A22] mb-0.5">
                      Contact Information
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#45291cdd]">
                      Get in touch with our team
                    </p>
                  </div>

                  <div className="space-y-2 md:space-y-3 mb-5 md:mb-6 relative z-10">
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-[#FAF7F4] transition-colors group">
                      <div className="bg-[#6D3A22]/10 p-1.5 md:p-2 rounded-lg group-hover:bg-[#6D3A22]/20 transition-colors flex-shrink-0">
                        <svg
                          className="text-[#6D3A22] w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#45291cdd] mb-1 font-medium opacity-80">
                          Visit Us
                        </p>
                        <p className="text-xs sm:text-sm text-[#45291cdd] leading-relaxed">
                          {selectedCity.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-[#FAF7F4] transition-colors group">
                      <div className="bg-[#6D3A22]/10 p-1.5 md:p-2 rounded-lg group-hover:bg-[#6D3A22]/20 transition-colors flex-shrink-0">
                        <svg
                          className="text-[#6D3A22] w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#45291cdd] mb-1 font-medium opacity-80">
                          Call Us
                        </p>
                        <a
                          href={`tel:${selectedCity.phone.replace(/\s/g, "")}`}
                          className="text-xs sm:text-sm text-[#6D3A22] hover:text-[#5A2F1A] transition-colors font-medium"
                        >
                          {selectedCity.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-[#FAF7F4] transition-colors group">
                      <div className="bg-[#6D3A22]/10 p-1.5 md:p-2 rounded-lg group-hover:bg-[#6D3A22]/20 transition-colors flex-shrink-0">
                        <svg
                          className="text-[#6D3A22] w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#45291cdd] mb-1 font-medium opacity-80">
                          Email Us
                        </p>
                        <a
                          href={`mailto:${selectedCity.email}`}
                          className="text-xs sm:text-sm text-[#6D3A22] hover:text-[#5A2F1A] transition-colors break-all font-medium"
                        >
                          {selectedCity.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-[#FAF7F4] transition-colors group">
                      <div className="bg-[#6D3A22]/10 p-1.5 md:p-2 rounded-lg group-hover:bg-[#6D3A22]/20 transition-colors flex-shrink-0">
                        <svg
                          className="text-[#6D3A22] w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#45291cdd] mb-1 font-medium opacity-80">
                          Opening Hours
                        </p>
                        <p className="text-xs sm:text-sm text-[#45291cdd] font-medium">Mon - Sat: 10:00 AM - 7:00 PM</p>
                        <p className="text-xs text-[#45291cdd] mt-0.5 opacity-70">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact-us"
                    className="w-full bg-gradient-to-r from-[#6D3A22] to-[#5A2F1A] text-white font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1.5 group relative overflow-hidden text-xs sm:text-sm relative z-10"
                  >
                    <span className="relative z-10">Schedule Appointment</span>
                    <svg className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{
                      backgroundImage: 'url(/pattern/flip-3.svg)',
                      backgroundSize: '200px 200px',
                    }}></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      <Footer />
    </>
  );
}

export default function CitiesPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      <Suspense fallback={
        <div className="pt-[104px] sm:pt-[108px] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6D3A22] mx-auto"></div>
            <p className="mt-4 text-stone-600">Loading...</p>
          </div>
        </div>
      }>
        <CitiesContent />
      </Suspense>
      <FloatingAIAssistant />
    </div>
  );
}

