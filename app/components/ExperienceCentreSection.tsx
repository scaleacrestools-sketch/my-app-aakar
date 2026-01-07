import Image from "next/image";

export default function ExperienceCentreSection() {
  return (
    <section className="py-4 sm:py-6 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 sm:gap-3 md:gap-4">
        {/* Left Panel */}
        <div className="col-span-1 lg:col-span-2 relative h-[120px] sm:h-[200px] md:h-[250px] lg:h-[300px] pl-2 sm:pl-4 md:pl-6 rounded-lg overflow-hidden">
          <Image
            src="/Group 6.png"
            alt="AAKAR Interior - Clients Served"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Panel */}
        <div className="col-span-1 lg:col-span-3 relative h-[120px] sm:h-[200px] md:h-[250px] lg:h-[300px] pr-2 sm:pr-4 md:pr-6 mr-2 lg:mr-20 sm:mr-3 md:mr-4 ml-0 sm:ml-1 md:ml-2 rounded-lg overflow-hidden">
          <Image
            src="/Group 7.png"
            alt="Who We Are"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent flex items-center p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="max-w-md">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
                <span className="text-gray-800">Who</span>{" "}
                <span className="text-[#C97A7A]">We</span>{" "}
                <span className="text-gray-800">Are</span>
              </h2>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

