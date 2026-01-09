import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#6D3A22] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="relative w-24 h-10 sm:w-32 sm:h-12">
                <Image
                  src="/AAKAR-COLOR-scaled.webp"
                  alt="AAKAR Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Delivering exceptional interior design services with integrity, expertise, and a commitment to transforming your spaces.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-[#D2A68A] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#D2A68A] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-[#D2A68A] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2A68A] mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Plot No. 5, 2nd Floor, Left Side, Kehar Singh Estate, Westend Marg, Lane No. 2, Saidulajab, New Delhi - 110030
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2A68A] mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+919266023436" className="text-gray-300 text-xs sm:text-sm hover:text-[#D2A68A] transition-colors break-all">
                  +91 9266023436
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2A68A] mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:aakar.interior.officials@gmail.com" className="text-gray-300 text-xs sm:text-sm hover:text-[#D2A68A] transition-colors break-all">
                  aakar.interior.officials@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/aakarinterior/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-[#D2A68A] hover:bg-[#D2A68A] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/aakarinterior_/?igsh=MXI4bnJxb281MWxzYw%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-[#D2A68A] hover:bg-[#D2A68A] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-300">
              <p>© 2026 AAKAR. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <Link href="/privacy-policy" className="hover:text-[#D2A68A] transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms-and-conditions" className="hover:text-[#D2A68A] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

