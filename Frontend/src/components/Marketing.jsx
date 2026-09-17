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
  ArrowRight,
  Target,
  Sparkles,
  MousePointerClick,
  Instagram,
  PenTool,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-blue-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 sm:h-4 sm:w-4" />
      {children}
    </span>
  );
}

const services = [
  {
    icon: Search,
    number: "01",
    title: "SEO Optimization",
    desc: "Improve search visibility with technical, on-page, and content-focused SEO strategies.",
  },
  {
    icon: Instagram,
    number: "02",
    title: "Social Media Marketing",
    desc: "Build a stronger social presence through engaging content, campaigns, and audience-focused strategies.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Content Strategy",
    desc: "Create purposeful content that communicates your brand and supports your marketing goals.",
  },
  {
    icon: Globe,
    number: "04",
    title: "Digital Reach",
    desc: "Expand your online presence with targeted campaigns designed for relevant audiences and markets.",
  },
  {
    icon: LineChart,
    number: "05",
    title: "Analytics & Reporting",
    desc: "Monitor important marketing metrics and turn performance data into actionable insights.",
  },
  {
    icon: TrendingUp,
    number: "06",
    title: "Growth Campaigns",
    desc: "Plan and optimize multi-channel campaigns focused on awareness, leads, engagement, and growth.",
  },
];

const process = [
  {
    number: "01",
    title: "Research",
    desc: "Understand your audience, competitors, industry, and current digital presence.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Build a clear marketing roadmap around your business objectives and target audience.",
  },
  {
    number: "03",
    title: "Create",
    desc: "Develop content, campaigns, creatives, and messaging designed for your channels.",
  },
  {
    number: "04",
    title: "Launch",
    desc: "Deploy campaigns across relevant digital platforms and monitor early performance.",
  },
  {
    number: "05",
    title: "Measure",
    desc: "Track meaningful KPIs, audience behavior, engagement, and campaign performance.",
  },
  {
    number: "06",
    title: "Optimize",
    desc: "Continuously refine campaigns based on insights, performance, and business goals.",
  },
];

const tools = [
  "Google Analytics",
  "Google Search Console",
  "SEMrush",
  "Ahrefs",
  "Meta Ads",
  "Hootsuite",
  "Mailchimp",
  "HubSpot",
];

const outcomes = [
  {
    icon: Target,
    title: "Clear Strategy",
    desc: "Marketing decisions built around your audience and business objectives.",
  },
  {
    icon: Users,
    title: "Better Engagement",
    desc: "Content and campaigns designed to create meaningful audience interactions.",
  },
  {
    icon: BarChart3,
    title: "Measurable Performance",
    desc: "Track important metrics and understand what is working across channels.",
  },
  {
    icon: Zap,
    title: "Continuous Growth",
    desc: "Improve campaigns over time through testing, insights, and optimization.",
  },
];

