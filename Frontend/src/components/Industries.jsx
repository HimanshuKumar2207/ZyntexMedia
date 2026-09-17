import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Building2,
  GraduationCap,
  Stethoscope,
  Rocket,
  Plane,
  Landmark,
  Store,
  Truck,
  Clapperboard,
  HeartHandshake,
  Factory,
} from "lucide-react";
import Title from "./Title";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    color: "text-orange-500",
    glow: "bg-orange-500",
  },
  {
    icon: Building2,
    title: "Real Estate",
    color: "text-blue-600",
    glow: "bg-blue-500",
  },
  {
    icon: GraduationCap,
    title: "Education",
    color: "text-indigo-600",
    glow: "bg-indigo-500",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "text-red-500",
    glow: "bg-red-500",
  },
  {
    icon: Rocket,
    title: "Startups",
    color: "text-purple-600",
    glow: "bg-purple-500",
  },
  {
    icon: Landmark,
    title: "Finance & Fintech",
    color: "text-emerald-600",
    glow: "bg-emerald-500",
  },
  {
    icon: Store,
    title: "Retail & FMCG",
    color: "text-pink-500",
    glow: "bg-pink-500",
  },
  {
    icon: Truck,
    title: "Logistics",
    color: "text-amber-600",
    glow: "bg-amber-500",
  },
  {
    icon: Clapperboard,
    title: "Media",
    color: "text-violet-600",
    glow: "bg-violet-500",
  },
  {
    icon: HeartHandshake,
    title: "Non-profits",
    color: "text-rose-500",
    glow: "bg-rose-500",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    color: "text-slate-600",
    glow: "bg-slate-500",
  },
];

const Industries = () => {
  const sliderItems = [...industries, ...industries];

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-9 sm:px-6 sm:py-11 md:px-10 md:py-13 lg:px-16 lg:py-14 xl:px-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-1/4 top-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl sm:h-64 sm:w-64 sm:top-20" />

      <div className="pointer-events-none absolute bottom-8 right-1/4 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl sm:h-64 sm:w-64" />

      {/* Title */}
      <div className="relative mx-auto mb-4 w-full max-w-4xl text-center sm:mb-6 md:mb-7">
        <Title
          heading1="Industries Served"
          heading2="We design digital-first, scalable solutions tailored for every industry."
        />
      </div>

      {/* Slider Wrapper */}
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-16 md:w-24" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-16 md:w-24" />

        {/* Moving Track */}
        <motion.div
          className="flex w-max gap-3 py-3 sm:gap-4 sm:py-4 md:gap-5"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {sliderItems.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={`${industry.title}-${index}`}
                whileHover={{
                  y: -6,
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="group relative flex h-[105px] w-[185px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white px-3 shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-gray-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.11)] sm:h-[115px] sm:w-[215px] sm:rounded-2xl sm:px-4 md:h-[120px] md:w-[235px] lg:h-[125px] lg:w-[250px]"
              >
                {/* Gradient Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-2xl">
                  <div
                    className={`absolute inset-0 rounded-xl ${industry.glow} opacity-10 blur-xl sm:rounded-2xl`}
                  />
                </div>

                {/* Top Mini Line */}
                <div
                  className={`absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 ${industry.glow} transition-all duration-500 group-hover:w-1/2`}
                />

                {/* Number */}
                <span className="absolute right-2.5 top-2 text-[9px] font-bold tracking-widest text-gray-300 transition-colors duration-300 group-hover:text-gray-400 sm:right-3 sm:top-2.5 sm:text-[10px]">
                  {String((index % industries.length) + 1).padStart(2, "0")}
                </span>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <div className="relative mb-2.5 sm:mb-3">
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 rounded-full ${industry.glow} opacity-20 blur-md transition-all duration-300 group-hover:scale-150 group-hover:opacity-30`}
                    />

                    {/* Icon Circle */}
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-100 transition-all duration-300 group-hover:bg-white group-hover:ring-gray-200 sm:h-12 sm:w-12 md:h-14 md:w-14">
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className={`${industry.color} transition-transform duration-300 group-hover:scale-110 sm:hidden`}
                      />

                      <Icon
                        size={28}
                        strokeWidth={1.8}
                        className={`${industry.color} hidden transition-transform duration-300 group-hover:scale-110 sm:block`}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="max-w-[165px] text-center text-xs font-semibold leading-5 text-gray-800 transition-all duration-300 group-hover:text-gray-950 sm:max-w-[200px] sm:text-sm md:text-base">
                    {industry.title}
                  </h3>
                </div>

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 ${industry.glow} transition-all duration-500 group-hover:w-3/4`}
                />

                {/* Corner Glow */}
                <div
                  className={`absolute -bottom-8 -right-8 h-20 w-20 rounded-full ${industry.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Small Label */}
      <div className="relative mt-5 flex items-center justify-center gap-2.5 sm:mt-7 sm:gap-3">
        <span className="h-px w-7 bg-gray-200 sm:w-10" />

        <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-[10px] sm:tracking-[0.25em]">
          Built for every industry
        </span>

        <span className="h-px w-7 bg-gray-200 sm:w-10" />
      </div>
    </section>
  );
};

export default Industries;
