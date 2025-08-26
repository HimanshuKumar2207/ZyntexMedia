import React, { useState, useEffect, useRef } from "react";
import GlobeBackground from "./GlobeBackground";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import HeroTechFloat from "./HeroTechFloat";
import MobHero from "./MobHero";

const Hero = () => {
  const careers = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "SEO Optimization",
    "Digital Marketing",
    "Social Media Management",
    "Custom Software Solutions",
  ];

  const [careerIndex, setCareerIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  // Typing animation
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (characterIndex < careers[careerIndex].length) {
        setTypedText(
          (prevText) => prevText + careers[careerIndex][characterIndex]
        );
        setCharacterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCareerIndex((prev) => (prev + 1) % careers.length);
          setCharacterIndex(0);
          setTypedText("");
        }, 1200);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [characterIndex, careerIndex]);

  // ✅ Contact form with EmailJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Step 1: Send Admin Notification
    emailjs
      .sendForm(
        "service_yat85vi",
        "template_o8c5ozs", // Admin template → goes to YOU
        form.current,
        "ia7juwqCetOnlwQl-"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <div className="hidden md:block">
        <section className=" relative w-full flex sm:items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <GlobeBackground />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:h-[700px] h-[500px]" />
          </div>

          {/* Main Content */}
          <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-[330px] lg:py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
              {/* Left Section */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-snug">
                  Welcome to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500">
                    Zyntex Media
                  </span>
                </h2>

                <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-200">
                  We specialize in{" "}
                  <span className="font-semibold text-orange-400 drop-shadow-md">
                    {typedText}
                  </span>
                  <span className="animate-pulse">|</span>
                </h3>

                <p className="text-gray-200 text-sm sm:text-lg md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                  At Zyntex Media, we deliver high-performance digital solutions
                  — from modern websites and mobile apps to impactful marketing
                  campaigns. Our team combines technology, creativity, and
                  strategy to help your business grow, engage audiences, and
                  stay ahead of the competition.
                </p>

                {/* Contact Buttons */}
                <div className="flex flex-row sm:flex-wrap gap-4 justify-center lg:justify-start mt-4">
                  {/* Email Button */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=techversmedia@gmail.com&su=Hello&body=Let's%20Connect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md lg:py-2 lg:px-4 hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                  >
                    <MdEmail className="text-lg " />
                    Email Us
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/917479867857?text=Let's%20Connect%20with%20me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base lg:py-2 lg:px-4"
                  >
                    <FaWhatsapp className="text-lg" />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right Section (Query Form) */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="hidden lg:block w-full max-w-md lg:max-w-xl  bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-6 space-y-5 shadow-2xl mx-auto"
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-white">
                  Get in Touch
                </h2>

                {/* Full Name + Number in one row */}
                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Full Name */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder=" "
                      className="peer w-full bg-transparent border-b-2 border-gray-400/50 text-white placeholder-transparent px-2 py-3 focus:outline-none focus:border-orange-400"
                    />
                    <label className="absolute left-2 -top-2 text-gray-300 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all ">
                      Full Name
                    </label>
                  </div>

                  {/* Number */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="from_number"
                      required
                      placeholder=" "
                      className="peer w-full bg-transparent border-b-2 border-gray-400/50 text-white placeholder-transparent px-2 py-3 focus:outline-none focus:border-orange-400"
                    />
                    <label className="absolute left-2 -top-2 text-gray-300 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                      Number
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-400/50 text-white placeholder-transparent px-2 py-3 focus:outline-none focus:border-orange-400"
                  />
                  <label className="absolute left-2 -top-2 text-gray-300 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                    Email Address
                  </label>
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="from_subject"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-400/50 text-white placeholder-transparent px-2 py-3 focus:outline-none focus:border-orange-400"
                  />
                  <label className="absolute left-2 -top-2 text-gray-300 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                    Subject
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    rows="5"
                    name="message"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border border-gray-400/50 text-white placeholder-transparent px-3 pt-8 pb-3 rounded-xl focus:outline-none focus:border-orange-400"
                  />
                  <label className="absolute left-3 top-2 text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                    How can we help?
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold tracking-wide shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  <FaPaperPlane className="text-lg" />
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <HeroTechFloat />
    </>
  );
};

export default Hero;
