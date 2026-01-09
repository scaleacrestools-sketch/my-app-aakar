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
}: ExperienceCentreSectionProps = {} as ExperienceCentreSectionProps) {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
        
        {/* Left Image Card */}
        {leftImage && (
          <div className="w-full md:w-[22%] md:min-w-[180px]">
            <Image
              src={leftImage}
              alt={heading}
              width={1000}
              height={500}
              className="w-full object-cover rounded-lg"
              priority
            />
          </div>
        )}

        {/* Right Image Card with Overlay */}
        <div className={`relative rounded-xl overflow-hidden ${leftImage ? 'flex-1' : 'w-full'}`}>
          <Image
            src={rightImage}
            alt={heading}
            fill
            className="object-cover"
            priority
          />

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8">
            <div className="max-w-md">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">
                {heading}
              </h2>

              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-lg">
                {paragraph}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}