import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { assets } from "../assets/assets";

const specialties = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Responsive and modern interfaces built with React and JavaScript for every device.",
    icon: assets.frontend,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Clean, user-focused designs created with Figma for intuitive digital experiences.",
    icon: assets.ux,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Secure and scalable backend systems using Node.js, Express, MongoDB, and MySQL.",
    icon: assets.backend,
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps built with React Native and Flutter for Android and iOS.",
    icon: assets.js,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Reliable REST API integrations for seamless communication between applications.",
    icon: assets.apiImg,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: 6,
    title: "Digital Media Marketing",
    description:
      "Digital strategies that strengthen your online presence and reach more customers.",
    icon: assets.devOpsImg,
    color: "from-indigo-400 to-indigo-600",
  },
];

const Specialties = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-blue-300/20 blur-[100px] sm:-left-10 sm:-top-10 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-purple-300/20 blur-[100px] sm:-bottom-10 sm:-right-10 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/10 blur-[100px] sm:h-60 sm:w-60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto w-full max-w-3xl text-center">
          <Title
            heading1="Our Core Competencies"
            heading2="Innovative and scalable digital solutions for modern businesses"
          />
        </div>

        {/* Cards */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:mt-10 lg:grid-cols-3 lg:gap-7">
          {specialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
              }}
              className="group relative h-full min-w-0 overflow-hidden rounded-xl border border-white/70 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl sm:rounded-2xl"
            >
              {/* Top Gradient Line */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${item.color} sm:h-1.5`}
              />

              {/* Card Content */}
              <div className="flex h-full min-h-[220px] flex-col items-center px-4 py-5 text-center sm:min-h-[230px] sm:px-5 sm:py-6 md:min-h-[235px] md:px-6 md:py-7 lg:min-h-[240px]">
                {/* Icon */}
                <div className="relative mb-3.5 sm:mb-4">
                  {/* Icon Glow */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-lg transition-all duration-300 group-hover:opacity-40 sm:blur-xl`}
                  />

                  {/* Icon Container */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-1.5 text-[15px] font-bold leading-5 text-gray-800 transition-colors duration-300 group-hover:text-blue-600 sm:mb-2 sm:text-base sm:leading-6 md:text-lg">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="max-w-[320px] text-[13px] leading-5 text-gray-500 sm:text-sm sm:leading-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Hover Glow */}
              <div
                className={`absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:w-20 sm:group-hover:w-24`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Label */}
        <div className="mt-7 flex items-center justify-center gap-2 sm:mt-9 sm:gap-3">
          <span className="h-px w-6 bg-gray-300 sm:w-10" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-[10px] sm:tracking-[0.25em]">
            Built for modern businesses
          </span>

          <span className="h-px w-6 bg-gray-300 sm:w-10" />
        </div>
      </div>
    </section>
  );
};

export default Specialties;
