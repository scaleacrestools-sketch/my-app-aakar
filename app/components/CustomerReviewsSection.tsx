import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Rohit Paul & Shveta",
    location: "Gurugram",
    image: "/demo9-slide-2.webp",
    review: "Hats off to the entire team at Livspace. They finished the project ahead of time.",
  },
  {
    id: 2,
    name: "Swati & Gaurav",
    location: "Bangalore",
    image: "/demo5-slide-02.webp",
    review: "Our experience with Livspace was nice thanks to the project managers",
  },
  {
    id: 3,
    name: "Puja Bhatia",
    location: "Gurugram",
    image: "/image_02-1.webp",
    review: "We reached out to Livspace and they designed the house that we really wanted.",
  },
];

export default function CustomerReviewsSection() {
  return (
    <section className="bg-white py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Check out some of our customer reviews
          </h2>
          <a
            href="#view-more"
            className="text-[#D2A68A] hover:text-[#C4957A] font-semibold text-base sm:text-lg whitespace-nowrap flex items-center group self-start sm:self-auto"
          >
            View More
            <svg
              className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
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
          </a>
        </div>

        <div className="overflow-x-auto md:overflow-x-visible -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 md:px-0">
          <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 min-w-max md:min-w-0">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                    <div className="bg-white rounded-full p-4 mb-3 cursor-pointer hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-gray-800"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm">{review.name}</p>
                      <p className="text-white text-xs opacity-90">{review.location}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 relative">
                  <div className="absolute top-1 left-2 sm:top-2 sm:left-4 text-gray-300 text-4xl sm:text-6xl font-serif leading-none">"</div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed relative z-10 pt-2 sm:pt-4">
                    {review.review}
                  </p>
                  <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-4 text-gray-300 text-4xl sm:text-6xl font-serif leading-none">"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

