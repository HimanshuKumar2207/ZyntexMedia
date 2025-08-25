import React, { useState } from "react";
import {
  Smartphone,
  Rocket,
  ShieldCheck,
  Search,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import Navbar from "./Navbar";
import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";

// Reusable Section
const Section = ({ id, title, eyebrow, children, bg }) => (
  <section id={id} className={`relative py-16 sm:py-20 ${bg || ""}`}>
    <div className="mx-auto max-w-7xl px-6">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase text-sky-500 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  </section>
);

// Feature Pills
function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700">
      <CheckCircle2 className="w-4 h-4 text-sky-600" aria-hidden="true" />
      {children}
    </span>
  );
}

// FAQ Accordion
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="mt-2 text-gray-600 text-sm">{a}</p>}
    </div>
  );
}

// Data
const features = [
  {
    icon: Smartphone,
    title: "iOS & Android Apps",
    desc: "Native and cross-platform apps delivering seamless user experiences.",
  },
  {
    icon: Rocket,
    title: "Startup MVPs",
    desc: "Lean, scalable MVPs to validate your idea quickly and cost-effectively.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Solutions",
    desc: "Custom mobile apps designed to optimize workflows at scale.",
  },
];

const process = [
  {
    step: "Research & Strategy",
    desc: "We define goals, target users, and clear objectives before development.",
  },
  {
    step: "Design & Prototyping",
    desc: "Crafting user-centric interfaces and interactive prototypes.",
  },
  {
    step: "Agile Development",
    desc: "Building in sprints with continuous testing and feedback.",
  },
  {
    step: "QA & Testing",
    desc: "Ensuring security, usability, and performance across all devices.",
  },
  {
    step: "Launch & Deployment",
    desc: "App Store and Play Store publishing with full support.",
  },
  {
    step: "Maintenance & Scaling",
    desc: "Ongoing updates, feature rollouts, and infrastructure scaling.",
  },
];

const stack = [
  { group: "Mobile", tools: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { group: "Backend", tools: ["Node.js", "Firebase", "GraphQL", "AWS"] },
];

const results = [
  { stat: "500K+", label: "App Downloads" },
  { stat: "4.8★", label: "Average App Rating" },
  { stat: "30%", label: "Faster Time-to-Market" },
  { stat: "99.9%", label: "Uptime & Reliability" },
];

const faqs = [
  {
    q: "Do you support app store publishing?",
    a: "Yes, we handle both Apple App Store and Google Play deployments end-to-end.",
  },
  {
    q: "Can you scale my app later?",
    a: "Absolutely. Our architecture is designed to support millions of users.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes, with security updates, bug fixes, and continuous improvements.",
  },
];

const AppDev = () => {
  // CTA handler
  const onPrimaryCta = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <Navbar />

      {/* Hero */}

      <header className="bg-gradient-to-br from-sky-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-12">
          <div className="max-w-3xl animate-fadeIn">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs sm:text-sm font-medium text-sky-600">
              <Search className="w-4 h-4" /> App Development Services
            </span>
            <h1 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Build High-performance <br /> Mobile Apps
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
              We design and develop scalable, engaging, and secure mobile apps
              that delight users across iOS and Android devices
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <Pill>Scalable Apps</Pill>
              <Pill>Performance Driven</Pill>
              <Pill>iOS & Android</Pill>
              <Pill>Custom UI/UX</Pill>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onPrimaryCta}
                className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-white shadow hover:bg-sky-500 transition"
              >
                Start a App Project
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

      {/* What We Build */}
      <Section
        id="what-we-build"
        title="What We Build"
        eyebrow="Services"
        bg="bg-gradient-to-br from-white to-sky-50"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 hover:border-sky-600 mt-4"
            >
              <f.icon className="w-8 h-8 text-sky-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section
        id="process"
        title="Our Development Process"
        eyebrow="How We Work"
        bg="bg-white"
      >
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 mt-4">
          {process.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-sky-50 p-6 border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-600 transition"
            >
              <h3 className="font-semibold text-gray-900">{p.step}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section
        id="stack"
        title="Our Tech Stack"
        eyebrow="Technology"
        bg="bg-gradient-to-br from-sky-50 to-white"
      >
        <div className="grid gap-6 grid-cols-2">
          {stack.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm hover:border-sky-600 hover:shadow-md transition mt-4"
            >
              <h3 className="font-semibold text-gray-900">{s.group}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {s.tools.map((tool, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs bg-sky-50 text-sky-700 border border-sky-200 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section
        id="results"
        title="Proven Impact"
        eyebrow="Outcomes"
        bg="bg-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {results.map((r, i) => (
            <div key={i} className="hover:scale-105 transition-transform">
              <h3 className="text-2xl sm:text-3xl font-bold text-sky-600">
                {r.stat}
              </h3>
              <p className="text-gray-600">{r.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section
        id="faqs"
        title="FAQs"
        eyebrow="Support"
        bg="bg-gradient-to-br from-sky-50 to-white"
      >
        <div className="space-y-6">
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

export default AppDev;
