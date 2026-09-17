import React from "react";
import {
  PenTool,
  Monitor,
  Layout,
  Palette,
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MousePointer2,
  Layers3,
  Smartphone,
  Figma,
  Workflow,
  Target,
  Eye,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm sm:text-sm">
      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 sm:h-4 sm:w-4" />
      {children}
    </span>
  );
}

const services = [
  {
    icon: PenTool,
    number: "01",
    title: "User Research",
    desc: "Understanding user needs, behaviors, and expectations to create experiences that feel natural and purposeful.",
  },
  {
    icon: Layout,
    number: "02",
    title: "Wireframing & Prototyping",
    desc: "Turning ideas into structured wireframes and interactive prototypes before development begins.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Visual Design",
    desc: "Creating polished, accessible, and brand-consistent interfaces that make your digital product memorable.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    icon: Search,
    desc: "We understand your business goals, users, challenges, and product requirements.",
  },
  {
    number: "02",
    title: "Research",
    icon: Target,
    desc: "We study users, competitors, market patterns, and opportunities to shape the right experience.",
  },
  {
    number: "03",
    title: "Wireframing",
    icon: Layout,
    desc: "We create clear low-fidelity layouts to establish information architecture and user flow.",
  },
  {
    number: "04",
    title: "Prototyping",
    icon: MousePointer2,
    desc: "We transform concepts into interactive prototypes that make the experience tangible.",
  },
  {
    number: "05",
    title: "Visual Design",
    icon: Palette,
    desc: "We apply visual language, typography, colors, components, and interactions to the final interface.",
  },
  {
    number: "06",
    title: "Delivery",
    icon: Figma,
    desc: "We provide organized design assets, components, specifications, and developer-ready handoff.",
  },
];

const platforms = [
  {
    icon: Monitor,
    title: "Web Applications",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
  },
  {
    icon: Layout,
    title: "Dashboards",
  },
  {
    icon: MousePointer2,
    title: "E-commerce",
  },
  {
    icon: Layers3,
    title: "SaaS Platforms",
  },
  {
    icon: PenTool,
    title: "Marketing Websites",
  },
  {
    icon: Zap,
    title: "Wearables",
  },
  {
    icon: Workflow,
    title: "Enterprise Systems",
  },
];

const principles = [
  {
    icon: Target,
    title: "User First",
    desc: "Every decision starts with understanding the people who will use your product.",
  },
  {
    icon: Eye,
    title: "Clarity Matters",
    desc: "We simplify complex interfaces so users can understand and act with confidence.",
  },
  {
    icon: Layers3,
    title: "Consistent Systems",
    desc: "Reusable components and design systems keep experiences consistent and scalable.",
  },
  {
    icon: Zap,
    title: "Designed for Results",
    desc: "Beautiful interfaces should also support engagement, usability, and business goals.",
  },
];

