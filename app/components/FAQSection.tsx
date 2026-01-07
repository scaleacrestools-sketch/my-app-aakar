"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Why do I need an interior designer?",
    answer:
      "An interior designer brings professional expertise to create functional, aesthetically pleasing spaces. They help optimize your space, select appropriate materials, manage your budget effectively, and save you time and effort throughout the design process.",
  },
  {
    id: 2,
    question: "Why is Livspace perfect for your home interior design?",
    answer:
      "Livspace offers end-to-end interior design solutions with a team of experienced designers, a wide range of customizable options, quality materials, and a hassle-free experience from design to installation. We ensure your vision is brought to life efficiently.",
  },
  {
    id: 3,
    question: "What services are included under home interior design?",
    answer:
      "Home interior design services typically include space planning, 3D design visualization, material selection, furniture and decor curation, modular solutions, false ceiling design, lighting design, and end-to-end project management.",
  },
  {
    id: 4,
    question: "How much does home interiors cost?",
    answer:
      "The cost of home interiors depends on various factors including the size of your home, scope of work, materials chosen, and customization level. We offer flexible pricing packages and transparent cost breakdowns tailored to your budget and requirements.",
  },
  {
    id: 5,
    question: "What will be the timelines for my project completion?",
    answer:
      "Project timelines vary based on the scope and complexity of your interior design project. Typically, a complete home interior project takes 8-12 weeks from design approval to final installation. We provide a detailed timeline at the start of your project.",
  },
  {
    id: 6,
    question: "What are the trending interior design styles?",
    answer:
      "Current trending interior design styles include modern minimalism, contemporary designs, Scandinavian aesthetics, industrial themes, and biophilic designs. Our designers stay updated with the latest trends and can help you choose a style that reflects your personality and lifestyle.",
  },
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
          FAQs About Home Interior Design
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left"
                aria-expanded={openFAQ === faq.id}
              >
                <div className="flex items-start sm:items-center gap-2 sm:gap-4 flex-1 min-w-0">
                  <span className="text-gray-500 font-medium text-base sm:text-lg flex-shrink-0">
                    {index + 1}.
                  </span>
                  <span className="text-gray-800 font-medium text-sm sm:text-base md:text-lg break-words">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 ml-2 sm:ml-4">
                  {openFAQ === faq.id ? (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
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
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>
              </button>
              {openFAQ === faq.id && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 pl-8 sm:pl-14">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

