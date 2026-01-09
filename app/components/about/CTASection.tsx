"use client";

import { useState } from "react";

const PABBLY_WEBHOOK_URL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZkMDYzZjA0Mzc1MjZmNTUzMjUxMzIi_pc";

export default function CTASection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const data = {
      name: name,
      email: "",
      phone: `+91 ${phone}`,
      service: "Get a Quote",
      message: "",
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
        setName("");
        setPhone("");
        setTimeout(() => setSubmitStatus(null), 5000);
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

            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded text-sm">
                Thank you! We&apos;ll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded text-sm">
                There was an error. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3 max-w-xl mx-auto px-2">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#6D3A22]/20 focus:outline-none focus:ring-2 focus:ring-[#6D3A22] focus:border-transparent text-sm text-[#6D3A22] placeholder:text-[#6D3A22]/50 bg-white"
                />
                <div className="flex-1 relative">
                  <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                    <span className="text-sm font-medium text-[#6D3A22]">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 10) {
                        setPhone(value);
                      }
                    }}
                    placeholder="8732606558"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    inputMode="numeric"
                    className="w-full pl-12 sm:pl-14 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-lg border border-[#6D3A22]/20 focus:outline-none focus:ring-2 focus:ring-[#6D3A22] focus:border-transparent text-sm text-[#6D3A22] placeholder:text-[#6D3A22]/50 bg-white"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#6D3A22] hover:bg-[#5A2F1A] active:bg-[#5A2F1A] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-2 sm:py-2.5 uppercase tracking-widest text-xs font-bold transition-colors duration-300 rounded-lg whitespace-nowrap w-full sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Get a Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