const UiUxDesign = () => {
  const onPrimaryCta = () => {
    const contactSection = document.getElementById("contact-section");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-white text-gray-900">
      <Navbar />

      {/* =========================================
          HERO
      ========================================== */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl sm:h-96 sm:w-96" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl sm:h-[450px] sm:w-[450px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Hero Content */}
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
                <Sparkles className="h-4 w-4 text-orange-500" />
                UI/UX Design Services
              </div>

              <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-4xl md:text-5xl lg:text-6xl">
                Designing digital experiences
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                  people love to use.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                We create user-centered digital experiences that combine
                strategy, usability, visual design, and technology across web,
                mobile, and digital products.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                <Pill>User Research</Pill>
                <Pill>Wireframes</Pill>
                <Pill>Prototypes</Pill>
                <Pill>Visual Design</Pill>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <button
                  type="button"
                  onClick={onPrimaryCta}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl sm:w-auto sm:px-6 sm:py-3.5"
                >
                  Start a UI/UX Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-5 py-3 text-sm font-bold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:text-blue-700 sm:w-auto sm:px-6 sm:py-3.5"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 hidden items-center gap-3 text-xs font-semibold text-gray-500 sm:flex">
                <span className="h-px w-10 bg-gray-300" />
                Strategy
                <span className="text-gray-300">•</span>
                Creativity
                <span className="text-gray-300">•</span>
                Usability
                <span className="h-px w-10 bg-gray-300" />
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-2xl" />

              <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-2 shadow-2xl shadow-blue-900/10 backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem] bg-gray-950">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] text-gray-400">
                      UI/UX Workspace
                    </div>
                  </div>

                  {/* Design Preview */}
                  <div className="p-5 sm:p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-widest text-blue-400">
                          Design System
                        </p>

                        <p className="mt-1 text-lg font-bold text-white">
                          Modern Interface
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 text-white">
                        <PenTool className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Mock UI */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex gap-3">
                        <div className="h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700" />

                        <div className="min-w-0 flex-1 space-y-2">
                          <div className="h-2.5 w-3/4 rounded-full bg-white/20" />
                          <div className="h-2 w-full rounded-full bg-white/10" />
                          <div className="h-2 w-2/3 rounded-full bg-white/10" />
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl bg-blue-500/20" />
                        <div className="h-16 rounded-xl bg-orange-500/20" />
                        <div className="h-16 rounded-xl bg-white/10" />
                      </div>

                      <div className="mt-3 h-9 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600" />
                    </div>

                    {/* Design stats */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-xs font-bold text-white">Simple</p>
                        <p className="mt-1 text-[9px] text-gray-500">UX Flow</p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-xs font-bold text-white">Clean</p>
                        <p className="mt-1 text-[9px] text-gray-500">
                          Interface
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-xs font-bold text-white">Ready</p>
                        <p className="mt-1 text-[9px] text-gray-500">
                          To Build
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-3 hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-xl sm:flex sm:items-center sm:gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50">
                  <MousePointer2 className="h-5 w-5 text-orange-500" />
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-900">
                    User-Centered Design
                  </p>

                  <p className="text-[10px] text-gray-500">
                    UX • UI • Interaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================
          SERVICES
      ========================================== */}
      <section
        id="services"
        className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Our Services
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
              From ideas to intuitive experiences
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              We combine research, structure, visual design, and interaction to
              create products that are beautiful and easy to use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-50 blur-3xl transition-all duration-500 group-hover:bg-orange-50" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-xs font-black tracking-wider text-gray-300">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-gray-900 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600">
                      Design capability
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          DESIGN PRINCIPLES
      ========================================== */}
      <section className="relative overflow-hidden bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-600 sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Our Approach
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
                Design that looks good.
                <span className="block text-blue-600">
                  Design that works better.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
                Great UI/UX is more than attractive screens. We focus on
                creating clear journeys, meaningful interactions, and consistent
                experiences that support both users and business objectives.
              </p>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
              >
                Discuss your design project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg sm:p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PROCESS
      ========================================== */}
      <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-xs">
              <Workflow className="h-3.5 w-3.5" />
              Our Process
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
              A structured path from concept to interface
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              A clear design process keeps the project focused, collaborative,
              and ready for development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-gray-100 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-black text-gray-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-gray-900 sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          PLATFORMS
      ========================================== */}
      <section className="relative overflow-hidden bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-600 sm:text-xs">
              <Monitor className="h-3.5 w-3.5" />
              Every Platform
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
              Experiences designed for every screen
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              Consistent experiences across the devices and platforms your users
              rely on.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <div
                  key={platform.title}
                  className="group flex min-h-[115px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg sm:min-h-[135px] sm:p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-3 text-xs font-bold text-gray-800 sm:text-sm">
                    {platform.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          IMPACT
      ========================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100 sm:text-xs">
              <LineChartIcon />
              Design Impact
            </div>

            <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              Design focused on meaningful outcomes
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
              Thoughtful design can improve how users discover, understand,
              navigate, and interact with your digital product.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur sm:p-6">
              <h3 className="text-3xl font-black text-white sm:text-4xl">
                85%
              </h3>
              <p className="mt-2 text-xs text-blue-100 sm:text-sm">
                Improved User Retention
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur sm:p-6">
              <h3 className="text-3xl font-black text-white sm:text-4xl">
                60%
              </h3>
              <p className="mt-2 text-xs text-blue-100 sm:text-sm">
                Boost in Conversion Rates
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur sm:p-6">
              <h3 className="text-3xl font-black text-white sm:text-4xl">
                50%
              </h3>
              <p className="mt-2 text-xs text-blue-100 sm:text-sm">
                Faster Task Completion
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur sm:p-6">
              <h3 className="text-3xl font-black text-white sm:text-4xl">
                95%
              </h3>
              <p className="mt-2 text-xs text-blue-100 sm:text-sm">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================== */}
      <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-blue-50 px-5 py-10 text-center shadow-sm sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-orange-200/30 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <PenTool className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-2xl font-black tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
              Have an idea worth designing?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              Let’s turn your idea into a clear, modern, and engaging digital
              experience.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <WhatsappBanner />
      <Footer />
    </div>
  );
};

const LineChartIcon = () => (
  <span className="inline-flex h-3.5 w-3.5 items-center justify-center">↗</span>
);

export default UiUxDesign;
