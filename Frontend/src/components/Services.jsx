import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import Title from "./Title";

const services = [
  {
    id: 1,
    name: "Custom Web Application Development",
    desc: "We build secure, scalable, and high-performance web applications tailored to your goals, ensuring seamless integration and responsive design.",
    img: assets.webdev,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    name: "E-Commerce & Marketplace Solutions",
    desc: "We create robust, fast, and user-friendly e-commerce platforms with secure payments, boosting conversions and enhancing digital retail presence.",
    img: assets.ecommerce,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    name: "SEO & Performance Optimization",
    desc: "Improve visibility and speed with proven SEO strategies, optimized content, and enhanced website performance for sustainable business growth.",
    img: assets.seo,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    name: "UI/UX & Digital Product Design",
    desc: "We design intuitive, engaging, and visually appealing digital products, ensuring seamless user experiences that boost satisfaction and retention.",
    img: assets.ui,
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    id: 5,
    name: "Digital Marketing & Brand Growth",
    desc: "Drive brand awareness and growth through targeted campaigns, social media, and content strategies focused on measurable, long-term impact.",
    img: assets.digital,
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: 6,
    name: "Mobile & Cross-Platform App Development",
    desc: "Deliver high-performance Android, iOS, and cross-platform apps with seamless UI, optimized performance, and reliable mobile-first experiences.",
    img: assets.app,
    color: "from-cyan-500 to-sky-600",
  },
  {
    id: 7,
    name: "Enterprise Website Solutions",
    desc: "We provide secure, scalable enterprise websites with advanced architecture, enhancing workflows and supporting business operations effectively online.",
    img: assets.webdesign,
    color: "from-indigo-500 to-blue-700",
  },
  {
    id: 8,
    name: "Content Creation & Media Production",
    desc: "Crafting impactful multimedia and content strategies including blogs, graphics, and videos to boost engagement and strengthen your brand.",
    img: assets.content,
    color: "from-rose-500 to-red-600",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-4 pb-20 sm:pt-10 sm:pb-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <Title
          heading1="Comprehensive Digital Solutions"
          heading2="TechversMedia delivers end-to-end services helping businesses grow digitally"
        />

        {/* Services Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="group [perspective:1000px] w-full h-44 sm:h-60 "
            >
              {/* Card container */}
              <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm [backface-visibility:hidden]">
                  {/* Gradient top border */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 rounded-t-xl bg-gradient-to-r ${service.color}`}
                  />
                  {/* Gradient bottom border */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1.5 rounded-b-xl bg-gradient-to-r ${service.color}`}
                  />
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-50 flex items-center justify-center mb-2">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-8 h-8 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                  {/* Name */}
                  <h3 className="text-gray-800 font-medium text-xs sm:text-sm md:text-base px-2 sm:px-4 sm:max-w-[80%] sm:mt-2">
                    {service.name}
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md px-3 sm:px-4 py-3 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {/* Gradient top border */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 rounded-t-xl bg-gradient-to-r ${service.color}`}
                  />
                  {/* Gradient bottom border */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1.5 rounded-b-xl bg-gradient-to-r ${service.color}`}
                  />
                  <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm leading-relaxed mt-2">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
