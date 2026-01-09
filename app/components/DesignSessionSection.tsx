import Image from "next/image";

const designSteps = [
  {
    id: 1,
    title: "Meet Your Designer",
    image: "/illu-aakar-1.webp",
    number: "1",
  },
  {
    id: 2,
    title: "Walkthrough Of Home Lane Studio",
    image: "/illu-aakar-2.webp",
    number: "2",
  },
  {
    id: 3,
    title: "Free 3d Designs On SpaceCraft Pro",
    image: "/illu-aakar-3.webp",
    number: "3",
  },
  {
    id: 4,
    title: "Get an Instant Quote",
    image: "/illu-aakar-5.webp",
    number: "4",
  },
];

export default function DesignSessionSection() {
  return (
    <section className="py-6 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #faf7f4, #ffffff)',
    }}>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url(/pattern/flip.svg)',
          backgroundSize: '600px 600px',
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-2">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6D3A22] mb-2 sm:mb-3 md:mb-4 px-2">
            Your Dream Home Journey, Simplified in 4 Steps
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#45291cdd] max-w-5xl mx-auto px-2">
            From inspiration to installation, our transparent step-by-step process keeps you involved while we handle the complexities. Experience a stress-free transformation where your vision meets our expertise.
          </p>
        </div>

        <div className="relative">
          {/* Cards Container */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:grid-cols-4 lg:gap-3 xl:gap-4">
            {designSteps.map((step) => (
              <DesignStepCard
                key={step.id}
                image={step.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DesignStepCard({
  image,
}: {
  image: string;
}) {
  return (
    <div className="relative w-full h-[260px] sm:h-[220px] md:h-[280px] lg:h-[380px] xl:h-[420px] rounded-lg overflow-hidden">
      <Image
        src={image}
        alt="Design session step"
        fill
        className="object-contain p-2 sm:p-3 md:p-4"
        quality={90}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  );
}

