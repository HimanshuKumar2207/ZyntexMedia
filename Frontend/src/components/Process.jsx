import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaDraftingCompass,
  FaCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import Title from "./Title";

const steps = [
  {
    icon: <FaLightbulb />,
    title: "Discovery & Strategic Planning",
    desc: "We begin by understanding your goals, audience, and competition. Through research and brainstorming, we craft a focused strategy to build a strong foundation.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Creative Design & Prototyping",
    desc: "Our designers create engaging UI/UX using Figma and Adobe XD. With interactive prototypes, we ensure usability, brand consistency, and visual appeal.",
  },
  {
    icon: <FaCode />,
    title: "Robust Development & Integration",
    desc: "Using MERN, Next.js, and cloud tools, our developers build fast, secure, scalable solutions with modular coding and agile sprints for flexibility.",
  },
  {
    icon: <FaUsers />,
    title: "Quality Assurance & Real-User Testing",
    desc: "We perform automated and manual testing with user feedback. From security to performance, we ensure the product meets the highest quality standards.",
  },
  {
    icon: <FaRocket />,
    title: "Launch, Marketing & Ongoing Support",
    desc: "We deploy seamlessly using CI/CD pipelines, optimize for SEO, and support growth with updates, monitoring, and digital marketing campaigns.",
  },
];

const Process = () => {
  return (
    <section className="w-full bg-white py-4 pb-24 md:py-10 md:pb-24 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-2 sm:mb-6">
        <Title
          heading1="Our Proven Process"
          heading2="At ZyntexMedia, structured workflows create transparent, inspiring digital solutions."
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Central vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-orange-500 via-yellow-400 to-red-500 rounded-full shadow-lg" />

        {/* Steps */}
        <div className="space-y-16 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`relative w-full md:w-5/12 bg-white rounded-2xl shadow-lg px-6 py-6 border border-gray-200 hover:shadow-2xl transition duration-300 ${
                  index % 2 === 0 ? "text-left" : "text-left"
                }`}
              >
                {/* Icon on timeline */}
                <div
                  className={`absolute top-4 w-12 h-12 flex items-center justify-center text-white text-xl bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full shadow-lg z-10 ${
                    index % 2 === 0
                      ? "-right-16 md:-right-20"
                      : "-left-16 md:-left-20"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed ">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
