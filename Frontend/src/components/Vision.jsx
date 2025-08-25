import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const uniqueTraits = [
  {
    title: "Cross-Platform Expertise",
    description:
      "We specialize in building apps that deliver seamless performance across web, iOS, and Android platforms with a single codebase.",
    delay: 0.1,
  },
  {
    title: "Native User Experience",
    description:
      "Our designs focus on creating smooth, intuitive, and responsive user experiences that feel truly native on every device.",
    delay: 0.2,
  },
  {
    title: "End-to-End Development",
    description:
      "From ideation and UI/UX design to robust APIs and secure deployments, we cover the full spectrum of digital product development.",
    delay: 0.3,
  },
  {
    title: "Scalable Solutions",
    description:
      "We architect solutions with scalability in mind, ensuring that your business grows without compromising performance or reliability.",
    delay: 0.4,
  },
  {
    title: "Agile Collaboration",
    description:
      "Our team follows agile methodologies—working closely with clients, adapting to feedback, and delivering results faster.",
    delay: 0.5,
  },
  {
    title: "Impact-Driven Results",
    description:
      "We go beyond just building products. Our goal is to solve real problems and create measurable value for businesses and users.",
    delay: 0.6,
  },
];

const coreValues = [
  {
    title: "Integrity",
    description:
      "We prioritize honesty, transparency, and accountability to build long-term trust with clients and partners.",
  },
  {
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to craft smarter, faster, and more efficient digital products.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in teamwork, open communication, and shared goals to foster innovation and success together.",
  },
  {
    title: "User-Centricity",
    description:
      "Every decision we make is guided by the end-user, ensuring clarity, accessibility, and delightful experiences.",
  },
  {
    title: "Excellence",
    description:
      "We deliver high-quality work that reflects precision, attention to detail, and continuous improvement.",
  },
  {
    title: "Growth Mindset",
    description:
      "We adapt to changing technologies and challenges, constantly evolving to provide future-ready solutions.",
  },
];

const Vision = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-100 sm:py-8 sm:pb-20 pb-24 px-6 py-10 md:px-16 mb-[-42px] sm:mb-0" id="vision">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <Title
          heading1={"Vision & Mission"}
          heading2={
            "Building meaningful digital solutions that empower businesses, enhance user experiences, and drive innovation worldwide."
          }
        />

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 sm:mt-10">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-blue-600"
          >
            <h3 className="sm:text-3xl text-2xl font-semibold text-blue-600  mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To become a global leader in digital innovation—creating software
              solutions that are intelligent, scalable, and accessible. We
              envision a world where technology helps businesses grow while
              positively impacting communities and people’s lives.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-orange-500"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To deliver high-quality digital products that solve real-world
              problems. Through design thinking, cutting-edge technologies, and
              agile collaboration, we aim to create impactful solutions that
              drive measurable business success.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="bg-primary-50/70 backdrop-blur-lg rounded-xl p-10 shadow-xl border border-sky-200 max-w-6xl mx-auto mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-3xl text-2xl font-semibold text-orange-600 mb-10 text-center"
          >
            Core Values That Drive Us
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 text-left text-gray-700 text-sm">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-600"
              >
                <h4 className="text-gray-900 font-semibold mb-2">
                  {value.title}
                </h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="bg-primary-50/70 backdrop-blur-lg rounded-xl p-10 shadow-xl border border-sky-200 max-w-6xl mx-auto mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-3xl text-2xl font-semibold text-blue-600 mb-10 text-center"
          >
            What Sets Us Apart
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 text-left text-gray-700 text-sm">
            {uniqueTraits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: trait.delay, duration: 0.6 }}
                className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600"
              >
                <h4 className="text-gray-900 font-semibold mb-2">
                  {trait.title}
                </h4>
                <p>{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
