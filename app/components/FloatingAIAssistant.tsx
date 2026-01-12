"use client";

import { useState } from "react";
import AIGenerationModal from "./AIGenerationModal";

export default function FloatingAIAssistant() {
  const [showAIModal, setShowAIModal] = useState(false);

  return (
    <>
      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 animate-fade-in">
        {/* AI Design Assistant Floating Card */}
        <button
          onClick={() => setShowAIModal(true)}
          className="group relative bg-white rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(109,58,34,0.3)] transition-all duration-300 hover:scale-[1.02] overflow-hidden border border-[#6D3A22]/10 hover:border-[#6D3A22]/20 w-[140px] sm:w-[160px]"
          aria-label="Open AI Interior Design Assistant"
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity"
            style={{
              backgroundImage: 'url(/pattern/flip-3.svg)',
              backgroundSize: '120px 120px',
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 p-3 sm:p-3.5">
            {/* Icon Badge */}
            <div className="flex items-start gap-2.5 mb-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#6D3A22] to-[#5A2F1A] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-[#6D3A22] leading-tight mb-0.5">AI Design</h3>
                <p className="text-[10px] sm:text-xs text-[#45291cdd] leading-tight">Assistant</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-2 pt-2.5 border-t border-[#6D3A22]/10">
              <div className="flex items-center justify-between gap-1.5">
                <span className="text-[10px] sm:text-xs font-semibold text-[#6D3A22]">Try Now</span>
                <svg className="w-3.5 h-3.5 text-[#6D3A22] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6D3A22]/0 via-transparent to-[#5A2F1A]/0 group-hover:from-[#6D3A22]/3 group-hover:to-[#5A2F1A]/3 transition-all duration-300 pointer-events-none" />
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919266023436"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
          aria-label="Contact on WhatsApp"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      <AIGenerationModal
        isOpen={showAIModal}
        onClose={() => setShowAIModal(false)}
      />
    </>
  );
}

