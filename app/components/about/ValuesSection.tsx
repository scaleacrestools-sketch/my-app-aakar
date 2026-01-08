"use client";

const values = [
  {
    id: "1",
    title: "Excellence",
    description:
      "We pursue perfection in every detail, ensuring that each project meets the highest standards of quality and craftsmanship.",
  },
  {
    id: "2",
    title: "Innovation",
    description:
      "We embrace new ideas and technologies while respecting timeless design principles, creating spaces that are both contemporary and enduring.",
  },
  {
    id: "3",
    title: "Integrity",
    description:
      "Transparency and honesty guide our relationships with clients, partners, and team members, building trust through consistent action.",
  },
  {
    id: "4",
    title: "Collaboration",
    description:
      "We believe the best designs emerge from close partnerships with our clients, listening deeply to understand their vision and needs.",
  },
];

export default function ValuesSection() {
  return (
    <section className="pt-6 md:pt-8 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-4">
            Our Values
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900">
            What Drives Us
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="group hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-0.5 bg-[#D2A68A] mb-4"></div>
                <h4 className="text-2xl font-bold text-stone-900 mb-3">
                  {value.title}
                </h4>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

