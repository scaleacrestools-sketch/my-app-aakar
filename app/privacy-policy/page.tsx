"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingAIAssistant from "../components/FloatingAIAssistant";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />

      <div className="pt-[60px] sm:pt-[50px] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-stone-500 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-stone max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                AAKAR Interior Design ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                We may collect personal information that you provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Project details and requirements</li>
                <li>Payment information (processed through secure third-party payment processors)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>IP address and browser type</li>
                <li>Device information</li>
                <li>Usage data and website interaction patterns</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your inquiries and project requests</li>
                <li>Communicate with you about our services, updates, and promotional offers</li>
                <li>Personalize your experience on our website</li>
                <li>Analyze website usage and trends</li>
                <li>Ensure website security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                7. Cookies
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-stone-50 p-6 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">AAKAR Interior Design</p>
                <p className="text-stone-600 mb-1">
                  Email: <a href="mailto:aakar.interior.officials@gmail.com" className="text-[#D2A68A] hover:underline">aakar.interior.officials@gmail.com</a>
                </p>
                <p className="text-stone-600">
                  Phone: <a href="tel:+919266023436" className="text-[#D2A68A] hover:underline">+91 9266023436</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingAIAssistant />
    </div>
  );
}

