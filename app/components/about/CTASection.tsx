"use client";

import { useState } from "react";

export default function CTASection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, phone });
  };

  return (
    <section 
      className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[480px] sm:min-h-[580px]"
    >
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 sm:hidden bg-bottom"
        style={{
          backgroundImage: 'url(/pattern/newsletter-mob.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Desktop Background */}
      <div 
        className="hidden sm:block absolute inset-0 bg-center"
        style={{
          backgroundImage: 'url(/pattern/newsletter.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-center relative z-10 w-full">
        <div className="bg-[#FAF7F4] rounded-lg p-4 sm:p-6 md:p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'url(/pattern/flip-3.svg)',
              backgroundSize: '600px 600px',
              backgroundRepeat: 'repeat',
              backgroundPosition: '0 0',
            }}
          />
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6D3A22] mb-4 sm:mb-5 leading-tight px-2">
              Ready to transform your space?
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3 max-w-xl mx-auto px-2">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#6D3A22]/20 focus:outline-none focus:ring-2 focus:ring-[#6D3A22] focus:border-transparent text-sm text-[#6D3A22] placeholder:text-[#6D3A22]/50 bg-white"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#6D3A22]/20 focus:outline-none focus:ring-2 focus:ring-[#6D3A22] focus:border-transparent text-sm text-[#6D3A22] placeholder:text-[#6D3A22]/50 bg-white"
                />
              </div>
              <button
                type="submit"
                className="bg-[#6D3A22] hover:bg-[#5A2F1A] active:bg-[#5A2F1A] text-white px-4 sm:px-6 py-2 sm:py-2.5 uppercase tracking-widest text-xs font-bold transition-colors duration-300 rounded-lg whitespace-nowrap w-full sm:w-auto"
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

