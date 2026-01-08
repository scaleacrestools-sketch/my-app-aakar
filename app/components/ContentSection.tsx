import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Modular Interiors",
    description: "Customizable modular solutions for modern living spaces",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    id: 2,
    title: "Full Home Interiors",
    description: "Complete interior design solutions for your entire home",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    id: 3,
    title: "Luxury Interiors",
    description: "Premium design solutions for sophisticated living spaces",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
  {
    id: 4,
    title: "Renovations",
    description: "Transform your existing space with expert renovation services",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
  },
];

export default function ContentSection() {
  return (
    <section className="bg-white py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6D3A22] mb-2 sm:mb-3 md:mb-4 px-2">
            Everything You Need, All Under One Roof
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#45291cdd] max-w-5xl mx-auto px-2">
          From concept to completion, Aakar Interior handles every aspect of your home transformation. No running around, no coordination hassles – just sit back and watch your dream home come to life with our comprehensive interior solutions. 
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 leading-tight sm:leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-[#D2A68A] font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-[10px] sm:text-xs md:text-sm">Explore</span>
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

