"use client";

import Image from "next/image";

export default function WhyChooseUsSection() {
  const cards = [
    {
      title: "Residential",
      image: "/icon/hose.webp",
      description: "2,000+ designers",
    },
    {
      title: "Commercial",
      image: "/icon/offices.webp",
      description: "Flat 10-year warranty",
    },
    {
      title: "Hospitality",
      image: "/icon/hotel.webp",
      description: "45-day move-in guarantee",
    },
    {
      title: "Industrial",
      image: "/icon/indrusty.webp",
      description: "146 quality checks",
    },
    {
      title: "Retail",
      image: "/icon/shop.webp",
      description: "1,00,000+ happy homes",
    },
    {
      title: "Warehouse",
      image: "/icon/warehouse.webp",
      description: "100+ cities",
    },
  ];

  return (
    <section className="bg-white py-4 sm:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6D3A22] mb-2 sm:mb-3 md:mb-4 px-2">
            Transforming Spaces Across Every Segment
          </h2>
        </div>

        <div className="relative pb-4">
          <div className="overflow-hidden pb-1">
            <div className="flex animate-scroll gap-3 sm:gap-4">
              {[...cards, ...cards].map((card, index) => (
                <div
                  key={index}
                  className="shrink-0 w-36 sm:w-40 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#6D3A22]/20 transition-all duration-300 p-4 sm:p-5 flex flex-col items-center group"
                >
                  <div className="relative mb-3 sm:mb-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#6D3A22]/5 rounded-full p-2 group-hover:bg-[#6D3A22]/10 transition-colors">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={64}
                      height={64}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-[#6D3A22] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-center text-[8px] sm:text-[9px] font-normal leading-tight">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


