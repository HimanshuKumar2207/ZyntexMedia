import React from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaArrowRight,
  FaHome,
  FaWhatsapp,
  FaRocket,
  FaStar,
} from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main blue glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        {/* Orange glow */}
        <div className="absolute -right-32 top-20 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Purple glow */}
        <div className="absolute -left-32 bottom-10 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 35 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-tight sm:text-2xl"
        >
          <span className="text-white">Zyntex</span>
          <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Media
          </span>
        </motion.div>

        <motion.a
          href="/"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-xl transition hover:border-blue-400/40 hover:bg-white/10 hover:text-white"
        >
          <FaHome className="text-xs" />
          Home
        </motion.a>
      </nav>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-6xl items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full text-center">
          {/* =====================================================
              3D SUCCESS OBJECT
          ===================================================== */}

          <div className="relative mx-auto mb-10 h-64 w-64 sm:h-72 sm:w-72">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-blue-400/20"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-5 rounded-full border border-dashed border-orange-400/30"
            />

            {/* Orb glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.7, 0.45],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-12 rounded-full bg-blue-500/30 blur-3xl"
            />

            {/* 3D Orb */}
            <motion.div
              initial={{ scale: 0, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-900 shadow-[0_0_80px_rgba(37,99,235,0.55)] sm:h-40 sm:w-40 sm:w-40"
              style={{
                boxShadow:
                  "inset -20px -20px 40px rgba(0,0,0,0.35), inset 15px 15px 30px rgba(255,255,255,0.18), 0 0 80px rgba(37,99,235,0.45)",
              }}
            >
              {/* Glass highlight */}
              <div className="absolute left-7 top-5 h-12 w-20 rotate-[-25deg] rounded-full bg-white/20 blur-md" />

              {/* Check circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                  type: "spring",
                }}
                className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-xl backdrop-blur-md"
              >
                <FaCheck className="text-3xl text-white" />
              </motion.div>
            </motion.div>

            {/* Floating orbit dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.9)]" />
            </motion.div>

            {/* Star */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute -right-2 top-10 text-orange-400"
            >
              <FaStar className="text-xl drop-shadow-[0_0_12px_rgba(251,146,60,0.8)]" />
            </motion.div>

            {/* Rocket */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-8, 8, -8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -left-1 bottom-12 text-blue-300"
            >
              <FaRocket className="text-lg rotate-[-25deg] drop-shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
            </motion.div>
          </div>

          {/* =====================================================
              TEXT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-xs font-semibold text-green-300 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Inquiry Received Successfully
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Thank{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
                You!
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Your inquiry has been successfully received. Our team at{" "}
              <span className="font-semibold text-white">ZyntexMedia</span> will
              review your requirements and get back to you soon.
            </p>
          </motion.div>

          {/* =====================================================
              GLASS INFO CARDS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {/* CARD 1 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.07]">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FaCheck />
              </div>

              <h3 className="text-sm font-bold text-white">Request Received</h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Your project details are safely with us.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-white/[0.07]">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                <FaRocket />
              </div>

              <h3 className="text-sm font-bold text-white">Team Review</h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Our team will review your requirements.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-400/30 hover:bg-white/[0.07]">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                <FaWhatsapp />
              </div>

              <h3 className="text-sm font-bold text-white">We'll Connect</h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Expect a response from our team soon.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="/"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_35px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(37,99,235,0.4)] sm:w-auto"
            >
              Back to Home
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/917479867857?text=Hello%20ZyntexMedia%2C%20I%20just%20submitted%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-gray-200 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-green-500/10 hover:text-green-300 sm:w-auto"
            >
              <FaWhatsapp />
              Chat With Us
            </a>
          </motion.div>

          {/* =====================================================
              FOOTER TEXT
          ===================================================== */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
            }}
            className="mt-12 text-xs tracking-wide text-gray-600"
          >
            Modern • Creative • Growth Focused
          </motion.p>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
