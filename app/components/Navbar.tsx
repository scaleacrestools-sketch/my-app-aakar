"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Navigation Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center">
              <div className="relative h-10 w-32 sm:h-12 sm:w-40">
                <Image
                  src="/AAKAR-BLACK-scaled.webp"
                  alt="AAKAR Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Center: Main Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("about")}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm"
                  >
                    About
                    {/* <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg> */}
                  </button>
                </div>

                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("services")}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm"
                  >
                    Services
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("cities")}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm"
                  >
                    Cities
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <a
                  href="#projects"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm"
                >
                  Projects
                </a>

                <a
                  href="#contact-us"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm"
                >
                  Contact Us
                </a>

                {/* <div className="relative">
                  <button
                    onClick={() => toggleDropdown("more")}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm"
                  >
                    More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>

            {/* Right: Actions */}
            {/* <div className="flex items-center gap-4">
              <div className="hidden lg:block h-6 w-px bg-gray-300" />

              <a
                href="#shop"
                className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm"
              >
                Shop Furnishings
                <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                  NEW
                </span>
              </a>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("profile")}
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div> */}

            <div className="flex items-center gap-4">
              {/* CONSULT ONLINE NOW Button */}
              <button className="hidden sm:block bg-[#D2A68A] hover:bg-[#C4957A] text-white font-semibold px-3 md:px-4 py-2 rounded text-xs md:text-sm whitespace-nowrap transition-colors">
                CONSULT ONLINE NOW
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => toggleDropdown("mobile")}
                className="lg:hidden text-gray-700 p-2"
                aria-label="Toggle mobile menu"
              >
                {openDropdown === "mobile" ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {openDropdown === "mobile" && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#about"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
            >
              About
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
            >
              Services
            </a>
            <a
              href="#cities"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
            >
              Cities
            </a>
            <a
              href="#projects"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
            >
              Projects
            </a>
            <a
              href="#contact-us"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
            >
              Contact Us
            </a>
            {/* <a
              href="#shop"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2 flex items-center gap-2"
            >
              Shop Furnishings
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                NEW
              </span>
            </a> */}
            <button className="w-full bg-[#D2A68A] hover:bg-[#C4957A] text-white font-semibold px-4 py-2 rounded text-sm transition-colors mt-2">
              CONSULT ONLINE NOW
            </button>
          </div>
        </div>
      )}

      {/* Secondary Navigation Bar */}
      {/* <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 h-12 overflow-x-auto">
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm whitespace-nowrap"
            >
              How it works
            </a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("offerings")}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm whitespace-nowrap"
              >
                Offerings
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("price-calculators")}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm whitespace-nowrap"
              >
                Price Calculators
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <a
              href="#modular-journey"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm whitespace-nowrap"
            >
              The Modular Journey
            </a>

            <a
              href="#franchise"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm whitespace-nowrap"
            >
              Own a franchise
            </a>
          </div>
        </div>
      </div> */}
    </nav>
  );
}

