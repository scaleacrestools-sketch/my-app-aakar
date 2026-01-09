"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What services does Aakar Interior offer?",
    answer:
      "We offer complete home interior solutions including modular kitchens, wardrobes, bedroom furniture, living room designs, TV units, pooja rooms, storage solutions, false ceilings, lighting, and complete home renovations. We handle everything from design to installation.",
  },
  {
    id: 2,
    question: "How much does a home interior cost?",
    answer:
      "It depends on your home size and materials. Typically, a 2BHK ranges from ₹3-8 lakhs, 3BHK from ₹5-12 lakhs. Modular kitchens start from ₹1.2 lakhs. Book a free consultation for an accurate estimate based on your specific requirements.",
  },
  {
    id: 3,
    question: "How long will my project take?",
    answer:
      "Modular kitchen: 25-30 days, Single bedroom: 15-20 days, Complete 2BHK: 45-60 days, Complete 3BHK: 60-75 days. We provide a clear timeline upfront and keep you updated with daily progress on WhatsApp.",
  },
  {
    id: 4,
    question: "Do you provide warranty?",
    answer:
      "Yes! We offer a comprehensive 10-year warranty on all modular products covering manufacturing defects and hardware issues. We also provide lifetime after-sales support for any queries or maintenance needs.",
  },
  {
    id: 5,
    question: "What materials do you use?",
    answer:
      "We use premium BWP/BWR waterproof plywood, branded hardware (Hettich/Ebco/Hafele), soft-close hinges, and durable laminates. All materials are sourced from authorized dealers and come with manufacturer warranties. We can show you physical samples.",
  },
  {
    id: 6,
    question: "Are there any hidden charges?",
    answer:
      "No hidden charges at all. Our quotation includes design, materials, hardware, manufacturing, transportation, and installation. Additional costs only arise if you request changes after approval or upgrade materials beyond the original scope.",
  },
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
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
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left cursor-pointer"
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

