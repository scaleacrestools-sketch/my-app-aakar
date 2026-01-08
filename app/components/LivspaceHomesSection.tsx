"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const homeVideos = [
  {
    id: 1,
    video: "/video/aakar1.mp4",
    thumbnail: "/blank-picture-frames-mockups-on-white-wall-white-2026-01-05-06-03-49-utc.webp",
    title: "Contemporary 4 BHK penthouse, Noida",
  },
  {
    id: 2,
    video: "/video/aakar2.mp4",
    thumbnail: "/demo9-slide-2.webp",
    title: "Elegant 2 BHK flat, Mumbai",
  },
  {
    id: 3,
    video: "/video/aakar3.mp4",
    thumbnail: "/3d-rendering-luxury-and-modern-yellow-living-room-2026-01-06-10-37-51-utc.webp",
    title: "Contemporary 3 BHK house, Gurgaon",
  },
  {
    id: 4,
    video: "/video/aakar4.mp4",
    thumbnail: "/3d-rendering-tropical-style-resort-suite-living-re-2026-01-06-11-05-14-utc.webp",
    title: "Modern 3 BHK apartment, Delhi",
  },
  {
    id: 5,
    video: "/video/aakar5.mp4",
    thumbnail: "/3d-rendering-luxury-and-modern-living-room-with-go-2026-01-06-10-38-41-utc.webp",
    title: "Luxury 5 BHK villa, Bangalore",
  },
  {
    id: 6,
    video: "/video/aakar6.mp4",
    thumbnail: "/3d-rendering-luxury-and-modern-green-living-room-2026-01-07-06-07-35-utc.webp",
    title: "Spacious 2 BHK flat, Pune",
  },
];

export default function LivspaceHomesSection() {
  const [currentIndex, setCurrentIndex] = useState(homeVideos.length); // Start at second set for seamless loop
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle responsive
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 4;
  const totalVideos = homeVideos.length;
  
  // Infinite loop - duplicate videos for seamless loop (3 sets)
  const displayVideos = [...homeVideos, ...homeVideos, ...homeVideos];

  // Auto-scroll with seamless infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // When reaching end of second set, reset to start of second set seamlessly
        if (nextIndex >= totalVideos * 2) {
          // Use setTimeout to reset after transition completes
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = 'none';
              // Use requestAnimationFrame to ensure DOM update happens
              requestAnimationFrame(() => {
                setCurrentIndex(totalVideos);
                requestAnimationFrame(() => {
                  if (sliderRef.current) {
                    sliderRef.current.style.transition = '';
                  }
                });
              });
            }
          }, 700); // Wait for transition to complete (700ms matches duration)
          return nextIndex;
        }
        return nextIndex;
      });
    }, 3000); // Change video every 3 seconds

    return () => clearInterval(interval);
  }, [totalVideos]);

  // Play all visible videos (4 on desktop, 1 on mobile)
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        const videoIndex = index % totalVideos;
        const currentVideoIndex = currentIndex % totalVideos;
        
        // Calculate which videos are visible
        let isVisible = false;
        if (isMobile) {
          // On mobile, only the current video is visible
          isVisible = videoIndex === currentVideoIndex;
        } else {
          // On desktop, 4 videos are visible starting from currentIndex
          // Check if this video is in the visible range (currentIndex to currentIndex + 4)
          for (let i = 0; i < itemsPerView; i++) {
            const checkIndex = (currentVideoIndex + i) % totalVideos;
            if (videoIndex === checkIndex) {
              isVisible = true;
              break;
            }
          }
        }
        
        if (isVisible) {
          video.play().catch(() => {
            // Autoplay might be blocked, that's okay
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex, totalVideos, itemsPerView, isMobile]);

  return (
    <section className="bg-white py-4 sm:py-6 px-2 sm:px-4 lg:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6D3A22] mb-2 sm:mb-3 md:mb-4 px-2">
            Get a glimpse of Aakar homes
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#45291cdd] max-w-5xl mx-auto px-2">
            Latest dream home interiors delivered the hassle-free way
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex gap-2 sm:gap-3 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {displayVideos.map((video, index) => {
                const videoIndex = index % totalVideos;
                const currentVideoIndex = currentIndex % totalVideos;
                
                // Calculate if this video is visible
                let isVisible = false;
                if (isMobile) {
                  isVisible = videoIndex === currentVideoIndex;
                } else {
                  // On desktop, check if this video is in the visible range
                  for (let i = 0; i < itemsPerView; i++) {
                    const checkIndex = (currentVideoIndex + i) % totalVideos;
                    if (videoIndex === checkIndex) {
                      isVisible = true;
                      break;
                    }
                  }
                }
                
                return (
                  <div
                    key={`${video.id}-${index}`}
                    className="shrink-0 relative group"
                    style={{
                      width: isMobile ? '100%' : `${100 / itemsPerView}%`,
                    }}
                  >
                    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] rounded-lg overflow-hidden bg-black">
                      {/* Background image as fallback */}
                      <div className="absolute inset-0">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          priority={isVisible}
                        />
                      </div>
                      
                      {/* Video element - will overlay on top of image */}
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay={isVisible}
                        loop
                        muted
                        playsInline
                        poster={video.thumbnail}
                        onError={(e) => {
                          // Hide video if it fails to load, show image instead
                          const target = e.target as HTMLVideoElement;
                          target.style.display = 'none';
                        }}
                      >
                        <source src={video.video} type="video/mp4" />
                      </video>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                      
                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
                        <p className="text-white font-semibold text-xs sm:text-sm md:text-base drop-shadow-lg">
                          {video.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

