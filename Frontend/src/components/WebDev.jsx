import React, { useState } from "react";
import {
  Code,
  Globe,
  Database,
  Gauge,
  ShieldCheck,
  Rocket,
  LineChart,
  Search,
  Server,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import Navbar from "./Navbar";
import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";

const items = [
  {
    icon: Gauge,
    title: "Lightning-fast Performance",
    desc: "Core Web Vitals-first development for speed, stability, and higher search visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Security Built-in",
    desc: "OWASP-aware coding, hardened configs, and automated dependency checks to keep threats out.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    desc: "Modular, API-driven builds that grow with your traffic, product, and team size.",
  },
  {
    icon: LineChart,
    title: "Conversion Focused",
    desc: "UX copy, clear CTAs, and experimentation frameworks that turn visits into revenue.",
  },
];

const buildCards = [
  {
    icon: Code,
    title: "Custom Websites & Web Apps",
    desc: "From corporate sites to complex platforms—designed, engineered, and optimized for outcomes.",
    bullets: [
      "Marketing & brand sites",
      "SaaS dashboards",
      "Portals & intranets",
    ],
  },
  {
    icon: Globe,
    title: "E-commerce Experiences",
    desc: "High-converting storefronts with secure checkout, search, and analytics baked in.",
    bullets: ["Catalog & filters", "Payments & tax", "Order & inventory"],
  },
  {
    icon: Database,
    title: "Headless & CMS",
    desc: "Flexible content ops with headless CMS, localization, and editorial workflows.",
    bullets: ["Headless CMS", "Content modeling", "Role-based access"],
  },
  {
    icon: Server,
    title: "APIs & Integrations",
    desc: "Payment, CRM, ERP, and analytics integrations that unify your stack and data.",
    bullets: ["REST/GraphQL", "Third-party APIs", "Webhooks & data sync"],
  },
];

const stack = [
  {
    group: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    group: "Backend",
    tools: ["Node.js", "Express", "NestJS", "Python/FastAPI"],
  },
  {
    group: "Data & Search",
    tools: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    group: "Build & QA",
    tools: ["Vite", "Jest", "Playwright", "ESLint", "Prettier"],
  },
  {
    group: "Deploy",
    tools: ["Docker", "Kubernetes", "Nginx", "AWS/GCP/Azure", "Vercel/Netlify"],
  },
];

const faqs = [
  {
    q: "How long does a typical web project take?",
    a: "Most websites launch in 4–10 weeks depending on scope, design rounds, and integrations. Complex apps with custom workflows may run 12–16+ weeks.",
  },
  {
    q: "Do you provide SEO during development?",
    a: "Yes. We bake in technical SEO—semantic HTML, performance budgets, metadata, sitemap/robots, and structured data—plus analytics and tracking setup.",
  },
  {
    q: "Can you migrate my existing site?",
    a: "Absolutely. We handle content modeling, redirects, URL hygiene, and zero-downtime cutovers with full backups and rollback plans.",
  },
  {
    q: "What about maintenance after launch?",
    a: "We offer support plans that include security patches, uptime monitoring, performance tuning, and iterative improvements based on analytics.",
  },
];

const Section = ({ id, title, eyebrow, children, bg, className }) => (
  <section
    id={id}
    className={`relative py-14 sm:py-20 ${bg} ${className || ""}`}
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-sky-600 mb-2 sm:mb-3 text-center sm:text-left">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 text-center sm:text-left">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  </section>
);

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700">
      <CheckCircle2 className="w-4 h-4 text-sky-600" aria-hidden="true" />
      {children}
    </span>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="mt-2 text-gray-600 text-sm break-words">{a}</p>}
    </div>
  );
}

const WebDev = ({ companyName = "ZyntexMedia", onPrimaryCta }) => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="bg-gradient-to-br from-sky-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-6">
          <div className="max-w-3xl animate-fadeIn">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs sm:text-sm font-medium text-sky-600">
              <Search className="w-4 h-4" /> Web Development Services
            </span>
            <h1 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              High-performance websites engineered for growth
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
              {companyName} designs and builds fast, secure, and scalable web
              experiences that turn traffic into measurable business results.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <Pill>Core Web Vitals</Pill>
              <Pill>SEO-ready</Pill>
              <Pill>Accessibility AA</Pill>
              <Pill>Scalable APIs</Pill>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onPrimaryCta}
                className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-white shadow hover:bg-sky-500 transition"
              >
                Start a Web Project
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

      {/* Why Choose Us */}
      <Section
        id="what-we-offer"
        title="Why Choose Us"
        eyebrow="Features"
        bg="bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-50 p-6 border border-gray-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 mt-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100">
                <item.icon className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 break-words">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Build */}
      <Section
        id="what-we-build"
        title="What We Build"
        eyebrow="Services"
        bg="bg-gray-50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 ">
          {buildCards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 mt-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100">
                <card.icon className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600 break-words">
                {card.desc}
              </p>
              <ul className="mt-2 space-y-1 text-gray-500 text-sm list-disc list-inside">
                {card.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section
        id="stack"
        title="Our Tech Stack"
        eyebrow="Technology"
        bg="bg-white"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stack.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-50 p-6 border border-gray-200 shadow-sm mt-4"
            >
              <h3 className="font-semibold text-gray-900">{s.group}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {s.tools.map((tool, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs bg-white text-gray-700 border border-gray-200 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" title="FAQs" eyebrow="Support" bg="bg-gray-50">
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

export default WebDev;
