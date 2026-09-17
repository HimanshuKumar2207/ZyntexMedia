
import React from "react";
import { motion } from "framer-motion";
import {
  MdHistoryEdu,
  MdBuild,
  MdTrendingUp,
  MdOutlineFactCheck,
  MdDevicesOther,
  MdSupportAgent,
  MdLightbulbOutline,
  MdPeopleAlt,
} from "react-icons/md";
import { assets } from "../assets/assets.js";

const WhyUs = () => {
  const features = [
    {
      title: "Proven Expertise",
      desc: "Experienced in building websites, apps, and digital solutions that deliver real business value.",
      icon: <MdHistoryEdu />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "End-to-End Solutions",
      desc: "From design and development to marketing, we provide complete digital solutions under one roof.",
      icon: <MdBuild />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Growth-Focused",
      desc: "We create solutions designed to improve visibility, engagement, and business growth.",
      icon: <MdTrendingUp />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Transparent Process",
      desc: "Clear communication, practical timelines, and regular updates throughout the project.",
      icon: <MdOutlineFactCheck />,
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Modern & Scalable",
      desc: "Future-ready technologies that allow your digital presence to grow with your business.",
      icon: <MdDevicesOther />,
      color: "from-cyan-500 to-sky-500",
    },
    {
      title: "Dedicated Support",
      desc: "Reliable assistance and ongoing support to keep your digital solutions running smoothly.",
      icon: <MdSupportAgent />,
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Creative Innovation",
      desc: "We combine creativity and technology to create digital experiences that stand out.",
      icon: <MdLightbulbOutline />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Client-Centric",
      desc: "Your goals and vision guide our approach, ensuring solutions built around your needs.",
      icon: <MdPeopleAlt />,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-20">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-blue-300/20 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-orange-300/15 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= INTRO ================= */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:gap-10 lg:gap-14">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white bg-white p-4 shadow-lg sm:h-28 sm:w-28 md:h-32 md:w-32">
              <img
                src={assets.logoImg}
                alt="ZyntexMedia Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-3xl text-center md:text-left"
          >
            <span className="mb-2.5 inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:mb-3 sm:text-xs md:text-sm">
              About ZyntexMedia
            </span>

            <h2 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
              Who We Are{" "}
              <span className="text-blue-600">&amp; Why Choose Us?</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7 md:mx-0 md:text-lg">
              At{" "}
              <span className="font-semibold text-orange-500">
                ZyntexMedia
              </span>
              , we blend creativity, technology, and strategy to build modern
              digital solutions that help businesses grow, engage audiences,
              and stand out.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-300/70 sm:my-10 md:my-12" />

        {/* ================= WHY US HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 max-w-2xl text-center sm:mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
            What Sets Us Apart?
          </h3>

          <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
            A thoughtful approach, modern technology, and a commitment to
            creating digital solutions that deliver value.
          </p>
        </motion.div>

        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
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
                delay: index * 0.06,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative flex min-h-[210px] flex-col overflow-hidden rounded-2xl border border-white bg-white/90 p-5 shadow-md transition-all duration-300 hover:shadow-xl sm:min-h-[220px] sm:p-6"
            >
              {/* Top Gradient */}
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.color}`}
              />

              {/* Icon */}
              <div
                className={`mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:text-2xl`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="mb-2 text-base font-bold leading-5 text-gray-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-lg sm:leading-6">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-[13px] leading-5 text-gray-500 sm:text-sm sm:leading-6">
                {item.desc}
              </p>

              {/* Bottom Accent */}
              <div
                className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:w-16`}
              />
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-center sm:mt-10 md:mt-12"
        >
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
            Ready to Build Something Great?
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6 md:text-base">
            Let&apos;s turn your ideas into modern digital experiences that
            move your business forward.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-xl sm:mt-5 sm:px-7 sm:py-3"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;