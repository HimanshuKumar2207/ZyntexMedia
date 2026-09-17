import React, { useState } from "react";
import {
  Smartphone,
  Rocket,
  ShieldCheck,
  Globe,
  LineChart,
  TrendingUp,
  Search,
  CheckCircle2,
  ArrowRight,
  Target,
  Sparkles,
  Code2,
  Layers3,
  Zap,
  Store,
  Palette,
  Cloud,
  Settings2,
  Star,
  MessageCircle,
  ChevronDown,
  Apple,
  Play,
  Database,
  Bell,
  Lock,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-blue-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 sm:h-4 sm:w-4" />
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${
          light ? "text-blue-400" : "text-blue-600"
        }`}
      >
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </span>

      <h2
        className={`mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-gray-950"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-4 text-sm leading-6 sm:text-base sm:leading-7 ${
          light ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
      >
        <span className="text-sm font-semibold text-gray-900 sm:text-base">
          {question}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition duration-300 ${
            open ? "rotate-180 bg-blue-50 text-blue-600" : ""
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-gray-600">
          {answer}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    icon: Smartphone,
    number: "01",
    title: "iOS App Development",
    desc: "Create intuitive, high-performance applications designed for Apple's ecosystem.",
  },
  {
    icon: Play,
    number: "02",
    title: "Android App Development",
    desc: "Build scalable Android applications that deliver smooth experiences across devices.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Cross-Platform Apps",
    desc: "Develop efficient applications for iOS and Android with a shared codebase.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "MVP Development",
    desc: "Turn your product idea into a focused MVP ready for testing and market validation.",
  },
  {
    icon: Store,
    number: "05",
    title: "E-Commerce Apps",
    desc: "Build mobile shopping experiences with product catalogs, carts, and secure checkout.",
  },
  {
    icon: Settings2,
    number: "06",
    title: "Custom App Solutions",
    desc: "Develop business-specific mobile applications that fit your workflows and goals.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    desc: "Understand your business, audience, features, and product objectives.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    desc: "Create intuitive user journeys, wireframes, and polished app interfaces.",
  },
  {
    number: "03",
    title: "Development",
    desc: "Build your application using modern frameworks and reliable architecture.",
  },
  {
    number: "04",
    title: "Testing",
    desc: "Test functionality, performance, usability, and compatibility across devices.",
  },
  {
    number: "05",
    title: "Launch",
    desc: "Prepare and deploy your application to the App Store and Google Play.",
  },
  {
    number: "06",
    title: "Maintenance",
    desc: "Keep your app secure, updated, and ready for future improvements.",
  },
];

const technologies = [
  {
    group: "Frontend & Mobile",
    icon: Smartphone,
    tools: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    group: "Backend & Database",
    icon: Database,
    tools: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    group: "Cloud & Services",
    icon: Cloud,
    tools: ["AWS", "REST APIs", "Push Notifications", "Cloud Storage"],
  },
  {
    group: "Design & Testing",
    icon: Palette,
    tools: ["Figma", "UI/UX Design", "App Testing", "Performance"],
  },
];

const outcomes = [
  {
    icon: Gauge,
    title: "Smooth Performance",
    desc: "Responsive mobile experiences built for speed and usability.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Applications",
    desc: "Thoughtful security practices and reliable data handling.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    desc: "Flexible foundations that support future features and growth.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    desc: "Mobile products aligned with your customers and business goals.",
  },
];

