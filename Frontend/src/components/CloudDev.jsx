import React, { useState } from "react";
import {
  Cloud,
  Lock,
  Server,
  Globe2,
  CheckCircle2,
  ChevronDown,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";

// ✅ Reusable Section Component
const Section = ({ id, title, eyebrow, children, bg }) => (
  <section id={id} className={`relative py-12 sm:py-16 lg:py-20 ${bg || ""}`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-sky-500 mb-2 sm:mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  </section>
);

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-2.5 sm:px-3 py-1 text-xs sm:text-sm md:text-base text-sky-700">
      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600" />{" "}
      {children}
    </span>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 pb-3 sm:pb-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="mt-2 text-gray-600 text-xs sm:text-sm">{a}</p>}
    </div>
  );
}

// ✅ Data
const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "Seamless migration of apps, databases, and workloads to leading cloud platforms.",
  },
  {
    icon: Server,
    title: "Infrastructure Setup",
    desc: "Designing scalable, resilient, and cost-efficient cloud architectures for businesses of all sizes.",
  },
  {
    icon: Lock,
    title: "Cloud Security",
    desc: "Implementing top-notch security measures to protect data, apps, and infrastructure in the cloud.",
  },
];

const process = [
  {
    step: "Assessment & Strategy",
    desc: "Analyzing workloads and defining a migration and adoption roadmap.",
  },
  {
    step: "Architecture Design",
    desc: "Creating scalable, fault-tolerant, and cost-optimized environments.",
  },
  {
    step: "Deployment & Migration",
    desc: "Deploying apps, databases, and services with zero downtime.",
  },
  {
    step: "Security & Compliance",
    desc: "Ensuring compliance with standards and implementing robust security layers.",
  },
  {
    step: "Monitoring & Optimization",
    desc: "Real-time monitoring with continuous performance optimization.",
  },
  {
    step: "Scaling & Maintenance",
    desc: "Auto-scaling capabilities and proactive system maintenance.",
  },
];

const platforms = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "DigitalOcean",
  "Heroku",
  "IBM Cloud",
  "Oracle Cloud",
  "Vercel",
];

const results = [
  { stat: "70%", label: "Cost Savings in IT Ops" },
  { stat: "99.99%", label: "System Uptime" },
  { stat: "50%", label: "Faster Deployment Times" },
  { stat: "24/7", label: "Monitoring & Support" },
];

const faqs = [
  {
    q: "Do you handle migration from legacy systems?",
    a: "Yes, we specialize in migrating legacy apps and databases to modern cloud platforms with minimal downtime.",
  },
  {
    q: "Which cloud providers do you support?",
    a: "We work with AWS, Azure, GCP, DigitalOcean, and more based on client needs.",
  },
  {
    q: "Do you provide ongoing cloud management?",
    a: "Yes, we provide monitoring, scaling, optimization, and 24/7 support.",
  },
];

const CloudDev = () => {
  const handlePrimaryCta = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <Navbar />

      {/* ✅ Hero Section */}

      <header className="bg-gradient-to-br from-sky-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-12">
          <div className="max-w-3xl animate-fadeIn">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs sm:text-sm font-medium text-sky-600">
              <Search className="w-4 h-4" /> Cloud Development Services
            </span>
            <h1 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Empowering Businesses With Scalable Cloud Solutions
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
              Harness the power of cloud technologies to scale, secure, and
              accelerate your business operations worldwide
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <Pill>Migration</Pill>
              <Pill>Security</Pill>
              <Pill>Scalability</Pill>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePrimaryCta}
                className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-white shadow hover:bg-sky-500 transition"
              >
                Start a Cloud Project
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Services */}
      <Section
        id="services"
        title="Our Cloud Services"
        eyebrow="Services"
        bg="bg-gradient-to-br from-white to-sky-50"
      >
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <s.icon className="w-7 h-7 sm:w-8 sm:h-8 text-sky-600" />
              <h3 className="mt-3 font-semibold text-gray-900 text-base sm:text-lg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ✅ Process */}
      <Section id="process" title="Our Cloud Process" eyebrow="How We Work">
        <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {process.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-sky-50 p-5 sm:p-6 border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-600 transition"
            >
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                {p.step}
              </h3>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ✅ Platforms */}
      <Section
        id="platforms"
        title="Supported Cloud Platforms"
        eyebrow="Technology"
        bg="bg-gradient-to-br from-sky-50 to-white"
      >
        <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-8">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-4 sm:p-6 border border-gray-200 shadow-sm hover:border-sky-600 hover:shadow-md transition text-center"
            >
              <Globe2 className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600 mx-auto mb-2 sm:mb-3" />
              <p className="font-medium text-xs sm:text-sm md:text-base text-gray-900">
                {platform}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ✅ Results */}
      <Section
        id="results"
        title="Impact of Our Cloud Solutions"
        eyebrow="Outcomes"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
          {results.map((r, i) => (
            <div key={i} className="hover:scale-105 transition-transform">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-sky-600">
                {r.stat}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ✅ FAQs */}
      <Section id="faqs" title="FAQs" eyebrow="Support" bg="bg-sky-50">
        <div className="space-y-5 sm:space-y-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </Section>

      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default CloudDev;
