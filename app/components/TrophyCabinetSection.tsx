"use client";

import Image from "next/image";

const awards = [
  {
    id: 1,
    title: "Best Interior Design",
    image: "/award/best-interior-design-d-v1-1684213851-BVio3.avif",
  },
  {
    id: 2,
    title: "Fast Company",
    image: "/award/fast-company-d-v1-1684213853-vvCJK.avif",
  },
  {
    id: 3,
    title: "GBN Award",
    image: "/award/gbn-d-v1-1684213854-rLyzH.avif",
  },
  {
    id: 4,
    title: "India Design Mark",
    image: "/award/india-design-mark.png",
  },
  {
    id: 5,
    title: "REA Award",
    image: "/award/rea25.png",
  },
];

export default function TrophyCabinetSection() {
  return (
    <section className="bg-white py-4 sm:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6D3A22] mb-2 sm:mb-3 md:mb-4 px-2">
            Our Trophy Cabinet
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#45291cdd] max-w-5xl mx-auto px-2">
          Recognized for excellence in interior design and customer satisfaction across India. Our awards reflect our commitment to quality, innovation, and craftsmanship that transforms houses into dream homes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Founder Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/aakar-award.jpg"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Logo Slider */}
          <div className="order-1 lg:order-2">
            <div className="relative pb-4">
              <div className="overflow-hidden pb-1">
                <div className="flex animate-scroll gap-3 sm:gap-4">
                  {[...awards, ...awards].map((award, index) => (
                    <div
                      key={`${award.id}-${index}`}
                      className="shrink-0 w-32 sm:w-36 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#6D3A22]/20 transition-all duration-300 p-4 sm:p-5 flex items-center justify-center group"
                    >
                      <div className="relative w-full h-15 sm:h-24 flex items-center justify-center  rounded-lg p-2 group-hover:bg-[#6D3A22]/10 transition-colors">
                        <Image
                          src={award.image}
                          alt={award.title}
                          width={120}
                          height={120}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              <div className="mt-4 sm:mt-6">
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-center lg:text-left mb-4 sm:mb-5">
                Honored to be recognized for excellence in interior design and customer satisfaction. These awards inspire us to continue delivering quality, innovation, and beautiful homes across India.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="flex btn-brand-gradient text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg items-center justify-center gap-1.5 md:gap-2 group text-sm font-medium whitespace-nowrap cursor-pointer">
                    CONSULT ONLINE NOW
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