const faqs = [
  {
    question: "Do you develop both iOS and Android applications?",
    answer:
      "Yes. We develop native and cross-platform applications for iOS and Android based on your project requirements, budget, and long-term goals.",
  },
  {
    question: "Can you turn my app idea into an MVP?",
    answer:
      "Yes. We help define the core features, design the user experience, and build a focused MVP that can be tested with real users.",
  },
  {
    question: "Do you provide app store publishing support?",
    answer:
      "Yes. We can assist with preparing and deploying your application to the Apple App Store and Google Play.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes. We provide ongoing support for bug fixes, updates, performance improvements, and new features.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const AppDev = () => {
  return (
    <>
      <Navbar />

      <main className="w-full overflow-hidden bg-white text-gray-900">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
          <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl sm:h-96 sm:w-96" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl sm:h-[450px] sm:w-[450px]" />

          <div className="pointer-events-none absolute right-[15%] top-20 hidden h-24 w-24 rounded-full border border-blue-200/60 md:block" />

          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 md:px-8 lg:px-10 lg:pb-24 xl:px-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              {/* LEFT CONTENT */}

              <div className="min-w-0">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                    <Smartphone className="h-3 w-3 text-blue-600 sm:h-3.5 sm:w-3.5" />
                  </span>
                  Mobile App Development Services
                </div>

                <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-tight text-gray-950 sm:text-4xl md:text-5xl lg:text-6xl">
                  Build apps that
                  <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                    move your business.
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                  We design and develop powerful, intuitive, and scalable mobile
                  applications that help businesses connect with customers and
                  turn ideas into digital products.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                  <Pill>iOS & Android</Pill>
                  <Pill>React Native</Pill>
                  <Pill>Scalable Apps</Pill>
                  <Pill>Custom UI/UX</Pill>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl sm:px-6 sm:py-3.5"
                  >
                    Start an App Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:px-6 sm:py-3.5"
                  >
                    Explore Services
                  </a>
                </div>

                <div className="mt-7 hidden items-center gap-3 text-xs font-medium text-gray-500 sm:flex">
                  <span className="h-px w-10 bg-gray-300" />
                  Design
                  <span className="text-gray-300">•</span>
                  Develop
                  <span className="text-gray-300">•</span>
                  Deploy
                  <span className="h-px w-10 bg-gray-300" />
                </div>
              </div>

              {/* RIGHT APP VISUAL */}

              <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                <div className="relative rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-4">
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-gray-950 via-blue-950 to-blue-800 p-5 text-white sm:p-7">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />

                    <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-orange-400/20 blur-3xl" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-200">
                            Mobile Experience
                          </p>

                          <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                            Built for Growth
                          </h3>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                          <Smartphone className="h-5 w-5 text-orange-300" />
                        </div>
                      </div>

                      {/* PHONE MOCKUP */}

                      <div className="relative mx-auto mt-7 w-full max-w-[235px] rounded-[2rem] border-[6px] border-gray-700 bg-gray-950 p-1.5 shadow-2xl sm:max-w-[250px]">
                        <div className="overflow-hidden rounded-[1.5rem] bg-white text-gray-900">
                          <div className="flex h-7 items-center justify-center bg-gray-950">
                            <div className="h-1.5 w-16 rounded-full bg-gray-700" />
                          </div>

                          <div className="space-y-4 p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-[9px] text-gray-400">
                                  Welcome back
                                </p>
                                <p className="text-sm font-bold">
                                  Your Dashboard
                                </p>
                              </div>

                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <Bell className="h-4 w-4" />
                              </div>
                            </div>

                            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-4 text-white">
                              <p className="text-[9px] text-blue-100">
                                Total progress
                              </p>

                              <p className="mt-2 text-2xl font-extrabold">
                                84.6%
                              </p>

                              <div className="mt-3 h-1.5 rounded-full bg-blue-400">
                                <div className="h-full w-[84.6%] rounded-full bg-white" />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <div className="rounded-xl border border-gray-100 p-3">
                                <Code2 className="h-4 w-4 text-blue-500" />
                                <p className="mt-2 text-lg font-bold">24</p>
                                <p className="text-[9px] text-gray-400">
                                  Projects
                                </p>
                              </div>

                              <div className="rounded-xl border border-gray-100 p-3">
                                <Zap className="h-4 w-4 text-orange-500" />
                                <p className="mt-2 text-lg font-bold">98%</p>
                                <p className="text-[9px] text-gray-400">
                                  Performance
                                </p>
                              </div>
                            </div>

                            <div>
                              <div className="mb-3 flex justify-between">
                                <p className="text-xs font-bold">
                                  Weekly Activity
                                </p>

                                <p className="text-[9px] text-blue-600">
                                  View all
                                </p>
                              </div>

                              <div className="flex h-16 items-end justify-between gap-2">
                                {[38, 56, 45, 76, 62, 90, 70].map(
                                  (height, i) => (
                                    <div
                                      key={i}
                                      className="flex-1 rounded-t-md bg-blue-100"
                                      style={{ height: `${height}%` }}
                                    >
                                      <div
                                        className="h-full rounded-t-md bg-blue-500"
                                        style={{
                                          height: `${
                                            i === 5 ? 100 : i === 3 ? 70 : 35
                                          }%`,
                                        }}
                                      />
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                          <Apple className="mx-auto h-4 w-4 text-blue-200" />
                          <p className="mt-2 text-xs font-bold">iOS</p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                          <Play className="mx-auto h-4 w-4 text-blue-200" />
                          <p className="mt-2 text-xs font-bold">Android</p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                          <Cloud className="mx-auto h-4 w-4 text-blue-200" />
                          <p className="mt-2 text-xs font-bold">Cloud</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FLOATING CARD */}

                  <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:block md:-left-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                        <Rocket className="h-5 w-5 text-orange-500" />
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                          Product
                        </p>

                        <p className="text-sm font-bold text-gray-900">
                          Ready to Launch
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-3 top-10 hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:block md:-right-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                        <ShieldCheck className="h-5 w-5 text-blue-600" />
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                          Quality
                        </p>

                        <p className="text-sm font-bold text-gray-900">
                          Secure & Reliable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section
          id="services"
          className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What We Build"
              title="Mobile solutions built around your goals"
              description="From product ideas to full-scale business applications, we create mobile experiences that are intuitive, reliable, and ready to grow."
            />

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {services.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.number}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 sm:p-6 lg:p-7"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-100/40 blur-2xl transition duration-300 group-hover:bg-blue-200/50" />

                    <div className="relative flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>

                      <span className="text-xs font-bold tracking-widest text-gray-300">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="relative mt-5 text-base font-bold text-gray-900 sm:text-lg">
                      {card.title}
                    </h3>

                    <p className="relative mt-2 text-sm leading-6 text-gray-600">
                      {card.desc}
                    </p>

                    <div className="relative mt-5 h-px w-10 bg-blue-500 transition-all duration-300 group-hover:w-16" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section className="relative overflow-hidden bg-gray-950 px-4 py-14 text-white sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20">
          <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
                  Our Process
                </span>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
                  From idea to a successful mobile product.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                  A structured development process helps us understand your
                  business, build with purpose, and deliver a mobile app that
                  meets your expectations.
                </p>

                <Link
                  to="/contact"
                  className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Discuss Your App
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {process.map((item) => (
                  <div
                    key={item.number}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.07] sm:p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-blue-400">
                        {item.number}
                      </span>

                      <ArrowRight className="h-4 w-4 text-gray-600 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-white sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY
        ====================================================== */}

        <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Technology & Platforms"
              title="Modern technology for powerful apps"
              description="We use reliable frameworks, backend technologies, and cloud services to create mobile applications that perform well and scale with your business."
            />

            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.group}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 sm:p-7"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="font-bold text-gray-900">
                        {technology.group}
                      </h3>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {technology.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            OUTCOMES
        ====================================================== */}

        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20">
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What It Means For You"
              title="Mobile experiences designed for impact"
              description="We combine thoughtful design, dependable technology, and business-focused development to help your app create value."
            />

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
              {outcomes.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 text-blue-600 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-gray-900 sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Everything you need to know"
              description="Have questions about building your mobile app? Here are some common answers."
            />

            <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 px-5 sm:mt-14 sm:px-8">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 px-5 py-10 text-center shadow-2xl shadow-blue-900/15 sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-orange-400/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300 ring-1 ring-white/10 sm:h-14 sm:w-14">
                <Smartphone className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                Ready to build your next app?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
                Tell us about your idea, target audience, and business goals.
                Let's turn your vision into a mobile experience your customers
                will love.
              </p>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-gray-50 sm:px-6 sm:py-3.5"
              >
                Start Your App Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default AppDev;
