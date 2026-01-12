"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingAIAssistant from "../components/FloatingAIAssistant";

export default function TermsAndConditionsPage() {
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
            Terms and Conditions
          </h1>
          <p className="text-stone-500 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-stone max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                By accessing and using the AAKAR Interior Design website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                2. Services Description
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                AAKAR Interior Design provides interior design consultation, design services, project management, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                3. Client Responsibilities
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Provide accurate and complete information about your project requirements</li>
                <li>Make timely payments as agreed in the project contract</li>
                <li>Grant necessary access to your property for design and installation purposes</li>
                <li>Obtain any required permits or approvals from local authorities</li>
                <li>Respect the intellectual property rights of AAKAR Interior Design</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                4. Payment Terms
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Payment terms will be specified in your project contract. Generally:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>An initial deposit may be required to commence work</li>
                <li>Progress payments may be scheduled based on project milestones</li>
                <li>Final payment is due upon project completion</li>
                <li>Late payments may incur additional charges as specified in the contract</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                All design concepts, drawings, plans, and materials created by AAKAR Interior Design remain our intellectual property until full payment is received. Upon full payment, you receive a license to use the designs for the specified project. Designs may not be reproduced, distributed, or used for other projects without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                6. Project Timeline
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Project timelines are estimates and may vary based on various factors including client responsiveness, material availability, and unforeseen circumstances. We will communicate any significant delays and work to minimize their impact.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                7. Cancellation and Refunds
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Cancellation policies will be detailed in your project contract. Generally:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Cancellation must be made in writing</li>
                <li>Work completed up to the cancellation date will be charged</li>
                <li>Deposits may be non-refundable as specified in the contract</li>
                <li>Refunds, if applicable, will be processed within 30 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                8. Warranties and Guarantees
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We stand behind our workmanship and materials. Specific warranties will be outlined in your project contract. We will address any defects in workmanship within the warranty period at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, AAKAR Interior Design shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the total amount paid by you for the specific project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                10. Third-Party Services
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We may engage third-party contractors, suppliers, or service providers. While we work with reputable partners, we are not responsible for their actions, delays, or quality of work. Any issues with third-party services should be reported to us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                11. Website Usage
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                When using our website, you agree not to:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Copy, modify, or distribute website content without permission</li>
                <li>Use automated systems to scrape or collect data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Any disputes arising from these terms or our services shall first be addressed through good faith negotiation. If a resolution cannot be reached, disputes will be resolved through binding arbitration in accordance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                13. Modifications to Terms
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                14. Governing Law
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                15. Contact Information
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                For questions about these Terms and Conditions, please contact us:
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

