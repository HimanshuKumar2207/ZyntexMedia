import React, { useRef } from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { assets } from "../assets/assets";

const specialties = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "We craft responsive, high-performance interfaces using React, Vue, and modern JavaScript frameworks—ensuring your digital platforms are visually stunning, intuitive, and optimized for every device.",
    icon: assets.frontend,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Our design team creates engaging, user-focused experiences with Figma—prioritizing usability, accessibility, and a seamless journey to keep your audience connected and converting.",
    icon: assets.ux,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "We build robust and scalable backend solutions using Node.js, Python, and Express—managing databases like MongoDB and MySQL to power secure, efficient data flows.",
    icon: assets.backend,
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    title: "Mobile Development",
    description:
      "We deliver cross-platform mobile applications with React Native and Flutter—combining native-like performance with fast deployment for Android and iOS.",
    icon: assets.js,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "We connect your systems with secure, well-documented RESTful APIs—enabling seamless communication between applications and unlocking new functionalities.",
    icon: assets.apiImg,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: 6,
    title: "DevOps & Deployment",
    description:
      "We streamline development workflows with CI/CD pipelines, version control, and cloud deployments—ensuring smooth releases and reliable production environments.",
    icon: assets.devOpsImg,
    color: "from-indigo-400 to-indigo-600",
  },
];

const Specialties = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full pb-20 sm:py-14  sm:pb-24  px-4 sm:px-6 lg:px-12 xl:px-20 
      bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 "
    >
      <div className="max-w-7xl mx-auto">
        <Title
          heading1="Our Core Competencies"
          heading2="Delivering innovative, scalable, user-first solutions empowering businesses online"
        />

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 
                     mt-0 sm:mt-10"
        >
          {specialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 3, rotateX: 3 }}
              className="relative bg-white rounded-xl shadow-xl sm:shadow-2xl 
                         overflow-hidden group transform-gpu transition-transform duration-500 
                         flex flex-col h-full"
              style={{ perspective: "1000px" }}
            >
              {/* Gradient Border Top */}
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col items-center text-center flex-grow">
                {/* Icon Circle */}
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg 
                                flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
