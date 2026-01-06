"use client";

import { useState } from "react";

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
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                {/* Hexagonal Logo */}
                <div className="relative w-8 h-8">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-8 h-8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2L28 8V16L16 22L4 16V8L16 2Z"
                      fill="#E53E3E"
                    />
                    <path
                      d="M16 10L22 13V19L16 22L10 19V13L16 10Z"
                      fill="#718096"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">AAKAR</span>
              </div>

              {/* Main Navigation Links */}
              <div className="hidden lg:flex items-center gap-6 ml-10">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("design-ideas")}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm"
                  >
                    Design Ideas
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
                    onClick={() => toggleDropdown("magazine")}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm"
                  >
                    Magazine
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
                  href="#store-locator"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm"
                >
                  Store Locator
                </a>

                <div className="relative">
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
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
              {/* Vertical Separator */}
              <div className="hidden lg:block h-6 w-px bg-gray-300" />

              {/* Shop Furnishings with NEW tag */}
              <a
                href="#shop"
                className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm"
              >
                Shop Furnishings
                <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                  NEW
                </span>
              </a>

              {/* User Profile Icon */}
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

              {/* CONSULT ONLINE NOW Button */}
              <button className="bg-[#C97A7A] hover:bg-[#B86565] text-white font-semibold px-4 py-2 rounded text-sm whitespace-nowrap transition-colors">
                CONSULT ONLINE NOW
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => toggleDropdown("mobile")}
                className="lg:hidden text-gray-700"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
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
      </div>
    </nav>
  );
}

