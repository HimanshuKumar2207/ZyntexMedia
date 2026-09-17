// // HeroNewModern.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { MdEmail } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";

// const HeroTechFloat = () => {
//   return (
//     <section className="md:hidden relative overflow-hidden bg-gradient-to-t from-orange-400 via-blue-100 to-blue-400 mb-65 sm:mb-[0px]">
//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-14">
//         <motion.h1
//           className="text-4xl sm:text-6xl font-extrabold text-gray-900"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Welcome to <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-orange-600">
//             Zyntex Media
//           </span>
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-gray-600 text-md sm:text-xl leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           At <span className="font-semibold">Zyntex Media</span>, we deliver
//           high-performance digital solutions — from modern websites and mobile
//           apps to impactful marketing campaigns. Our team combines technology,
//           creativity, and strategy to help your business grow, engage audiences,
//           and stay ahead of the competition.
//         </motion.p>

//         {/* CTA Buttons */}
//         <div className="flex flex-row sm:flex-wrap gap-4 justify-center lg:justify-start mt-6">
//           {/* Email Button */}
//           <a
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=zyntexmedia@gmail.com&su=Hello&body=Let's%20Connect"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
//           >
//             <MdEmail className="text-lg" />
//             Email
//           </a>

//           {/* WhatsApp Button */}
//           <a
//             href="https://wa.me/917479867857?text=Let's%20Connect%20with%20me"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
//           >
//             <FaWhatsapp className="text-lg" />
//             WhatsApp
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroTechFloat;
