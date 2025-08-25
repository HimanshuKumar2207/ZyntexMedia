import React from "react";
import {
  Megaphone,
  BarChart3,
  Users,
  Globe,
  LineChart,
  TrendingUp,
  Search,
  CheckCircle2,
} from "lucide-react";
import Navbar from "./Navbar";
import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs sm:text-sm text-sky-700">
      <CheckCircle2 className="w-4 h-4 text-sky-600" aria-hidden="true" />
      {children}
    </span>
  );
}

const DigitalMarketing = () => {
  const onPrimaryCta = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <Navbar />
      <div className="text-gray-900">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-sky-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-12">
            <div className="max-w-3xl animate-fadeIn">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs sm:text-sm font-medium text-sky-600">
                <Search className="w-4 h-4" /> Digital Marketing Services
              </span>
              <h1 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                Drive Growth with Smart <br /> Marketing Strategies
              </h1>
              <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
                Elevate your branding visibility with data-driven marketing,
                social engagement, and impactful campaigns that connect with
                your audience and deliver measurable results.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                <Pill>SEO</Pill>
                <Pill>Social Media</Pill>
                <Pill>Content</Pill>
                <Pill>Analytics</Pill>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onPrimaryCta}
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-white shadow hover:bg-sky-500 transition"
                >
                  Start a Marketing Project
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

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900">
            Our Digital Marketing Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: <Megaphone className="h-8 w-8 sm:h-12 sm:w-12 text-sky-600" />,
                title: "SEO Optimization",
                desc: "Boost your rankings with on-page, off-page, and technical SEO.",
              },
              {
                icon: <Users className="h-8 w-8 sm:h-12 sm:w-12 text-sky-600" />,
                title: "Social Media Marketing",
                desc: "Engage your audience with campaigns on Instagram, Facebook, LinkedIn, and more.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 sm:h-12 sm:w-12 text-sky-600" />,
                title: "Content Strategy",
                desc: "Create impactful blogs, videos, and stories that drive conversions.",
              },
              {
                icon: <Globe className="h-8 w-8 sm:h-12 sm:w-12 text-sky-600" />,
                title: "Global Reach",
                desc: "Expand your brand worldwide with localized and multilingual campaigns.",
              },
              {
                icon: <LineChart className="h-8 w-8 sm:h-12 sm:w-12 text-sky-600" />,
                title: "Analytics & Reporting",
                desc: "Track ROI with real-time insights and performance analytics.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 sm:h-12 sm:w-12 text-sky-600" />,
                title: "Growth Campaigns",
                desc: "Launch multi-channel campaigns to generate leads and boost visibility.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg sm:text-2xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm sm:text-base opacity-90 text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900">
            Our Marketing Process
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 max-w-6xl mx-auto">
            {[
              { step: "1. Research", desc: "Analyzing competitors, audience, and market trends." },
              { step: "2. Strategy", desc: "Crafting a tailored digital marketing roadmap." },
              { step: "3. Campaigns", desc: "Launching SEO, ads, and social media campaigns." },
              { step: "4. Engagement", desc: "Building trust and connections with your audience." },
              { step: "5. Analytics", desc: "Tracking KPIs and measuring performance in real time." },
              { step: "6. Optimization", desc: "Refining strategies for higher ROI and conversions." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white shadow hover:shadow-lg transition"
              >
                <h3 className="text-base sm:text-xl font-semibold mb-2 text-sky-700">{item.step}</h3>
                <p className="text-sm sm:text-base opacity-90 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-gray-900">
            Tools & Platforms We Use
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto text-center">
            {[
              "Google Analytics",
              "SEMRush",
              "Ahrefs",
              "Hootsuite",
              "Mailchimp",
              "HubSpot",
              "Canva",
              "Meta Ads Manager",
            ].map((tool, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 bg-gray-50 text-gray-900 rounded-2xl shadow hover:shadow-lg transition"
              >
                <BarChart3 className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 text-sky-600" />
                <p className="text-sm sm:text-base font-semibold">{tool}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-gray-900">
            Impact of Our Marketing Solutions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 max-w-6xl mx-auto text-center">
            {[
              { stat: "120%", desc: "Increase in Website Traffic" },
              { stat: "85%", desc: "Improved Lead Generation" },
              { stat: "95%", desc: "Higher Engagement Rates" },
              { stat: "70%", desc: "Reduced Acquisition Costs" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white text-gray-900 shadow hover:shadow-lg transition"
              >
                <h3 className="text-2xl sm:text-4xl font-extrabold mb-2 text-sky-600">
                  {item.stat}
                </h3>
                <p className="text-xs sm:text-base opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default DigitalMarketing;