const Marketing = () => {
  return (
    <>
      <Navbar />

      <main className="w-full overflow-hidden bg-white text-gray-900">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
          {/* Background decorations */}
          <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl sm:h-96 sm:w-96" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl sm:h-[450px] sm:w-[450px]" />

          <div className="pointer-events-none absolute right-[15%] top-20 hidden h-24 w-24 rounded-full border border-blue-200/60 md:block" />

          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 md:px-8 lg:px-10 lg:pb-24 xl:px-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              {/* Left */}
              <div className="min-w-0">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                    <Megaphone className="h-3 w-3 text-blue-600 sm:h-3.5 sm:w-3.5" />
                  </span>
                  Digital Marketing Services
                </div>

                <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-tight text-gray-950 sm:text-4xl md:text-5xl lg:text-6xl">
                  Turn attention into{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                    meaningful growth.
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                  We combine strategy, content, SEO, social media, and analytics
                  to help brands build a stronger digital presence and connect
                  with the right audience.
                </p>

                {/* Pills */}
                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                  <Pill>SEO</Pill>
                  <Pill>Social Media</Pill>
                  <Pill>Content</Pill>
                  <Pill>Analytics</Pill>
                </div>

                {/* CTA */}
                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl sm:px-6 sm:py-3.5"
                  >
                    Start a Marketing Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:px-6 sm:py-3.5"
                  >
                    Explore Services
                  </a>
                </div>

                {/* Trust line */}
                <div className="mt-7 hidden items-center gap-3 text-xs font-medium text-gray-500 sm:flex">
                  <span className="h-px w-10 bg-gray-300" />
                  Strategy
                  <span className="text-gray-300">•</span>
                  Creativity
                  <span className="text-gray-300">•</span>
                  Data
                  <span className="h-px w-10 bg-gray-300" />
                </div>
              </div>

              {/* Right visual */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                <div className="relative rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-4">
                  {/* Main card */}
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-gray-950 via-blue-950 to-blue-800 p-5 text-white sm:p-7">
                    {/* Glow */}
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
                    <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-orange-400/20 blur-3xl" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-200">
                            Marketing Overview
                          </p>
                          <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                            Digital Growth
                          </h3>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                          <TrendingUp className="h-5 w-5 text-orange-300" />
                        </div>
                      </div>

                      {/* Graph */}
                      <div className="relative mt-8 h-36 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:h-44">
                        <div className="absolute inset-x-4 top-1/4 border-t border-dashed border-white/10" />
                        <div className="absolute inset-x-4 top-1/2 border-t border-dashed border-white/10" />
                        <div className="absolute inset-x-4 top-3/4 border-t border-dashed border-white/10" />

                        <svg
                          viewBox="0 0 400 150"
                          className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id="marketingGradient"
                              x1="0"
                              y1="0"
                              x2="1"
                              y2="0"
                            >
                              <stop offset="0%" stopColor="#60a5fa" />
                              <stop offset="100%" stopColor="#fb923c" />
                            </linearGradient>
                          </defs>

                          <path
                            d="M0 125 C45 120, 55 95, 90 102 S135 85, 165 92 S210 65, 240 76 S280 50, 310 57 S350 30, 400 22"
                            fill="none"
                            stroke="url(#marketingGradient)"
                            strokeWidth="5"
                            strokeLinecap="round"
                          />

                          <path
                            d="M0 125 C45 120, 55 95, 90 102 S135 85, 165 92 S210 65, 240 76 S280 50, 310 57 S350 30, 400 22 L400 150 L0 150 Z"
                            fill="url(#marketingGradient)"
                            opacity="0.08"
                          />
                        </svg>
                      </div>

                      {/* Stats */}
                      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-[10px] text-blue-200">Reach</p>
                          <p className="mt-1 text-sm font-bold sm:text-base">
                            Audience
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-[10px] text-blue-200">Focus</p>
                          <p className="mt-1 text-sm font-bold sm:text-base">
                            Growth
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-[10px] text-blue-200">Track</p>
                          <p className="mt-1 text-sm font-bold sm:text-base">
                            Results
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating card */}
                  <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:block md:-left-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                        <Target className="h-5 w-5 text-orange-500" />
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                          Strategy
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          Audience First
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-3 top-10 hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:block md:-right-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                          Analytics
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          Data Driven
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================== */}
        <section
          id="services"
          className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
                <Sparkles className="h-4 w-4" />
                What We Do
              </span>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
                Digital marketing built around your goals
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                From visibility to engagement, we create digital marketing
                strategies that connect your brand with the people who matter.
              </p>
            </div>

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

        {/* =========================================================
            PROCESS
        ========================================================== */}
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
                  From strategy to measurable digital growth.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                  A structured process helps us understand your business,
                  execute with purpose, and continuously improve your marketing
                  performance.
                </p>

                <Link
                  to="/contact"
                  className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Discuss Your Goals
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

        {/* =========================================================
            TOOLS
        ========================================================== */}
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
                Technology & Platforms
              </span>

              <h2 className="mt-3 text-2xl font-extrabold text-gray-950 sm:text-3xl md:text-4xl">
                Tools that power our campaigns
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                We use established analytics, advertising, SEO, automation, and
                content platforms to plan, execute, and measure campaigns.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="group flex min-h-[90px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 px-3 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 sm:min-h-[105px]"
                >
                  <div>
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white sm:h-10 sm:w-10">
                      <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <p className="mt-3 text-xs font-semibold text-gray-800 sm:text-sm">
                      {tool}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            OUTCOMES
        ========================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20">
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                What It Means For You
              </span>

              <h2 className="mt-3 text-2xl font-extrabold text-gray-950 sm:text-3xl md:text-4xl">
                Marketing designed to create momentum
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                Our focus goes beyond posting content. We connect strategy,
                creativity, and data to create a stronger digital presence.
              </p>
            </div>

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

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 px-5 py-10 text-center shadow-2xl shadow-blue-900/15 sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-orange-400/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300 ring-1 ring-white/10 sm:h-14 sm:w-14">
                <Megaphone className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                Ready to grow your digital presence?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
                Tell us about your business, audience, and goals. Let's build a
                marketing strategy that moves your brand forward.
              </p>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-gray-50 sm:px-6 sm:py-3.5"
              >
                Start Your Project
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

export default Marketing;
