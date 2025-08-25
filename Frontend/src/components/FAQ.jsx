import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HelpCircle } from "lucide-react"; // for icon badge
import Title from "./Title";

const faqData = [
  {
    question: "What services does ZyntexMedia offer?",
    answer:
      "We provide end-to-end digital solutions including website and web app development, mobile app development, UI/UX design, branding, SEO, digital marketing, and API integrations—helping businesses grow and succeed in the digital era.",
  },
  {
    question: "Can you redesign our existing website or app?",
    answer:
      "Absolutely. We specialize in transforming outdated platforms into modern, high-performing solutions by enhancing UI/UX, speed, SEO, and responsiveness—resulting in a fresh, impactful online presence that drives measurable results.",
  },
  {
    question: "Do you also provide content and marketing support?",
    answer:
      "Yes. We deliver tailored content for websites, blogs, and social media along with targeted digital marketing campaigns—designed to improve engagement, strengthen your brand voice, and boost search engine rankings.",
  },
  {
    question: "How long will it take to complete my project?",
    answer:
      "Timelines vary based on complexity. Landing pages or basic sites may take 1–2 weeks, while large-scale platforms or marketing campaigns can require 3–6 weeks. We finalize schedules after understanding your requirements in detail.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. We offer post-launch services such as maintenance, bug fixes, updates, performance monitoring, and feature enhancements—ensuring your solution remains secure, optimized, and future-ready.",
  },
  {
    question: "Do you work with startups as well as established companies?",
    answer:
      "Yes. We collaborate with startups, SMEs, and enterprises—offering scalable and cost-effective solutions that match your stage of growth, budget, and strategic goals.",
  },
  {
    question: "What technologies does ZyntexMedia use?",
    answer:
      "Our development stack includes React, Node.js, Express, MongoDB, Tailwind CSS, Flutter, and other modern tools. We also work with cloud platforms, API integrations, and industry-standard security practices.",
  },
  {
    question: "Can we request changes during the project?",
    answer:
      "Yes. We follow an agile, collaborative process—allowing you to review progress and request adjustments at key stages. This ensures the final product aligns perfectly with your vision and goals.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 mb-[-40px] py-4 pb-20 px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden">
      {/* Background gradient glows */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-400/40 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-300/30 blur-[160px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <Title
          heading1="Frequently Asked Questions"
          heading2="Essential answers simplifying user doubts for smooth decision-making process"
        />
      </div>

      <div className="max-w-5xl mx-auto mt-2 space-y-6">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="relative group border border-white/30 rounded-2xl shadow-lg bg-white/70 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition duration-500 -z-10" />

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 sm:px-10 py-3 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-500 text-white shadow-md">
                    <HelpCircle size={18} />
                  </span>
                  <span className="text-gray-800 font-semibold text-base sm:text-lg">
                    {item.question}
                  </span>
                </div>

                <span
                  className={`text-2xl transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-purple-600" : "text-blue-500"
                  }`}
                >
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>

              {/* Animated Answer */}
              <div
                id={`faq-${index}`}
                className={`grid transition-all duration-500 ease-in-out px-6 sm:px-8 text-gray-600 text-sm sm:text-base ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-5"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
