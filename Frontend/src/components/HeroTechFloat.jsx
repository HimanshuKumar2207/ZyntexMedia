// HeroNewModern.jsx
import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const floaters = Array.from({ length: 20 }).map((_, i) => ({
  shape: [
    "rectangle",
    "ellipse",
    "pentagon",
    "octagon",
    "star",
    "parallelogram",
    "rhombus",
    "trapezoid",
    "cross",
    "diamond",
  ][i % 10], // cycle through all 10 shapes
  left: `${(i * 5) % 100}%`, // evenly distribute across full width
  size: Math.floor(Math.random() * 25) + 20, // random size 20–45px
  color: [
    "rgba(59,130,246,0.3)", // blue
    "rgba(16,185,129,0.3)", // green
    "rgba(234,179,8,0.3)", // yellow
    "rgba(244,63,94,0.3)", // pink/red
    "rgba(139,92,246,0.3)", // purple
  ][i % 5],
  delay: Math.random() * 2,
  duration: Math.random() * 6 + 6, // faster: 6–12s
}));

// Floating Shape
const Floater = ({ shape, left, size, color, delay, duration }) => {
  const shapeStyle = {
    width: size,
    height: size,
    background: color,
    clipPath:
      shape === "circle"
        ? "circle(50% at 50% 50%)"
        : shape === "triangle"
        ? "polygon(50% 0%, 0% 100%, 100% 100%)"
        : shape === "hexagon"
        ? "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)"
        : shape === "rectangle"
        ? "inset(0 0 0 0)"
        : shape === "ellipse"
        ? "ellipse(50% 35% at 50% 50%)"
        : shape === "pentagon"
        ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
        : shape === "octagon"
        ? "polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)"
        : shape === "star"
        ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
        : shape === "parallelogram"
        ? "polygon(25% 0, 100% 0, 75% 100%, 0% 100%)"
        : shape === "rhombus"
        ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
        : shape === "trapezoid"
        ? "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
        : shape === "cross"
        ? "polygon(35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%, 0% 35%, 35% 35%)"
        : shape === "diamond"
        ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
        : "none",
  };

  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-[-80px]"
      style={{ left, ...shapeStyle }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -900, opacity: [0.3, 1, 0], rotate: 360 }}
      transition={{ delay, duration, ease: "linear", repeat: Infinity }}
    />
  );
};

const HeroTechFloat = () => {
  return (
    <section className="md:hidden relative overflow-hidden bg-gradient-to-t from-orange-400 via-blue-100 to-blue-400 mb-65 sm:mb-[0px]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl top-[-200px] left-[-200px]" />
      <div className="absolute -z-10 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-green-400/20 via-yellow-400/20 to-orange-400/20 blur-2xl bottom-[-150px] right-[-150px]" />

      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {floaters.map((f, i) => (
          <Floater key={i} {...f} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-24">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-orange-600">
            Zyntex Media
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-600 text-md sm:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At <span className="font-semibold">Zyntex Media</span>, we deliver
          high-performance digital solutions — from modern websites and mobile
          apps to impactful marketing campaigns. Our team combines technology,
          creativity, and strategy to help your business grow, engage audiences,
          and stay ahead of the competition.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-row sm:flex-wrap gap-4 justify-center lg:justify-start mt-6">
          {/* Email Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zyntexmedia@gmail.com&su=Hello&body=Let's%20Connect"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <MdEmail className="text-lg" />
            Email Us
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917479867857?text=Let's%20Connect%20with%20me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroTechFloat;
