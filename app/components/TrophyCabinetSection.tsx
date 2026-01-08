export default function TrophyCabinetSection() {
  return (
    <section className="bg-gray-50 py-6 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left">
          Our trophy cabinet
        </h2>

        <div className="relative">
          {/* Mobile: Horizontal Scroll */}
          <div className="overflow-x-auto lg:overflow-visible">
            <div className="flex gap-4 sm:gap-6 min-w-max lg:min-w-0 lg:grid lg:grid-cols-4 lg:gap-6 xl:gap-8">
              <AwardCard
                icon={
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                    <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                      <span className="text-blue-600 text-xs lg:text-sm font-bold text-center leading-tight px-2">
                        AUTHENTIC<br />TRUST<br />BRAND
                      </span>
                    </div>
                  </div>
                }
                text="India's Most Trusted Brand"
              />
              <AwardCard
                icon={
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-yellow-50 flex items-center justify-center border-2 border-yellow-200 shadow-sm">
                    <div className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-1">M</div>
                      <div className="text-[8px] lg:text-[10px] text-gray-600 font-semibold">
                        DESIGN AWARDS
                      </div>
                      <div className="text-[7px] lg:text-[9px] text-gray-500">
                        BEST INTERIOR DESIGN
                      </div>
                    </div>
                  </div>
                }
                text="Best Interior Design Solutions Brand"
              />
              <AwardCard
                icon={
                  <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-serif font-bold text-black mb-0.5">
                        Entrepreneur
                      </div>
                      <div className="text-xs lg:text-sm font-sans font-semibold text-black">
                        INDIA
                      </div>
                    </div>
                  </div>
                }
                text="Innovative Start-up"
              />
              <AwardCard
                icon={
                  <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-serif font-bold text-black">
                        F<span className="text-[#D2A68A]">@</span>ST COMPANY
                      </div>
                    </div>
                  </div>
                }
                text="World's Most Innovative Company"
              />
            </div>
          </div>

          {/* Desktop: Remove navigation button, use grid instead */}
          <div className="hidden lg:flex justify-center mt-10 xl:mt-12">
            <div className="w-16 h-1 bg-gray-800 rounded"></div>
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
    <div className="flex-shrink-0 w-64 sm:w-72 lg:w-full bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 sm:mb-5 lg:mb-6 relative">{icon}</div>
        <p className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

