// import React from "react";
// import {
//   MdHistoryEdu,
//   MdBuild,
//   MdTrendingUp,
//   MdOutlineFactCheck,
//   MdDevicesOther,
//   MdSupportAgent,
//   MdLightbulbOutline,
//   MdPeopleAlt,
// } from "react-icons/md";
// import { motion } from "framer-motion";

// const WhyUs = () => {
//   const features = [
//     {
//       title: "Proven Expertise",
//       desc: "Years of delivering successful websites, apps, and strategies that drive measurable growth.",
//       icon: <MdHistoryEdu className="h-8 w-8" />,
//       color: "from-blue-500 to-indigo-500",
//     },
//     {
//       title: "End-to-End Solutions",
//       desc: "From concept to launch, we handle everything — design, development, branding, and marketing.",
//       icon: <MdBuild className="h-8 w-8" />,
//       color: "from-pink-500 to-rose-500",
//     },
//     {
//       title: "Growth-Focused",
//       desc: "Every project is built to enhance visibility, improve engagement, and maximize ROI.",
//       icon: <MdTrendingUp className="h-8 w-8" />,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Transparent Process",
//       desc: "Clear timelines, honest communication, and regular updates so you’re always in control.",
//       icon: <MdOutlineFactCheck className="h-8 w-8" />,
//       color: "from-purple-500 to-fuchsia-500",
//     },
//     {
//       title: "Modern & Scalable",
//       desc: "We use future-ready technologies to ensure your digital presence evolves with your business.",
//       icon: <MdDevicesOther className="h-8 w-8" />,
//       color: "from-cyan-500 to-sky-500",
//     },
//     {
//       title: "Dedicated Support",
//       desc: "Our team is always here to assist you, even after your project goes live.",
//       icon: <MdSupportAgent className="h-8 w-8" />,
//       color: "from-yellow-500 to-amber-500",
//     },
//     {
//       title: "Creative Innovation",
//       desc: "We blend creativity and technology to deliver unique solutions that stand out.",
//       icon: <MdLightbulbOutline className="h-8 w-8" />,
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       title: "Client-Centric",
//       desc: "Your goals drive our strategy — we build around your vision, not the other way around.",
//       icon: <MdPeopleAlt className="h-8 w-8" />,
//       color: "from-teal-500 to-cyan-500",
//     },
//   ];

//   return (
//     <section className="relative py-20 bg-gray-50 overflow-hidden">
//       {/* Floating background circles */}
//       <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob1"></div>
//       <div className="absolute bottom-[-120px] right-[-80px] w-72 h-72 bg-pink-200/20 rounded-full blur-3xl animate-blob2"></div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
//         {/* Heading */}
//         {/* <div className="text-center mb-20">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//             Why Choose{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
//               ZyntexMedia
//             </span>
//             ?
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
//             We go beyond just building websites and apps — crafting experiences that elevate your brand and engage your audience.
//           </p>
//         </div> */}

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05, rotateY: 5 }}
//               transition={{ type: "spring", stiffness: 180, damping: 18 }}
//               className="relative p-6 rounded-3xl shadow-xl bg-white/50 backdrop-blur-md border border-gray-100 hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Gradient Icon */}
//               <div
//                 className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 text-white bg-gradient-to-br ${item.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
//               >
//                 {item.icon}
//               </div>

//               <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
//               <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 text-center">
//           <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
//             Ready to Grow Your Brand?
//           </h3>
//           <p className="text-gray-600 max-w-xl mx-auto mb-8">
//             Let’s collaborate and create something extraordinary. Our team is ready to turn your vision into reality.
//           </p>
//           <motion.a
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.96 }}
//             href="/contact"
//             className="button px-8 py-3 "
//           >
//             Get Started
//           </motion.a>
//         </div>
//       </div>

//       {/* Animations for blobs */}
//       <style>
//         {`
//           @keyframes blob1 {
//             0%, 100% { transform: translate(0,0) scale(1); }
//             50% { transform: translate(30px, -50px) scale(1.1); }
//           }
//           @keyframes blob2 {
//             0%, 100% { transform: translate(0,0) scale(1); }
//             50% { transform: translate(-20px, 40px) scale(1.05); }
//           }
//           .animate-blob1 { animation: blob1 8s infinite ease-in-out; }
//           .animate-blob2 { animation: blob2 10s infinite ease-in-out; }
//         `}
//       </style>
//     </section>
//   );
// };

// export default WhyUs;
