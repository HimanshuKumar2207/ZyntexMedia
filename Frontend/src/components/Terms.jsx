import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";

/* =========================
   Reusable Section Component
========================= */

const Section = ({ number, title, children }) => {
  return (
    <section className="group relative border-b border-gray-100 py-8 last:border-b-0 sm:py-10">
      {/* Section Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-blue-50 px-2 text-xs font-bold text-blue-600">
          {number}
        </span>

        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {title}
        </h2>
      </div>

      {/* Section Content */}
      <div className="pl-0 text-[15px] leading-7 text-gray-600 sm:pl-10 sm:text-base">
        {children}
      </div>
    </section>
  );
};

const Terms = () => {
  const sections = [
    {
      number: "01",
      title: "Use of Our Services",
      text: "Our services are intended for both individual and organizational use. By using ZyntexMedia offerings, you agree not to misuse the platform, attempt unauthorized access, exploit vulnerabilities, or engage in any activity that may harm our systems or reputation. Users must comply with applicable laws and regulations and avoid using our services for fraudulent, abusive, or malicious purposes. We reserve the right to monitor activity to ensure compliance and maintain the integrity of our ecosystem.",
    },
    {
      number: "02",
      title: "Intellectual Property",
      text: "All content, including text, images, logos, branding elements, designs, and digital assets, are the property of ZyntexMedia unless otherwise credited or agreed in writing. Unauthorized use, reproduction, resale, or distribution of our intellectual property without prior written consent is prohibited. Clients may use delivered assets only for the purposes agreed upon under the applicable service agreement.",
    },
    {
      number: "03",
      title: "Payments & Subscriptions",
      text: "When engaging with our paid services, clients are required to provide accurate billing details and authorize payments through approved channels. Fees once paid are non-refundable unless explicitly stated in a written agreement or required by applicable law. Subscriptions and recurring services must be canceled in accordance with the applicable service terms to avoid automatic renewal. ZyntexMedia may update pricing or payment terms with reasonable notice where applicable.",
    },
    {
      number: "04",
      title: "Limitation of Liability",
      text: "While we strive to deliver high-quality, secure, and reliable services, ZyntexMedia shall not be held liable for indirect, incidental, or consequential damages arising from website use, service interruptions, data loss, cyberattacks, or third-party integrations, to the extent permitted by applicable law. Any limitation of liability will be subject to the terms of the applicable service agreement and applicable law.",
    },
    {
      number: "05",
      title: "Third-Party Links",
      text: "Our website may feature links to external websites, resources, or third-party applications for user convenience. These external sites are not controlled or operated by ZyntexMedia, and we are not responsible for their security, privacy policies, availability, or content. Users are encouraged to review the applicable terms and privacy policies of third-party platforms before engaging with them.",
    },
    {
      number: "06",
      title: "Termination of Services",
      text: "ZyntexMedia may suspend, restrict, or terminate access to services if a user violates these Terms & Conditions, engages in harmful or unlawful activity, or fails to meet applicable payment obligations. Termination may occur without prior notice where necessary to protect our systems, users, or legal interests. Clients remain responsible for any outstanding amounts due at the time of termination.",
    },
    {
      number: "07",
      title: "Changes to These Terms",
      text: "ZyntexMedia may update or modify these Terms & Conditions from time to time to reflect changes in our services, legal requirements, or business practices. Updated terms will become effective when posted on this page unless otherwise stated. Continued use of our services after an update may constitute acceptance of the revised terms. We encourage users to review this page periodically.",
    },
    {
      number: "08",
      title: "Governing Law & Jurisdiction",
      text: "These Terms & Conditions shall be governed by and construed in accordance with the applicable laws of India. Any disputes or claims arising in connection with these terms or our services shall be subject to the jurisdiction of the courts having appropriate jurisdiction in India. Where appropriate, the parties may first attempt to resolve disputes through good-faith communication.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* =========================
          Navbar
      ========================= */}
      <Navbar />

      {/* =========================
          Hero / Page Header
      ========================= */}
      <header className="relative overflow-hidden border-b border-gray-200 bg-white md:mr-70">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 pb-12 pt-14 sm:px-8 sm:pb-14 sm:pt-16 lg:px-10">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <Link
              to="/"
              className="transition-colors hover:text-blue-600"
            >
              Home
            </Link>

            <span className="text-gray-300">/</span>

            <span className="font-medium text-gray-700">
              Terms & Conditions
            </span>
          </div>

          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Legal & Terms
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Please review these terms carefully before using ZyntexMedia
            websites, digital platforms, and professional services.
          </p>

          {/* Company Info */}
          <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
              ZyntexMedia
            </span>

            <span className="h-1 w-1 rounded-full bg-gray-300" />

            <span>Terms of Service</span>
          </div>
        </div>
      </header>

      {/* =========================
          Main Content
      ========================= */}
      <main className="px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Main Terms Card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

            {/* Introduction */}
            <div className="border-b border-gray-100 bg-gradient-to-br from-gray-50 via-white to-blue-50/40 p-6 sm:p-8 lg:p-10">
              <div className="flex gap-4">
                <div className="hidden h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-blue-600 to-orange-400 sm:block" />

                <div>
                  <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                    Welcome to{" "}
                    <strong className="font-semibold text-gray-900">
                      ZyntexMedia
                    </strong>
                    . By accessing or using our website, digital platforms,
                    and professional services, you agree to comply with these
                    Terms & Conditions.
                  </p>

                  <p className="mt-5 text-[15px] leading-7 text-gray-600 sm:text-base">
                    These terms govern your relationship with us and are
                    intended to establish a clear, secure, transparent, and
                    professional experience for everyone using our services.
                    Please review them carefully before continuing to use our
                    services.
                  </p>
                </div>
              </div>
            </div>

            {/* =========================
                Terms Sections
            ========================= */}
            <div className="px-6 sm:px-8 lg:px-10">
              {sections.map((section) => (
                <Section
                  key={section.number}
                  number={section.number}
                  title={section.title}
                >
                  <p>{section.text}</p>
                </Section>
              ))}
            </div>

            {/* =========================
                Contact Section
            ========================= */}
            <div className="border-t border-gray-100 bg-gray-50/80 p-6 sm:p-8 lg:p-10">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                        09
                      </span>

                      <h2 className="text-xl font-bold text-gray-900">
                        Contact Us
                      </h2>
                    </div>

                    <p className="max-w-2xl text-[15px] leading-7 text-gray-600">
                      If you have any questions, concerns, or requests
                      regarding these Terms & Conditions, please contact our
                      team.
                    </p>
                  </div>

                  <a
                    href="mailto:zyntexmedia@gmail.com"
                    className="inline-flex shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-100"
                  >
                    zyntexmedia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Notice */}
            <div className="border-t border-gray-100 bg-white px-6 py-6 text-center sm:px-8">
              <p className="text-xs leading-5 text-gray-400">
                By using ZyntexMedia services, you acknowledge that you have
                read and understood these Terms & Conditions.
              </p>
            </div>
          </div>

          {/* =========================
              Back To Home
          ========================= */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
            >
              Back to Home

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>

      {/* =========================
          WhatsApp Banner
      ========================= */}
      <WhatsappBanner />

      {/* =========================
          Footer
      ========================= */}
      <Footer />
    </div>
  );
};

export default Terms;
