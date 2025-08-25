import React from "react";
import {
  PenTool,
  Monitor,
  Layout,
  Palette,
  Search,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs sm:text-sm md:text-base text-sky-700">
      <CheckCircle2 className="w-4 h-4 text-sky-600" /> {children}
    </span>
  );
}

const UiUxDesign = () => {
  // ✅ Primary CTA scroll
  const onPrimaryCta = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-900">
        {/* Hero Section */}

        <header className="bg-gradient-to-br from-sky-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-12">
            <div className="max-w-3xl animate-fadeIn">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs sm:text-sm font-medium text-sky-600">
                <Search className="w-4 h-4" /> UI/UX Design Services
              </span>
              <h1 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                Transforming Ideas into Seamless Digital Experiences
              </h1>
              <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
                We craft user-centered design that balances creativity,
                functionality, and strategy to deliver seamless interaction
                across web, mobile, and digital platforms
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                <Pill>User Research</Pill>
                <Pill>Wireframes</Pill>
                <Pill>Prototypes</Pill>
                <Pill>Visual Design</Pill>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onPrimaryCta}
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-white shadow hover:bg-sky-500 transition"
                >
                  Start a UI/Ux Project
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* What We Offer */}
        <section
          id="services"
          className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white max-w-7xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16">
            Our UI/UX Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-5 sm:p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <PenTool className="h-8 sm:h-10 w-8 sm:w-10 text-sky-600 mb-3 sm:mb-4" />
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                User Research
              </h3>
              <p className="text-sm sm:text-base">
                Understanding user needs and behaviors to design meaningful,
                user-focused experiences.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <Layout className="h-8 sm:h-10 w-8 sm:w-10 text-sky-700 mb-3 sm:mb-4" />
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                Wireframing & Prototyping
              </h3>
              <p className="text-sm sm:text-base">
                Creating wireframes and interactive prototypes to validate
                designs before development.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <Palette className="h-8 sm:h-10 w-8 sm:w-10 text-sky-500 mb-3 sm:mb-4" />
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                Visual Design
              </h3>
              <p className="text-sm sm:text-base">
                Crafting modern, accessible, and brand-consistent interfaces
                that captivate users.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16">
            Our Design Process
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1. Discovery",
                desc: "Identifying user goals, business needs, and design requirements.",
              },
              {
                step: "2. Research",
                desc: "Conducting user interviews, surveys, and competitor analysis.",
              },
              {
                step: "3. Wireframing",
                desc: "Building low-fidelity wireframes to outline information architecture.",
              },
              {
                step: "4. Prototyping",
                desc: "Creating interactive prototypes for usability testing and validation.",
              },
              {
                step: "5. Visual Design",
                desc: "Designing polished, user-friendly interfaces with accessibility in mind.",
              },
              {
                step: "6. Delivery",
                desc: "Providing ready-to-implement design assets and developer handoff.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {item.step}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16">
            Design for Every Platform
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              "Web Applications",
              "Mobile Apps",
              "Dashboards",
              "E-commerce",
              "SaaS Platforms",
              "Marketing Websites",
              "Wearables",
              "Enterprise Systems",
            ].map((platform, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
              >
                <Monitor className="h-6 w-6 sm:h-8 sm:w-8 text-sky-600 mx-auto mb-2 sm:mb-3" />
                <p className="font-medium text-sm sm:text-base">{platform}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            Impact of Our Design Solutions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-700">
                85%
              </h3>
              <p className="opacity-90 text-sm sm:text-base">
                Improved User Retention
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-700">
                60%
              </h3>
              <p className="opacity-90 text-sm sm:text-base">
                Boost in Conversion Rates
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-700">
                50%
              </h3>
              <p className="opacity-90 text-sm sm:text-base">
                Faster Task Completion
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-700">
                95%
              </h3>
              <p className="opacity-90 text-sm sm:text-base">
                Client Satisfaction
              </p>
            </div>
          </div>
        </section>
      </div>

      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default UiUxDesign;
