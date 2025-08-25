import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillMortarboardFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Title from "./Title";

const Academics = () => {
  const academics = [
    {
      title: "Master's of Computer Application",
      school: "Swami Vivekananda University",
      level: "Post Graduation",
      session: "2024 - 2026",
      marks: "Pursuing",
    },
    {
      title: "Bachelor's of Computer Application",
      school: "Indian Institute of Business Management",
      level: "Graduation",
      session: "2020 - 2023",
      marks: "83%",
    },
    {
      title: "Intermediate in Science",
      school: "Bradford International School",
      board: "CBSE",
      session: "2020",
      marks: "64%",
    },
    {
      title: "Matriculation",
      school: "Vishashvi Public School",
      board: "CBSE",
      session: "2018",
      marks: "62%",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12  bg-gray-100 mt-10">
      <Title
        heading1="My Academics Journey"
        heading2="A detailed timeline of my educational journey that developed my skills, discipline, curiosity, and passion for technology and problem-solving
"
      />

      <div className="relative border-l-2 sm:border-l-[3px] border-orange-400 ml-4 sm:ml-6 sm:mt-14">
        {academics.map((edu, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="mb-12 ml-6 sm:ml-8 relative"
          >
            <span className="absolute -left-6 top-2 w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 border-4 border-white rounded-full shadow-md"></span>

            <motion.div
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                variants={fadeIn}
                custom={0.2}
                className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2 mb-1"
              >
                {idx < 2 ? (
                  <BsFillMortarboardFill className="text-orange-400" />
                ) : (
                  <FaGraduationCap className="text-orange-400" />
                )}
                {edu.school}
              </motion.h3>

              <motion.p
                variants={fadeIn}
                custom={0.4}
                className="text-sm sm:text-base text-gray-600"
              >
                {edu.title}
              </motion.p>

              <motion.div
                className="text-sm sm:text-base mt-2 text-gray-700 space-y-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {edu.board && (
                  <motion.p variants={fadeIn} custom={0.5}>
                    <strong>Board:</strong> {edu.board}
                  </motion.p>
                )}
                {edu.level && (
                  <motion.p variants={fadeIn} custom={0.6}>
                    <strong>Level:</strong> {edu.level}
                  </motion.p>
                )}
                <motion.p variants={fadeIn} custom={0.7}>
                  <strong>Session:</strong> {edu.session}
                </motion.p>
                <motion.p variants={fadeIn} custom={0.8}>
                  <strong>Marks:</strong> {edu.marks}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Academics;
