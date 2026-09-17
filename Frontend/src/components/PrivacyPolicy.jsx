import React from "react";
import WhatsappBanner from "../components/WhatsappBanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

/* =========================
   Reusable Section Component
========================= */

const Section = ({ number, title, children }) => {
  return (
    <section className="group relative border-b border-gray-100 py-8 last:border-b-0 sm:py-10">
      {/* Section Number */}
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-blue-50 px-2 text-xs font-bold text-blue-600">
          {number}
        </span>

        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="pl-0 text-[15px] leading-7 text-gray-600 sm:pl-10 sm:text-base">
        {children}
      </div>
    </section>
  );
};

const PrivacyPolicy = () => {
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
        {/* Background Effects */}
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
              Privacy Policy
            </span>
          </div>

          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Legal & Privacy
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Your privacy matters to us. This policy explains how
            ZyntexMedia handles information when you use our services.
          </p>

          {/* Updated Badge */}
          <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
              ZyntexMedia
            </span>

            <span className="h-1 w-1 rounded-full bg-gray-300" />

            <span>Privacy & Data Protection</span>
          </div>
        </div>
      </header>

      {/* =========================
          Main Content
      ========================= */}
      <main className="px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Main Policy Card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            
            {/* Intro */}
            <div className="border-b border-gray-100 bg-gradient-to-br from-gray-50 via-white to-blue-50/40 p-6 sm:p-8 lg:p-10">
              <div className="flex gap-4">
                <div className="hidden h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-blue-600 to-orange-400 sm:block" />

                <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                  <strong className="font-semibold text-gray-900">
                    ZyntexMedia
                  </strong>{" "}
                  built the application as a free application. This SERVICE
                  is provided by ZyntexMedia at no cost and is intended for
                  use as is. This page is used to inform visitors regarding
                  our policies with the collection, use, and disclosure of
                  Personal Information if anyone decides to use our Service.
                </p>
              </div>

              <p className="mt-5 text-[15px] leading-7 text-gray-600 sm:text-base">
                If you choose to use our Service, then you agree to the
                collection and use of information in relation to this policy.
                The Personal Information that we collect is used for providing
                and improving the Service. We will not use or share your
                information with anyone except as described in this Privacy
                Policy.
              </p>
            </div>

            {/* =========================
                Policy Sections
            ========================= */}
            <div className="px-6 sm:px-8 lg:px-10">

              {/* 01 */}
              <Section
                number="01"
                title="Information Collection and Use"
              >
                <p className="mb-5">
                  For a better experience, while using our Service, we may
                  require you to provide us with certain personally identifiable
                  information, including but not limited to:
                </p>

                <ul className="mb-5 space-y-2.5">
                  {[
                    "Name",
                    "Contact Number",
                    "Email ID",
                    "Address",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-5">
                  The information that we request will be retained on your
                  device and is not collected by us in any way.
                </p>

                <p className="mb-3">
                  The app does use third-party services that may collect
                  information used to identify you.
                </p>

                <p className="mb-3 font-semibold text-gray-800">
                  Third-party services used by the app:
                </p>

                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Google Play
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Facebook
                  </li>
                </ul>
              </Section>

              {/* 02 */}
              <Section number="02" title="Log Data">
                <p>
                  Whenever you use our Service, in the case of an error in the
                  app, we collect data and information through third-party
                  products on your phone called Log Data. This Log Data may
                  include details such as your device Internet Protocol (“IP”)
                  address, device name, operating system version, configuration
                  of the app, the time and date of your use of the Service, and
                  other statistics.
                </p>
              </Section>

              {/* 03 */}
              <Section number="03" title="Cookies">
                <p>
                  Cookies are files with a small amount of data that are
                  commonly used as anonymous unique identifiers. These are sent
                  to your browser from the websites you visit and are stored on
                  your device's internal memory.
                </p>

                <p className="mt-5">
                  The Service does not use these cookies explicitly, but may
                  use third-party code and libraries that use cookies to improve
                  services. You may choose to refuse cookies, but some portions
                  of the Service may not be usable.
                </p>
              </Section>

              {/* 04 */}
              <Section number="04" title="Service Providers">
                <p className="mb-5">
                  We may employ third-party companies and individuals due to
                  the following reasons:
                </p>

                <ul className="mb-5 space-y-2.5">
                  {[
                    "To facilitate our Service",
                    "To provide the Service on our behalf",
                    "To perform Service-related services",
                    "To assist us in analyzing how our Service is used",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  These third parties have access to your Personal Information
                  only to perform the tasks assigned to them on our behalf.
                  They are obligated not to disclose or use the information for
                  any other purpose.
                </p>
              </Section>

              {/* 05 */}
              <Section number="05" title="Security">
                <p>
                  We value your trust in providing us with your Personal
                  Information, and we strive to use commercially acceptable
                  means of protecting it. However, no method of transmission
                  over the internet or method of electronic storage is 100%
                  secure and reliable, and we cannot guarantee absolute
                  security.
                </p>
              </Section>

              {/* 06 */}
              <Section number="06" title="Links to Other Sites">
                <p>
                  This Service may contain links to other websites. If you
                  click a third-party link, you will be directed to that site.
                  We strongly advise you to review the Privacy Policy of those
                  websites.
                </p>

                <p className="mt-5">
                  We have no control over and assume no responsibility for the
                  content, privacy policies, or practices of any third-party
                  sites or services.
                </p>
              </Section>

              {/* 07 */}
              <Section number="07" title="Children’s Privacy">
                <p>
                  Our Services do not address anyone under the age of 13. We do
                  not knowingly collect personally identifiable information from
                  children under 13.
                </p>

                <p className="mt-5">
                  If we discover a child has provided us with personal
                  information, we immediately delete it from our servers. If you
                  are a parent or guardian and become aware your child has
                  provided us with personal information, please contact us so we
                  can take necessary actions.
                </p>
              </Section>

              {/* 08 */}
              <Section number="08" title="Changes to This Privacy Policy">
                <p>
                  We may update our Privacy Policy from time to time. Please
                  review this page periodically for any changes. We will notify
                  you of updates by posting the revised Privacy Policy here.
                </p>

                <p className="mt-5">
                  This policy is effective as of the date of its publication.
                </p>
              </Section>

              {/* 09 */}
              <Section number="09" title="Contact Us">
                <p>
                  If you have any questions or suggestions about our Privacy
                  Policy, do not hesitate to contact us at:
                </p>

                <a
                  href="mailto:zyntexmedia@gmail.com"
                  className="mt-4 inline-flex items-center rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 font-semibold text-blue-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-100"
                >
                  zyntexmedia@gmail.com
                </a>
              </Section>

              {/* 10 */}
              <Section
                number="10"
                title="Changes to Terms and Conditions"
              >
                <p>
                  We may update our Terms and Conditions from time to time.
                  Please review this page periodically for any updates. Any
                  changes will be posted here.
                </p>
              </Section>
            </div>

            {/* =========================
                Bottom Notice
            ========================= */}
            <div className="border-t border-gray-100 bg-gray-50/80 px-6 py-7 text-center sm:px-8">
              <p className="text-xs leading-5 text-gray-400">
                This privacy policy was originally generated using a privacy
                policy template and has been modified for ZyntexMedia.
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

export default PrivacyPolicy;
