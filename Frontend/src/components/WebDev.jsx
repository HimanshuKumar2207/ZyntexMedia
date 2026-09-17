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
  ArrowRight,
  Sparkles,
  Zap,
  Layers3,
  Workflow,
  ExternalLink,
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
    number: "01",
    title: "Custom Websites & Web Apps",
    desc: "From corporate websites to complex platforms—designed, engineered, and optimized for real business outcomes.",
    bullets: [
      "Marketing & brand sites",
      "SaaS dashboards",
      "Portals & intranets",
    ],
  },
  {
    icon: Globe,
    number: "02",
    title: "E-commerce Experiences",
    desc: "High-converting storefronts with secure checkout, search, analytics, and scalable product experiences.",
    bullets: ["Catalog & filters", "Payments & tax", "Order & inventory"],
  },
  {
    icon: Database,
    number: "03",
    title: "Headless & CMS",
    desc: "Flexible content systems built for modern publishing, localization, and efficient editorial workflows.",
    bullets: ["Headless CMS", "Content modeling", "Role-based access"],
  },
  {
    icon: Server,
    number: "04",
    title: "APIs & Integrations",
    desc: "Reliable integrations that connect payments, CRM, ERP, analytics, and other business systems.",
    bullets: ["REST / GraphQL", "Third-party APIs", "Webhooks & data sync"],
  },
];

