"use client";

export default function WhyChooseUsSection() {
  const cards = [
    {
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#C97A7A] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">2K</span>
          </div>
        </div>
      ),
      text: "2,000+ designers",
    },
    {
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-[#C97A7A] text-xl font-bold">10</span>
          </div>
        </div>
      ),
      text: "Flat 10-year warranty¹",
    },
    {
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-[#C97A7A] text-xl font-bold">45</span>
          </div>
          <div className="absolute bottom-0 right-0">
            <svg className="w-4 h-4 text-[#C97A7A]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
          </div>
        </div>
      ),
      text: "45-day move-in guarantee²",
    },
    {
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <div className="absolute top-0 right-0">
            <svg className="w-6 h-6 text-[#C97A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      ),
      text: "146 quality checks",
    },
    {
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <div className="absolute -top-2 right-0">
            <svg className="w-6 h-6 text-[#C97A7A]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      ),
      text: "1,00,000+ happy homes",
    },
    {
      icon: (
        <div className="relative">
          <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#C97A7A] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">100</span>
          </div>
        </div>
      ),
      text: "100+ cities",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
          Why choose us
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-4 sm:gap-6">
              {[...cards, ...cards].map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-56 sm:w-64 bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gray-100 rounded-full blur-xl opacity-50"></div>
                    <div className="relative flex items-center justify-center">
                      {card.icon}
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium text-center text-sm">
                    {card.text}
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

