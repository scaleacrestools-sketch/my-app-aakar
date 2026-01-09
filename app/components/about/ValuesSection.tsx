"use client";

const values = [
  {
    id: "1",
    title: "Quality Without Compromise",
    description:
      "We use only premium materials and work with skilled craftsmen who take pride in their work. From the hinges on your cabinets to the finish on your walls, every detail meets our high standards. That's why we back our work with a 10-year warranty.",
  },
  {
    id: "2",
    title: "Transparent & Honest Pricing",
    description:
      "No surprises, no hidden costs. You'll know exactly what you're paying for from day one. Our detailed quotes break down every expense, so you can make informed decisions and plan your budget with confidence.",
  },
  {
    id: "3",
    title: "On-Time, Every Time",
    description:
      "We respect your time and understand that delays disrupt your life. Our dedicated project managers ensure your project stays on schedule, with regular updates at every milestone. We finish when we promise to finish.",
  },
  {
    id: "4",
    title: "Customer-First Approach",
    description:
      "Your satisfaction is our success. From the first consultation to final installation, we listen to your needs, answer your questions, and adapt our designs to fit your lifestyle. Our relationship doesn't end at installation – we're here whenever you need us.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-6 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#6D3A22] mb-3 sm:mb-4 opacity-80">
            Our Values
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6D3A22] mb-2 sm:mb-3 md:mb-4">
            What Drives Us
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-lg p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 group border border-[#6D3A22]/10 hover:border-[#6D3A22]/20 relative overflow-hidden"
            >
              {/* Card Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: 'url(/pattern/flip-3.svg)',
                  backgroundSize: '600px 600px',
                  backgroundRepeat: 'repeat',
                  backgroundPosition: '0 0',
                }}
              />
              <div className="relative z-10">
                <div className="mb-4 sm:mb-5">
                  <div className="w-12 sm:w-14 h-1 bg-[#6D3A22] mb-4 sm:mb-5 rounded-full"></div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6D3A22] mb-3 sm:mb-4">
                    {value.title}
                  </h4>
                </div>
                <p className="text-[#45291cdd] text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

