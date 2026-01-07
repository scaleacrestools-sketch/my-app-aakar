export default function TrophyCabinetSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10">
          Our trophy cabinet
        </h2>

        <div className="relative">
          <div className="overflow-x-auto">
            <div className="flex gap-4 sm:gap-6 min-w-max md:min-w-0">
              <AwardCard
                icon={
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold text-center leading-tight px-2">
                        AUTHENTIC<br />TRUST<br />BRAND
                      </span>
                    </div>
                  </div>
                }
                text="India's Most Trusted Brand"
              />
              <AwardCard
                icon={
                  <div className="w-24 h-24 rounded-full bg-yellow-50 flex items-center justify-center border-2 border-yellow-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800 mb-1">M</div>
                      <div className="text-[8px] text-gray-600 font-semibold">
                        DESIGN AWARDS
                      </div>
                      <div className="text-[7px] text-gray-500">
                        BEST INTERIOR DESIGN
                      </div>
                    </div>
                  </div>
                }
                text="Best Interior Design Solutions Brand"
              />
              <AwardCard
                icon={
                  <div className="w-24 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold text-black mb-0.5">
                        Entrepreneur
                      </div>
                      <div className="text-xs font-sans font-semibold text-black">
                        INDIA
                      </div>
                    </div>
                  </div>
                }
                text="Innovative Start-up"
              />
              <AwardCard
                icon={
                  <div className="w-24 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold text-black">
                        F<span className="text-[#C97A7A]">@</span>ST COMPANY
                      </div>
                    </div>
                  </div>
                }
                text="World's Most Innovative Company"
              />
            </div>
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10 hidden lg:flex items-center justify-center"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-gray-800"
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

          <div className="flex justify-center mt-8">
            <div className="w-12 h-1 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardCard({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex-shrink-0 w-64 sm:w-72 md:w-full md:max-w-none bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 sm:mb-4 relative">{icon}</div>
        <p className="text-gray-700 font-medium text-xs sm:text-sm">{text}</p>
      </div>
    </div>
  );
}

