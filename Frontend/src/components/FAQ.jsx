import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HelpCircle } from "lucide-react";
import Title from "./Title";

const faqData = [
  {
    question: "What services does ZyntexMedia offer?",
    answer:
      "We provide website and software development, mobile apps, UI/UX design, SEO, digital marketing, branding, and API integrations.",
  },
  {
    question: "Can you redesign our existing website or app?",
    answer:
      "Yes. We can modernize your existing website or app by improving its design, performance, responsiveness, user experience, and functionality.",
  },
  {
    question: "Do you work with startups and established businesses?",
    answer:
      "Yes. We work with startups, small businesses, and established companies, creating solutions based on their goals, requirements, and budget.",
  },
  {
    question: "Can we request changes during the project?",
    answer:
      "Yes. We keep the process collaborative and provide opportunities to review the work and request changes during key development stages.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Project costs depend on the features, design, technology, and overall requirements. Contact us with your idea for a customized estimate.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-20">
      {/* =========================================================
          BACKGROUND GLOWS
      ========================================================= */}
      <div className="pointer-events-none absolute -left-24 -top-20 h-52 w-52 rounded-full bg-purple-400/20 blur-[100px] sm:-left-16 sm:-top-16 sm:h-64 sm:w-64 md:h-72 md:w-72 md:blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-60 w-60 rounded-full bg-blue-300/20 blur-[110px] sm:h-72 sm:w-72 md:h-80 md:w-80 md:blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/10 blur-[90px] sm:h-56 sm:w-56 md:h-64 md:w-64" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* =======================================================
            HEADING
        ======================================================= */}
        <div className="mx-auto w-full max-w-3xl text-center">
          <Title
            heading1="Frequently Asked Questions"
            heading2="Quick answers to common questions about our services and process"
          />
        </div>

        {/* =======================================================
            FAQ LIST
        ======================================================= */}
        <div className="mx-auto mt-7 w-full space-y-3 sm:mt-9 sm:space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-xl
                  border
                  bg-white/75
                  shadow-sm
                  backdrop-blur-lg
                  transition-all
                  duration-300
                  sm:rounded-2xl
                  ${
                    isOpen
                      ? "border-blue-200 shadow-md"
                      : "border-white/60 hover:border-gray-200 hover:shadow-lg"
                  }
                `}
              >
                {/* =================================================
                    HOVER / ACTIVE GLOW
                ================================================= */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-400/10
                    to-purple-400/10
                    transition-opacity
                    duration-300
                    sm:rounded-2xl
                    ${
                      isOpen
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                />

                {/* =================================================
                    QUESTION BUTTON
                ================================================= */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  className="
                    relative
                    z-10
                    flex
                    min-h-[64px]
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-3.5
                    text-left
                    transition-colors
                    duration-300
                    sm:min-h-[68px]
                    sm:gap-4
                    sm:px-5
                    sm:py-4
                    md:px-6
                    lg:px-7
                  "
                >
                  {/* Question Left Side */}
                  <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-3.5">
                    {/* Help Icon */}
                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-tr
                        from-blue-500
                        to-blue-600
                        text-white
                        shadow-sm
                        transition-all
                        duration-300
                        sm:h-9
                        sm:w-9
                        ${
                          isOpen
                            ? "scale-105 shadow-md"
                            : "group-hover:scale-105"
                        }
                      `}
                    >
                      <HelpCircle
                        size={16}
                        strokeWidth={2.2}
                        className="sm:h-[17px] sm:w-[17px]"
                      />
                    </span>

                    {/* Question */}
                    <span
                      className={`
                        min-w-0
                        break-words
                        text-[13px]
                        font-semibold
                        leading-5
                        transition-colors
                        duration-300
                        sm:text-sm
                        sm:leading-6
                        md:text-base
                        ${
                          isOpen
                            ? "text-blue-700"
                            : "text-gray-800 group-hover:text-gray-900"
                        }
                      `}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      sm:h-9
                      sm:w-9
                      ${
                        isOpen
                          ? "bg-purple-50 text-purple-600"
                          : "bg-blue-50 text-blue-500 group-hover:bg-blue-100"
                      }
                    `}
                  >
                    {isOpen ? (
                      <FiChevronUp className="text-base sm:text-lg" />
                    ) : (
                      <FiChevronDown className="text-base sm:text-lg" />
                    )}
                  </span>
                </button>

                {/* =================================================
                    ANSWER
                ================================================= */}
                <div
                  id={`faq-${index}`}
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        px-4
                        pb-4
                        pl-[60px]
                        pr-5
                        sm:px-5
                        sm:pb-5
                        sm:pl-[70px]
                        sm:pr-7
                        md:pl-[76px]
                        lg:pr-8
                      "
                    >
                      {/* Answer Divider */}
                      <div className="mb-3 h-px w-full bg-gray-200/80" />

                      <p
                        className="
                          max-w-3xl
                          text-[12.5px]
                          leading-5
                          text-gray-500
                          sm:text-sm
                          sm:leading-6
                        "
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    BOTTOM ACTIVE LINE
                ================================================= */}
                <div
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-0.5
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-500
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "w-20 sm:w-24"
                        : "w-0 group-hover:w-16 sm:group-hover:w-20"
                    }
                  `}
                />
              </div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM LABEL
        ========================================================= */}
        <div className="mt-7 flex items-center justify-center gap-2 sm:mt-9 sm:gap-3">
          <span className="h-px w-6 bg-gray-300 sm:w-10" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400 sm:text-[10px] sm:tracking-[0.25em]">
            We're here to help
          </span>

          <span className="h-px w-6 bg-gray-300 sm:w-10" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
