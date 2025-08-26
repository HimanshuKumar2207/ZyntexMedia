import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useAppContext } from "../context/AppContext";
import WhatsappBanner from "../components/WhatsappBanner";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  const { axios } = useAppContext();
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/api/projects/list-project");
        setProjectsData(res.data.projects);

        // ✅ Log each project's image URL
        res.data.projects.forEach((project) => {
          console.log("📸 Project Image URL:", project.image);
        });
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-8 bg-white">
        {/* Title */}
        <Title
          heading1="My Projects"
          heading2="These projects reflect my journey, skills, and dedication to frontend excellence."
        />

        {/* Intro Paragraph */}

        {/* Tech Stack Showcase */}
        <div className="">
          <h3 className="text-xl font-semibold text-gray-800 mb-8 text-center">
            Technologies We Often Work With:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "React Native",
              "Git & GitHub",
              "Figma",
              "Vercel",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-orange-100 text-orange-700 px-4 py-2 text-xs rounded-full font-medium shadow-sm hover:shadow-md transition"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-base max-w-3xl mx-auto text-center mt-10">
            Over the past few years, Zyntex has built a wide range of real-world
            applications — from responsive websites to robust full-stack
            platforms — each crafted with a strong focus on performance, user
            experience, and code quality.
          </p>
        </div>

        {/* Project Grid - UNCHANGED */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project._id || index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, rotate: 0.2 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project card structure as-is */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={project.image}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Image+Not+Found";
                  }}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-semibold shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-600 hover:underline"
                  >
                    <BsBoxArrowUpRight /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-24">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Have a project idea or want to collaborate?
          </h3>
          <p className="text-gray-600 mb-6">
            At
            <span className="font-semibold"> Zyntex Media,</span> we’re always
            open to exploring new opportunities, exciting freelance projects, or
            meaningful collaborations in the world of tech
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default Projects;
