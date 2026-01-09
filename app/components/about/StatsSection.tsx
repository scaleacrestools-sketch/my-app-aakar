"use client";

const stats = [
  { id: "1", label: "Years of Experience", value: "5+" },
  { id: "2", label: "Projects Completed", value: "250+" },
  { id: "3", label: "Design Awards", value: "18" },
  { id: "4", label: "Cities Worldwide", value: "12" },
];

export default function StatsSection() {
  return (
    <section className="py-6 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#2A1A0F] relative overflow-hidden border-t border-[#6D3A22]/20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'url(/pattern/flip.svg)',
          backgroundSize: '600px 600px',
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center px-2 sm:px-4">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D2A68A] mb-2 sm:mb-3">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-white/80 leading-tight font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