const stack = [
  {
    group: "Frontend",
    icon: Code,
    tools: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    group: "Backend",
    icon: Server,
    tools: ["Node.js", "Express", "NestJS", "Python/FastAPI"],
  },
  {
    group: "Data & Search",
    icon: Database,
    tools: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    group: "Build & QA",
    icon: Gauge,
    tools: ["Vite", "Jest", "Playwright", "ESLint", "Prettier"],
  },
  {
    group: "Deploy",
    icon: Rocket,
    tools: [
      "Docker",
      "Kubernetes",
      "Nginx",
      "AWS/GCP/Azure",
      "Vercel/Netlify",
    ],
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

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-xs">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>

      <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
};

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm sm:text-sm">
      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 sm:h-4 sm:w-4" />
      {children}
    </span>
  );
}

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open
          ? "border-blue-200 bg-white shadow-md"
          : "border-gray-200 bg-white hover:border-blue-100 hover:shadow-sm"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex min-h-[68px] w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition ${
              open
                ? "bg-blue-600 text-white"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-sm font-bold leading-5 text-gray-900 sm:text-base">
            {q}
          </span>
        </div>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
            open
              ? "rotate-180 border-blue-200 bg-blue-50 text-blue-600"
              : "border-gray-200 bg-gray-50 text-gray-500"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-5 pl-[60px] text-sm leading-6 text-gray-500 sm:px-6 sm:pb-6 sm:pl-[76px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

const WebDev = ({
  companyName = "ZyntexMedia",
  onPrimaryCta,
}) => {
  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-white">
      <Navbar />

      {/* =========================
          HERO
      ========================== */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl sm:h-96 sm:w-96" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl sm:h-[450px] sm:w-[450px]" />

        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Hero content */}
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                Web Development Services
              </div>

              <h1 className="max-w-4xl text-3xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-4xl md:text-5xl lg:text-6xl">
                High-performance websites
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                  engineered for growth.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                {companyName} designs and builds fast, secure, and scalable
                digital experiences that turn traffic into measurable business
                results.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                <Pill>Core Web Vitals</Pill>
                <Pill>SEO-ready</Pill>
                <Pill>Accessibility AA</Pill>
                <Pill>Scalable APIs</Pill>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <button
                  type="button"
                  onClick={onPrimaryCta}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl sm:w-auto sm:px-6 sm:py-3.5"
                >
                  Start a Web Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#what-we-build"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-5 py-3 text-sm font-bold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:text-blue-700 sm:w-auto sm:px-6 sm:py-3.5"
                >
                  Explore Services
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 hidden items-center gap-3 text-xs font-medium text-gray-500 sm:flex">
                <span className="h-px w-10 bg-gray-300" />
                Modern
                <span className="text-gray-300">•</span>
                Secure
                <span className="text-gray-300">•</span>
                Scalable
                <span className="h-px w-10 bg-gray-300" />
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-2 shadow-2xl shadow-blue-900/10 backdrop-blur">
                <div className="rounded-[1.5rem] border border-gray-100 bg-gray-950 p-5 sm:p-6">
                  {/* Browser top */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-medium text-gray-400">
                      zyntexmedia.com
                    </div>
                  </div>

                  {/* Code visual */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex gap-3">
                      <span className="text-blue-400">01</span>
                      <span className="text-purple-400">&lt;Website</span>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-blue-400">02</span>
                      <span className="pl-4 text-orange-300">
                        performance=
                        <span className="text-green-300">"fast"</span>
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-blue-400">03</span>
                      <span className="pl-4 text-orange-300">
                        security=
                        <span className="text-green-300">"built-in"</span>
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-blue-400">04</span>
                      <span className="pl-4 text-orange-300">
                        scalable=
                        <span className="text-green-300">"true"</span>
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-blue-400">05</span>
                      <span className="text-purple-400">&lt;/Website&gt;</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-7 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <Zap className="mb-2 h-4 w-4 text-orange-400" />
                      <p className="text-sm font-bold text-white">Fast</p>
                      <p className="text-[9px] text-gray-500">Performance</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <ShieldCheck className="mb-2 h-4 w-4 text-blue-400" />
                      <p className="text-sm font-bold text-white">Secure</p>
                      <p className="text-[9px] text-gray-500">Architecture</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <Rocket className="mb-2 h-4 w-4 text-green-400" />
                      <p className="text-sm font-bold text-white">Ready</p>
                      <p className="text-[9px] text-gray-500">To Scale</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-3 hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-xl sm:flex sm:items-center sm:gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                  <Gauge className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Built for Performance
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Speed • SEO • UX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================
          WHY CHOOSE US
      ========================== */}
      <section
        id="what-we-offer"
        className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why ZyntexMedia"
            title="Built around performance, quality & growth"
            description="Every website is designed with a balance of technology, user experience, security, and measurable business goals."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 sm:p-6"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-bold text-gray-300">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          WHAT WE BUILD
      ========================== */}
      <section
        id="what-we-build"
        className="relative overflow-hidden bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Build"
            title="Digital experiences made for modern businesses"
            description="From high-converting websites to scalable platforms and connected business systems, we build technology around your goals."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {buildCards.map((card, i) => {
              const Icon = card.icon;

              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-50 blur-3xl transition-all duration-500 group-hover:bg-orange-50" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-xs font-black tracking-wider text-gray-300">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-gray-900 sm:text-xl">
                      {card.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                      {card.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.bullets.map((bullet, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" />
                          {bullet}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600">
                      Explore capability
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          TECH STACK
      ========================== */}
      <section
        id="stack"
        className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technology"
            title="Modern technology. Solid foundations."
            description="We use proven technologies and development practices to create maintainable, scalable, and future-ready digital products."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-gray-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-bold text-gray-900">
                      {item.group}
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tools.map((tool, j) => (
                      <span
                        key={j}
                        className="rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-colors group-hover:border-blue-100 group-hover:text-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-xs font-semibold text-gray-400">
            <span className="h-px w-8 bg-gray-200 sm:w-12" />
            Built with modern technologies
            <span className="h-px w-8 bg-gray-200 sm:w-12" />
          </div>
        </div>
      </section>

      {/* =========================
          PROCESS STRIP
      ========================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                <Layers3 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Strategy First
                </p>
                <p className="mt-1 text-xs leading-5 text-blue-100">
                  Clear goals before development begins.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                <Workflow className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Thoughtful Execution
                </p>
                <p className="mt-1 text-xs leading-5 text-blue-100">
                  Design, development, testing, and iteration.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                <LineChart className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Built for Growth
                </p>
                <p className="mt-1 text-xs leading-5 text-blue-100">
                  Optimized for long-term business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FAQ
      ========================== */}
      <section
        id="faqs"
        className="relative overflow-hidden bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Support"
            title="Frequently asked questions"
            description="A few things businesses commonly ask before starting a web project with us."
          />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                q={faq.q}
                a={faq.a}
              />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-xs font-semibold text-gray-400">
            <span className="h-px w-8 bg-gray-200 sm:w-12" />
            We're here to help
            <span className="h-px w-8 bg-gray-200 sm:w-12" />
          </div>
        </div>
      </section>

      {/* =========================
          WHATSAPP + FOOTER
      ========================== */}
      <WhatsappBanner />
      <Footer />
    </div>
  );
};

export default WebDev;