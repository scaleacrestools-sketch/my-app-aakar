"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PABBLY_WEBHOOK_URL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZkMDYzZjA0Mzc1MjZmNTUzMjUxMzIi_pc";

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message") || "",
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
        // Reset success message after 5 seconds
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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-stone-50">
      <Navbar />
      
      <div className="pt-[104px] sm:pt-[108px] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6 animate-fade-in-up">
                  Get in Touch
                </h1>
                <p className="text-lg text-stone-500 font-light max-w-md animate-fade-in-up-delay">
                  We&apos;d love to hear about your project. Please fill out the form or reach out directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-stone-900">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400">Email</p>
                    <a
                      href="mailto:aakar.interior.officials@gmail.com"
                      className="text-stone-800 hover:text-[#D2A68A] transition-colors"
                    >
                      aakar.interior.officials@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-stone-900">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400">Phone</p>
                    <a
                      href="tel:+919266023436"
                      className="text-stone-800 hover:text-[#D2A68A] transition-colors"
                    >
                      +91 9266023436
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-stone-900">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400">Studio</p>
                    <p className="text-stone-800">
                      AAKAR Interior Design Studio<br/>
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Mock Map Image */}
              <div className="w-full h-64 bg-stone-200 grayscale rounded-sm overflow-hidden relative">
                <Image
                  src="/demo5-slide-02.webp"
                  alt="Map Location"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-4 py-2 text-xs font-bold tracking-widest uppercase shadow-md">
                    Our Studio
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-900 mb-8">Project Inquiry</h3>
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded">
                  There was an error sending your message. Please try again or contact us directly.
                </div>
              )}
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-stone-500">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-stone-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-stone-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    inputMode="numeric"
                    className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                    placeholder="1234567890"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs uppercase tracking-widest text-stone-500">
                    Interested Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="full-service">Full-Service Design</option>
                    <option value="interior-architecture">Interior Architecture</option>
                    <option value="furniture-styling">Furniture & Styling</option>
                    <option value="virtual-consultation">Virtual Consultation</option>
                    <option value="renovation">Renovation</option>
                    <option value="modular-interiors">Modular Interiors</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-stone-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D2A68A] hover:bg-[#C4957A] disabled:bg-stone-400 disabled:cursor-not-allowed text-white py-4 mt-4 uppercase tracking-widest text-xs font-bold transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
