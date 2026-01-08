



import Image from "next/image";

export default function ExperienceCentreSection() {
  return (
    <section className="bg-white px-0 sm:px-1 md:px-2">
      <div className="flex gap-2 sm:gap-[1px] py-8">
        
        {/* Left Image Card */}
        <Image
          src="/Group 6.png"
          alt="AAKAR Interior - Clients Served"
          width={800}
          height={300}
          className="flex-[2] h-[130px] sm:h-[180px] md:h-[230px] lg:h-[300px] rounded-2xl object-contain ml-2 sm:ml-4"
          priority
        />

        {/* Right Image Card with Overlay */}
        <div className="flex-[3] relative h-[130px] sm:h-[180px] md:h-[230px] lg:h-[300px] rounded-2xl overflow-hidden mr-2 sm:mr-4">
          <Image
            src="/Group 7.png"
            alt="Who We Are"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-2 sm:px-6 md:px-8">
            <div className="max-w-md">
              <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 sm:mb-3">
                <span className="text-gray-900">Who</span>{" "}
                <span className="text-[#D2A68A]">We</span>{" "}
                <span className="text-gray-900">Are</span>
              </h2>

              <p className="text-gray-700 text-[10px] sm:text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
