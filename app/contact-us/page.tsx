import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headset Icon */}
          <div className="flex justify-center mb-6">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 text-[#D2A68A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Contact us
          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Help is just a click away
          </h2>

          {/* Call Hours */}
          <p className="text-base sm:text-lg text-gray-700 mb-10">
            Call us anytime between 10am - 7pm
          </p>

          {/* Contact Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 max-w-md mx-auto">
            {/* Email */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
              <a
                href="mailto:aakar.interior.officials@gmail.com"
                className="text-gray-900 text-base sm:text-lg font-medium hover:text-[#D2A68A] transition-colors"
              >
                aakar.interior.officials@gmail.com
              </a>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#D2A68A] flex-shrink-0 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between">
              <a
                href="tel:+919266023436"
                className="text-gray-900 text-base sm:text-lg font-medium hover:text-[#D2A68A] transition-colors"
              >
                +91 9266023436
              </a>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#D2A68A] flex-shrink-0 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

