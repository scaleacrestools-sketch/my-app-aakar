import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Priya & Amit Sharma",
    location: "Gurugram",
    image: "/demo9-slide-2.webp",
    title: "Our dream kitchen finally became reality!",
    review: "We were worried about the budget, but Aakar Interior gave us a stunning modular kitchen within our means. The team was professional, the installation was spotless, and they finished 2 days before the deadline! Special thanks to Rajesh Sir for understanding exactly what we wanted. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sunita Pate",
    location: "Bangalore",
    image: "/demo5-slide-02.webp",
    title: "Best decision for our new home",
    review: "Aakar Interior designed our entire 3BHK and we couldn't be happier. From the modern living room to the traditional pooja room, every detail was perfect. The after-sales service is excellent – they came back to adjust a wardrobe door within 24 hours. Worth every rupee!",
    rating: 5,
  },
  {
    id: 3,
    name: "Puja Bhatia",
    location: "Gurugram",
    image: "/image_02-1.webp",
    title: "Professional team, beautiful results",
    review: "I run a boutique hotel and needed quality interiors on a tight schedule. Aakar Interior delivered beyond expectations – elegant designs, premium materials, and zero delays. My guests constantly compliment the rooms. These guys understand commercial projects really well.",
    rating: 5,
  },
];

export default function CustomerReviewsSection() {
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
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6D3A22] mb-2 sm:mb-3 md:mb-4 px-2">
            Real Homes, Real Stories, Real Satisfaction
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#45291cdd] max-w-5xl mx-auto px-2">
          Don&apos;t just take our word for it – hear from families who trusted Aakar Interior to transform their spaces. From dream kitchens to complete home makeovers, our customers share their experiences of working with us. Their happiness is our greatest achievement.
          </p>
        </div>


        <div className="overflow-x-auto md:overflow-x-visible -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 md:px-0">
          <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 min-w-max md:min-w-0">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow shrink-0 w-[260px] sm:w-[300px] md:w-auto"
              >
                <div className="relative h-40 sm:h-48 md:h-56">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-white rounded-full p-2 sm:p-3 cursor-pointer hover:scale-110 transition-transform shadow-lg">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-[#6D3A22]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="mb-2">
                    <h3 className="text-[#6D3A22] font-bold text-xs sm:text-sm mb-1.5">
                      {review.title}
                    </h3>
                    <div className="flex items-center gap-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="relative mb-2">
                    <div className="absolute top-0 left-0 text-gray-300 text-2xl sm:text-3xl font-serif leading-none">&ldquo;</div>
                    <p className="text-gray-700 text-[10px] sm:text-xs leading-relaxed relative z-10 pt-2 sm:pt-3 pl-1.5">
                      {review.review}
                    </p>
                    <div className="absolute bottom-0 right-0 text-gray-300 text-2xl sm:text-3xl font-serif leading-none">&rdquo;</div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-[#6D3A22] font-semibold text-[10px] sm:text-xs">{review.name}</p>
                    <p className="text-gray-500 text-[9px] sm:text-[10px]">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

