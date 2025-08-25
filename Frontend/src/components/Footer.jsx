import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { FaChevronCircleUp } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const socials = [
    {
      icon: <FaSquareInstagram />,
      link: "https://instagram.com",
      color: "from-pink-500 to-yellow-400",
    },
    {
      icon: <FaSquareFacebook />,
      link: "https://www.facebook.com/people/Zyntex-Media/61579935146323/",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com",
      color: "from-blue-400 to-indigo-600",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false); // hide immediately after clicking
  };

  return (
    <footer className="w-full bg-gray-900 text-gray-300 px-6 pt-16 pb-16 sm:pt-36 sm:pb-20 mt-10">
      {" "}
      {/* Main Content */}{" "}
      <div className="mx-auto flex flex-col md:flex-row md:justify-around gap-10 text-center md:text-left">
        {" "}
        {/* Column 1: Logo + Tagline */}{" "}
        <div>
          {" "}
          <img
            src={assets.logotext}
            alt="Logo"
            width={200}
            className="mx-auto md:mx-0 mb-4 h-24 w-auto"
          />{" "}
          <p className="text-gray-400 max-w-sm mx-auto md:mx-0 text-sm leading-relaxed mb-4">
            {" "}
            We elevate digital commerce through innovative design and scalable
            solutions, delivering impactful user experiences. Partner with us to
            build smarter brands, accelerate growth, and create something
            extraordinary together.{" "}
          </p>{" "}
          {/* CTA Button */}{" "}
          <Link to="/contact">
            {" "}
            <button className="bg-black button px-8 py-2 cursor-pointer">
              {" "}
              Let’s Talk{" "}
            </button>{" "}
          </Link>{" "}
        </div>{" "}
        {/* Quick Pages */}{" "}
        <div>
          {" "}
          <h3 className="text-white font-semibold mb-3 uppercase tracking-wider">
            {" "}
            Quick Pages{" "}
          </h3>{" "}
          <ul className="space-y-2 text-sm">
            {" "}
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Expertise", path: "/expertise" },
              { name: "Projects", path: "/projects" },
              { name: "Blog", path: "/blogmain" },
              { name: "Contact", path: "/contact" },
            ].map((page) => (
              <li key={page.name}>
                {" "}
                <Link
                  to={page.path}
                  className="hover:text-blue-500 transition-colors duration-300 hover:translate-x-0.5 inline-block"
                >
                  {" "}
                  {page.name}{" "}
                </Link>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </div>{" "}
        {/* Services */}{" "}
        <div>
          {" "}
          <h3 className="text-white font-semibold mb-3 uppercase tracking-wider">
            {" "}
            Services{" "}
          </h3>{" "}
          <ul className="space-y-2 text-sm">
            {" "}
            {[
              { name: "Web Development", path: "/webdev" },
              { name: "App Development", path: "/appdev" },
              { name: "Cloud Solutions", path: "/cloud" },
              { name: "UI/UX Design", path: "/uiux" },
              { name: "DevOps & Deployment", path: "/devops" },
              { name: "Digital Marketing", path: "/digital" },
            ].map((service) => (
              <li key={service.name}>
                {" "}
                <Link
                  to={service.path}
                  target="_blank"
                  className="hover:text-blue-500 transition-colors duration-300 hover:translate-x-0.5 inline-block"
                >
                  {" "}
                  {service.name}{" "}
                </Link>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </div>
        {/* Social icons redesigned */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-center md:text-left">
            Stay Connected
          </h2>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Let’s grow together on social platforms
          </p>

          {/* Social Grid */}
          <div className="flex justify-center gap-4 mt-2 md:mr-15 ">
            {socials.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative group rounded-2xl
                   shadow-lg hover:shadow-xl hover:shadow-blue-500/20 
                   flex flex-col items-center justify-center text-center cursor-pointer
                   transition duration-300"
              >
                {/* Glow Ring */}

                {/* Icon */}
                <div
                  className={`relative p-3 text-2xl rounded-full bg-gradient-to-br ${s.color} text-white shadow-md`}
                >
                  {s.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-12 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-500">ZyntexMedia.</span> All rights
            reserved.
          </p>
          <div className="flex flex-row gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="hidden sm:block">
          {isVisible && (
            <motion.div
              className="fixed bottom-10 right-10 z-50 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleScrollTop}
            >
              <FaChevronCircleUp className="text-4xl text-orange-500 drop-shadow-lg hover:text-orange-600 transition-colors" />
            </motion.div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
