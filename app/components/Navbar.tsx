"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [showCitiesMobile, setShowCitiesMobile] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <nav className="fixed top-[34px] sm:top-[40px] left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Navigation Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link href="/" className="cursor-pointer">
                <div className="relative h-10 w-32 sm:h-12 sm:w-40">
                  <Image
                    src="/AAKAR-BLACK-scaled.webp"
                    alt="AAKAR Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Center: Main Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <Link
                    href="/about-us"
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
                  </Link>
                </div>

                <Link
                  href="/services"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm"
                >
                  Services
                </Link>

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
                  {openDropdown === "cities" && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <a
                        href="/cities/delhi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D2A68A] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Delhi
                      </a>
                      <a
                        href="/cities/agra"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D2A68A] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Agra
                      </a>
                      <a
                        href="/cities/mathura"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D2A68A] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Mathura
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="/projects"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm"
                >
                  Projects
                </a>

                <Link
                  href="/contact-us"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm"
                >
                  Contact Us
                </Link>

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
              <button
                onClick={() => setShowConsultModal(true)}
                className="hidden sm:block bg-[#D2A68A] hover:bg-[#C4957A] text-white font-semibold px-3 md:px-4 py-2 rounded text-xs md:text-sm whitespace-nowrap transition-colors"
              >
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
            <Link
              href="/about-us"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
            >
              Services
            </Link>
            <div>
              <button
                onClick={() => setShowCitiesMobile(!showCitiesMobile)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
              >
                Cities
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showCitiesMobile ? "rotate-180" : ""
                  }`}
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
              {showCitiesMobile && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/cities/delhi"
                    className="block text-gray-600 hover:text-[#D2A68A] text-sm py-1 transition-colors"
                    onClick={() => {
                      setShowCitiesMobile(false);
                      setOpenDropdown(null);
                    }}
                  >
                    Delhi
                  </Link>
                  <Link
                    href="/cities/agra"
                    className="block text-gray-600 hover:text-[#D2A68A] text-sm py-1 transition-colors"
                    onClick={() => {
                      setShowCitiesMobile(false);
                      setOpenDropdown(null);
                    }}
                  >
                    Agra
                  </Link>
                  <Link
                    href="/cities/mathura"
                    className="block text-gray-600 hover:text-[#D2A68A] text-sm py-1 transition-colors"
                    onClick={() => {
                      setShowCitiesMobile(false);
                      setOpenDropdown(null);
                    }}
                  >
                    Mathura
                  </Link>
                </div>
              )}
            </div>
            <a
              href="/projects"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
            >
              Projects
            </a>
            <Link
              href="/contact-us"
              className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2"
            >
              Contact Us
            </Link>
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
      {showConsultModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white w-full max-w-md rounded-lg shadow-xl overflow-hidden relative">
            {/* Header Image */}
            <div className="relative w-full h-32 md:h-40">
              <Image
                src="/3d-rendering-classic-european-dining-room-and-livi-2026-01-07-01-44-53-utc.webp"
                alt="Contact Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button
                onClick={() => setShowConsultModal(false)}
                className="absolute top-3 right-3 text-white hover:text-gray-200 bg-black/30 hover:bg-black/50 rounded-full p-1.5 transition-colors z-10"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
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
              </button>
              <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-semibold">
                Get In Touch With Us
              </h3>
            </div>
            
            {/* Form Content */}
            <div className="p-6">
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                setShowConsultModal(false);
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="consult-name">
                  Name
                </label>
                <input
                  id="consult-name"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D2A68A]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="consult-number">
                  Phone Number
                </label>
                <input
                  id="consult-number"
                  type="tel"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D2A68A]"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="consult-email">
                  Email
                </label>
                <input
                  id="consult-email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D2A68A]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="consult-message">
                  Message
                </label>
                <textarea
                  id="consult-message"
                  required
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D2A68A] resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#D2A68A] hover:bg-[#C4957A] text-white font-semibold py-2.5 rounded-md text-sm transition-colors"
              >
                Submit
              </button>
            </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

