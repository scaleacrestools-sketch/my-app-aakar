import Image from "next/image";

const designSteps = [
  {
    id: 1,
    title: "Meet Your Designer",
    image: "/Group 8.png",
    number: "1",
  },
  {
    id: 2,
    title: "Walkthrough Of Home Lane Studio",
    image: "/Group 9.png",
    number: "2",
  },
  {
    id: 3,
    title: "Free 3d Designs On SpaceCraft Pro",
    image: "/Group 10.png",
    number: "3",
  },
  {
    id: 4,
    title: "Get an Instant Quote",
    image: "/Group 11.png",
    number: "4",
  },
];

export default function DesignSessionSection() {
  return (
    <section className="bg-white py-6 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12 text-center">
          What in Design Session
        </h2>

        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-x-auto lg:overflow-visible scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
            <div className="flex gap-2 lg:grid lg:grid-cols-4 lg:gap-2 xl:gap-3">
              {designSteps.map((step) => (
                <div
                  key={step.id}
                  className="min-w-[85vw] sm:min-w-[80vw] lg:min-w-0 flex-shrink-0"
                >
                  <DesignStepCard
                    image={step.image}
                  />
                </div>
              ))}
            </div>
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
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] rounded-lg overflow-hidden">
      <Image
        src={image}
        alt="Design session step"
        fill
        className="object-contain"
        quality={100}
      />
    </div>
  );
}

