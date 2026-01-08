"use client";

import Image from "next/image";

const team = [
  {
    id: "1",
    name: "Elena Vance",
    role: "Principal Architect",
    image: "/demo5-slide-02.webp",
    bio: "With 20 years of experience in Milan and New York, Elena brings a global perspective to every project.",
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Lead Interior Designer",
    image: "/demo9-slide-2.webp",
    bio: "Marcus specializes in texture and textiles, ensuring every room feels as good as it looks.",
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    role: "Project Manager",
    image: "/image_02-1.webp",
    bio: "The organizational backbone of AAKAR, Sarah ensures seamless execution from concept to completion.",
  },
];

export default function TeamSection() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-16">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-3 sm:mb-4">
              The Minds
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900">
              Meet the Team
            </h3>
          </div>
          <p className="max-w-md text-stone-500 text-sm sm:text-base mt-4 md:mt-0 text-left md:text-right">
            A diverse collective of architects, designers, and dreamers dedicated
            to redefining spatial experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-stone-200 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="mt-4 sm:mt-6">
                <h4 className="text-xl sm:text-2xl font-bold text-stone-900">
                  {member.name}
                </h4>
                <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">
                  {member.role}
                </p>
                <p className="text-stone-600 mt-3 sm:mt-4 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

