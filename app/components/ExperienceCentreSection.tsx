



import Image from "next/image";

export default function ExperienceCentreSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 py-8">
        
        {/* Left Image Card */}
        <div className="w-full md:w-[20%] md:min-w-[180px]">
          <Image
            src="/aakar-1.webp"
            alt="AAKAR Interior - Clients Served"
            width={800}
            height={300}
            className="w-full h-[160px] sm:h-[190px] md:h-[230px] rounded-2xl object-contain"
            priority
          />
        </div>

        {/* Right Image Card with Overlay */}
        <div className="flex-1 relative h-[200px] sm:h-[220px] md:h-[230px] rounded-2xl sm:overflow-hidden">
          <Image
            src="/aakar-2.webp"
            alt="Who We Are"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 flex items-center px-2 sm:px-4 md:px-6">
            <div className="max-w-md">
              <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 sm:mb-3">
                <span className="text-[#6D3A22]">Who</span>{" "}
                <span className="text-[#6D3A22]">We</span>{" "}
                <span className="text-[#6D3A22]">Are</span>
              </h2>

              <p className="text-[#fff8f5] text-[10px] sm:text-sm md:text-base leading-relaxed">
              With a team of 150+ experienced designers, skilled craftsmen, and dedicated project managers, we handle everything from the first sketch to the final installation. Our transparent pricing, quality materials, and 10-year warranty give you complete peace of mind.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
