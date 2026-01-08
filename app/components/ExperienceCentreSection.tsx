



import Image from "next/image";

export default function ExperienceCentreSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
        
        {/* Left Image Card */}
        <div className="w-full md:w-[22%] md:min-w-[180px]">
          <Image
            src="/aakar-1.webp"
            alt="AAKAR Interior - Clients Served"
            width={1000}
            height={500}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Right Image Card with Overlay */}
        <div className="flex-1 relative rounded-xl overflow-hidden">
          <Image
            src="/aakar-2.webp"
            alt="Who We Are"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8">
            <div className="max-w-md">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">
                <span className="text-white">Who</span>{" "}
                <span className="text-white">We</span>{" "}
                <span className="text-white">Are</span>
              </h2>

              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-lg">
                With a team of 150+ experienced designers, skilled craftsmen, and dedicated project managers, we handle everything from the first sketch to the final installation. Our transparent pricing, quality materials, and 10-year warranty give you complete peace of mind.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
