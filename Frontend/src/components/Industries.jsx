import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Building2,
  GraduationCap,
  Stethoscope,
  Rocket,
  Plane,
  Landmark,
  Store,
  Truck,
  Clapperboard,
  HeartHandshake,
  Factory,
} from "lucide-react";
import Title from "./Title";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Scalable online stores with fast, secure shopping experiences.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Smart property platforms, listings, and virtual viewing tools.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Digital classrooms, e-learning apps, and student portals.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Telemedicine apps, booking systems, and health dashboards.",
  },
  {
    icon: Rocket,
    title: "Startups",
    desc: "From MVP to growth, we accelerate business success.",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    desc: "Booking portals, tourism apps, and personalized experiences.",
  },
  {
    icon: Landmark,
    title: "Finance & Fintech",
    desc: "Secure payments, banking apps, and investment platforms.",
  },
  {
    icon: Store,
    title: "Retail & FMCG",
    desc: "POS systems, catalogs, and inventory management solutions.",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Fleet tracking, delivery management, and supply chain tools.",
  },
  {
    icon: Clapperboard,
    title: "Media",
    desc: "Streaming platforms, content apps, and entertainment systems.",
  },
  {
    icon: HeartHandshake,
    title: "Non-profits",
    desc: "Donation portals, awareness campaigns, and volunteer systems.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Automation, ERP systems, and production tracking tools.",
  },
];

const Industries = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 py-2 pb-24 sm:py-6 sm:pb-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Title */}
      <div className="relative text-center mb-0">
        <Title
          heading1="Industries Served"
          heading2="We design digital-first, scalable solutions tailored for every industry."
        />
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group relative p-4 rounded-2xl shadow-md bg-white/60 backdrop-blur-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon with gradient glow */}
              <div className="relative w-10 h-10 mb-4">
                <div className="relative flex items-center justify-center sm:w-14 sm:h-14 h-12 w-12 text-2xl text-white bg-orange-500 rounded-full shadow-md group-hover:scale-105 transition ">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {industry.desc}
              </p>

              {/* Underline on hover */}
              <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 rounded-full"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Industries;
