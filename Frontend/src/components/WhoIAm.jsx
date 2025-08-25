import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";

const WhoIAm = () => {
  return (
    <section className="w-full bg-gray-100 sm:py-16 py-12 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Company Logo / Brand Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={assets.logoImg} // Replace with your company logo in assets
          alt="ZyntexMedia Logo"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-auto md:h-auto rounded-full border-4 object-cover border-none"
        />

        {/* Company Introduction */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
            Who We Are
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-orange-500">ZyntexMedia</span>
            , We craft future-ready digital solutions that blend creativity,
            technology, and strategy. From dynamic websites to intelligent apps
            and impactful marketing campaigns, we help brands engage audiences,
            drive growth, and lead with innovation.
          </p>
        </motion.div>
      </div>

      {/* Vision Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="my-2 text-center"
      >
        <p className="mt-4  font-semibold text-gray-900 italic text-lg sm:text-xl">
          “Design is intelligence made visible, and strategy is its voice.”
        </p>
      </motion.div>

      {/* Services Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 bg-white rounded-xl shadow-lg px-6 py-8 sm:px-10 sm:py-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-900">
          What We Do
        </h2>
        <ul className="list-disc pl-5 sm:pl-8 space-y-4 text-gray-700 text-base sm:text-lg">
          <li>
            🚀 Custom website & app development tailored for your business.
          </li>
          <li>
            📱 Mobile-first, responsive, and performance-optimized designs.
          </li>
          <li>📈 Digital marketing, SEO, and targeted ad campaigns.</li>
          <li>💡 Brand identity creation and engaging UI/UX design.</li>
          <li>🌍 Scalable solutions for global business impact.</li>
        </ul>
      </motion.div>

      {/* Closing Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-center mt-12"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          “We don’t just build — we innovate, optimize, and empower.”
        </h3>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          — The ZyntexMedia Team
        </p>
      </motion.div>
    </section>
  );
};

export default WhoIAm;
