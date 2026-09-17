import React, { useState, useEffect } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import Title from "../components/Title";
import { useAppContext } from "../context/AppContext";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const HomeProjects = () => {
  const { axios } = useAppContext();

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/api/projects/list-project");
        setProjectsData(res?.data?.projects || []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };

    fetchProjects();
  }, [axios]);

  return (
    <section className="w-full overflow-hidden bg-white">
      {/* =========================================================
          PROJECTS MAIN
      ========================================================= */}
      <main className="relative w-full overflow-hidden bg-white">
        {/* =========================================================
            HERO / TITLE
        ========================================================= */}
        <section className="px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 md:px-10 md:pb-12 md:pt-14 lg:px-16 lg:pb-14 lg:p-1">
          <div className="mx-auto w-full max-w-4xl text-center">
            <Title
              heading1="Our Works"
              heading2="Explore digital solutions crafted with modern technology, thoughtful design, and a focus on real-world business needs."
            />
          </div>
        </section>

        {/* =========================================================
            PROJECT GRID
        ========================================================= */}
        <section className="w-full px-4 pb-12 sm:px-6 sm:pb-16 md:px-10 md:pb-20 lg:px-16 lg:mt-[-50px] xl:px-20 ">
          <div className="mx-auto w-full max-w-7xl">
            {projectsData.length > 0 ? (
              <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
                {projectsData.slice(0, 3).map((project, index) => (
                  <motion.article
                    key={project?._id || index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.12,
                    }}
                    variants={cardVariants}
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 20,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-w-0
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      border-gray-200
                      bg-white
                      p-2.5
                      shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                      transition-all
                      duration-500
                      hover:border-gray-300
                      hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
                      sm:rounded-[24px]
                      sm:p-3
                      lg:rounded-[28px]
                    "
                  >
                    {/* =================================================
                        IMAGE AREA
                    ================================================= */}
                    <div
                      className="
                        relative
                        w-full
                        overflow-hidden
                        rounded-xl
                        border
                        border-gray-100
                        bg-gray-100
                        sm:rounded-[20px]
                        lg:rounded-[22px]
                      "
                    >
                      {/* Image */}
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={project?.image}
                          alt={project?.title || "Project"}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://via.placeholder.com/900x600?text=Project+Image";
                          }}
                          className="
                            block
                            h-full
                            w-full
                            object-cover
                            object-center
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.03]
                          "
                        />
                      </div>

                      {/* Image Overlay */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/10
                          via-transparent
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />

                      {/* =================================================
                          PROJECT NUMBER
                      ================================================= */}
                      <div
                        className="
                          absolute
                          left-3
                          top-3
                          flex
                          h-8
                          min-w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/80
                          bg-white/90
                          px-2.5
                          text-[10px]
                          font-semibold
                          text-gray-900
                          shadow-sm
                          backdrop-blur-md
                          sm:left-4
                          sm:top-4
                          sm:h-9
                          sm:min-w-9
                          sm:px-3
                          sm:text-[11px]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* =================================================
                        CARD CONTENT
                    ================================================= */}
                    <div className="flex min-w-0 flex-1 flex-col px-1.5 pb-1.5 pt-4 sm:px-2 sm:pb-2 sm:pt-5">
                      {/* Project Title */}
                      <h3
                        className="
                          line-clamp-2
                          break-words
                          text-[18px]
                          font-semibold
                          leading-6
                          tracking-[-0.02em]
                          text-gray-900
                          transition-colors
                          duration-300
                          group-hover:text-gray-700
                          sm:text-[20px]
                          sm:leading-7
                          md:text-[21px]
                        "
                      >
                        {project?.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          mt-2
                          line-clamp-3
                          break-words
                          text-[13px]
                          leading-5
                          text-gray-500
                          sm:mt-2.5
                          sm:text-sm
                          sm:leading-6
                        "
                      >
                        {project?.description}
                      </p>

                      {/* Bottom Action */}
                      <div className="mt-4 flex w-full items-center justify-end gap-3 sm:mt-5">
                        {project?.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project?.title || "project"}`}
                            className="
                              group/link
                              inline-flex
                              min-h-10
                              items-center
                              justify-center
                              gap-1.5
                              rounded-full
                              bg-blue-700
                              px-4
                              py-2.5
                              text-[11px]
                              font-medium
                              text-white
                              shadow-sm
                              transition-all
                              duration-300
                              hover:bg-black
                              hover:shadow-md
                              active:scale-95
                              sm:gap-2
                              sm:px-5
                              sm:text-xs
                            "
                          >
                            <span className="whitespace-nowrap">
                              View Project
                            </span>

                            <FaArrowRight
                              className="
                                text-[8px]
                                transition-transform
                                duration-300
                                group-hover/link:translate-x-1
                                sm:text-[9px]
                              "
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              /* =========================================================
                 EMPTY STATE
              ========================================================= */
              <div
                className="
                  mx-auto
                  w-full
                  max-w-md
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  px-5
                  py-12
                  text-center
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                  sm:rounded-[28px]
                  sm:px-6
                  sm:py-14
                "
              >
                <div
                  className="
                    mx-auto
                    mb-4
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-700
                    sm:mb-5
                    sm:h-14
                    sm:w-14
                  "
                >
                  <BsBoxArrowUpRight size={20} />
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
                  Projects Coming Soon
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-[13px] leading-5 text-gray-500 sm:text-sm sm:leading-6">
                  We are currently preparing our latest work. Check back soon
                  to explore our projects.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            CTA SECTION
        ========================================================= */}
        <section className="w-full px-4 pb-12 sm:px-6 sm:pb-16 md:px-10 md:pb-20 lg:px-16 xl:px-20">
          <div className="flex justify-center">
            <a
              href="/projects"
              className="
                group
                inline-flex
                min-h-11
                w-auto
                items-center
                justify-center
                gap-2
                rounded-full
                bg-blue-600
                px-5
                py-3
                text-xs
                font-medium
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-black
                hover:shadow-lg
                active:scale-95
                sm:px-6
                sm:text-sm
              "
            >
              <span className="whitespace-nowrap">Explore Works</span>

              <FaArrowRight
                className="
                  text-[9px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:text-[10px]
                "
              />
            </a>
          </div>
        </section>
      </main>
    </section>
  );
};

export default HomeProjects;
