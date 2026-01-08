"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#6D3A22] py-1 sm:py-1.5 px-4 sm:px-6 m-0">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
        <p className="text-white text-xs sm:text-sm text-center">
          Trusted By 5000+ Customers.{" "}
          {/* <a
            href="#cookie-policy"
            className="text-white hover:text-gray-100 underline font-medium transition-colors"
          >
            Learn more &gt;
          </a> */}
        </p>
      </div>
    </div>
  );
}

