"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PABBLY_WEBHOOK_URL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZkMDYzZjA0Mzc1MjZmNTUzMjUxMzIi_pc";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [showCitiesMobile, setShowCitiesMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleConsultFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("consult-name") || "",
      email: formData.get("consult-email"),
      phone: formData.get("consult-number"),
      service: "Consultation",
      message: formData.get("consult-message") || "",
      dateFormatted: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    try {
      const response = await fetch(PABBLY_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setShowConsultModal(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <nav className="fixed top-[22px] sm:top-[28px] left-0 right-0 z-50 bg-white shadow-sm">
        {/* Top Navigation Bar */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-18">
              {/* Left: Logo */}
              <div className="flex items-center">
                <Link href="/" className="cursor-pointer">
                  <div className="relative h-10 w-32 sm:h-12 sm:w-40">
                    <Image
                      src="/3 (1).png"
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
                <Link
                  href="/about-us"
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm uppercase"
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm uppercase"
                >
                  Services
                </Link>

                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("cities")}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm cursor-pointer uppercase"
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
                      <Link
                        href="/cities?city=delhi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D2A68A] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        DELHI
                      </Link>
                      <Link
                        href="/cities?city=agra"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D2A68A] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        AGRA
                      </Link>
                      <Link
                        href="/cities?city=mathura"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D2A68A] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        MATHURA
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm uppercase"
                >
                  Projects
                </Link>

                <Link
                  href="/contact-us"
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm uppercase"
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
                  className="hidden sm:flex bg-[#6D3A22] hover:bg-[#5A2F1A] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg items-center gap-1.5 md:gap-2 group text-sm font-medium whitespace-nowrap cursor-pointer transition-colors"
                >
                  BOOK A FREE PLAN
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => toggleDropdown("mobile")}
                  className="lg:hidden text-gray-700 p-2 cursor-pointer"
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
                className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2 uppercase"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2 uppercase"
              >
                Services
              </Link>
              <div>
                <button
                  onClick={() => setShowCitiesMobile(!showCitiesMobile)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium text-sm py-2 uppercase"
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
                      href="/cities?city=delhi"
                      className="block text-gray-600 hover:text-[#D2A68A] text-sm py-1 transition-colors"
                      onClick={() => {
                        setShowCitiesMobile(false);
                        setOpenDropdown(null);
                      }}
                    >
                      DELHI
                    </Link>
                    <Link
                      href="/cities?city=agra"
                      className="block text-gray-600 hover:text-[#D2A68A] text-sm py-1 transition-colors"
                      onClick={() => {
                        setShowCitiesMobile(false);
                        setOpenDropdown(null);
                      }}
                    >
                      AGRA
                    </Link>
                    <Link
                      href="/cities?city=mathura"
                      className="block text-gray-600 hover:text-[#D2A68A] text-sm py-1 transition-colors"
                      onClick={() => {
                        setShowCitiesMobile(false);
                        setOpenDropdown(null);
                      }}
                    >
                      MATHURA
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/projects"
                className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2 uppercase"
              >
                Projects
              </Link>
              <Link
                href="/contact-us"
                className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2 uppercase"
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
              <button
                onClick={() => setShowConsultModal(true)}
                className="w-full flex bg-[#6D3A22] hover:bg-[#5A2F1A] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg items-center justify-center gap-1.5 md:gap-2 group text-sm font-medium mt-2 cursor-pointer transition-colors"
              >
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
            <div className="relative w-full h-24 md:h-28">
              <Image
                src="/3d-rendering-classic-european-dining-room-and-livi-2026-01-07-01-44-53-utc.webp"
                alt="Contact Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button
                onClick={() => setShowConsultModal(false)}
                className="absolute top-2 right-2 text-white hover:text-gray-200 bg-black/30 hover:bg-black/50 rounded-full p-1.5 transition-colors z-10"
                aria-label="Close"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className="absolute bottom-2 left-3 right-3 text-white text-lg md:text-xl font-semibold uppercase">
                Get In Touch With Us
              </h3>
            </div>

            {/* Form Content */}
            <div className="p-4 md:p-5">
              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded text-sm">
                  Thank you! Your message has been sent successfully. We&apos;ll
                  get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded text-sm">
                  There was an error sending your message. Please try again or
                  contact us directly.
                </div>
              )}
              <form className="space-y-2.5" onSubmit={handleConsultFormSubmit}>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1 uppercase"
                    htmlFor="consult-name"
                  >
                    Name
                  </label>
                  <input
                    id="consult-name"
                    name="consult-name"
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D2A68A]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1 uppercase"
                    htmlFor="consult-number"
                  >
                    Phone Number
                  </label>
                  <input
                    id="consult-number"
                    name="consult-number"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    inputMode="numeric"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D2A68A]"
                    placeholder="1234567890"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1 uppercase"
                    htmlFor="consult-email"
                  >
                    Email
                  </label>
                  <input
                    id="consult-email"
                    name="consult-email"
                    type="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D2A68A]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1 uppercase"
                    htmlFor="consult-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="consult-message"
                    name="consult-message"
                    rows={3}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D2A68A] resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6D3A22] hover:bg-[#5A2F1A] disabled:bg-stone-400 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-md text-sm transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

