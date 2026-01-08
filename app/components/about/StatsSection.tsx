"use client";

const stats = [
  { id: "1", label: "Years of Experience", value: "5+" },
  { id: "2", label: "Projects Completed", value: "250+" },
  { id: "3", label: "Design Awards", value: "18" },
  { id: "4", label: "Cities Worldwide", value: "12" },
];

export default function StatsSection() {
  return (
    <section className="pt-8 pb-10 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-stone-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

