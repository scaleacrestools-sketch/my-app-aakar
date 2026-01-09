
import Image from "next/image";

interface ExperienceCentreSectionProps {
  heading?: string;
  paragraph?: string;
  leftImage?: string;
  rightImage?: string;
}

export default function ExperienceCentreSection({
  heading = "Who We Are",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  leftImage = "/Group 6.png",
  rightImage = "/Group 7.png",
}: ExperienceCentreSectionProps = {}) {
  return (
    <section className="bg-white px-0 sm:px-1 md:px-2 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-2 sm:gap-[1px]">
        {/* Left Image */}
        {leftImage && (
          <Image
            src={leftImage}
            alt={heading}
            width={1000}
            height={500}
            className="flex-[2] h-[130px] sm:h-[180px] md:h-[230px] lg:h-[300px] object-contain ml-2 sm:ml-4"
            priority
          />
        )}

        {/* Right Image Card with Overlay */}
        <div className="relative flex-[3] h-[130px] sm:h-[180px] md:h-[230px] lg:h-[300px] mr-2 sm:mr-4 overflow-hidden">
          <Image
            src={rightImage}
            alt={heading}
            fill
            className="object-cover"
            priority
          />

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

          <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8">
            <div className="max-w-md">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-[#6D3A22]">
                {heading}
              </h2>

              <p className="text-[#6D3A22] text-xs sm:text-sm md:text-base leading-relaxed">
                {paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
