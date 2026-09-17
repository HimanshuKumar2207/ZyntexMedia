// import React from "react";
// import { MdEmail } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";

// // Shapes Config
// const floaters = Array.from({ length: 40 }).map((_, i) => ({
//   shape: ["circle", "rectangle", "ellipse", "pentagon", "star", "diamond"][
//     i % 6
//   ],
//   left: `${Math.random() * 100}%`, // random horizontal position
//   size: Math.floor(Math.random() * 25) + 10,
//   color: [
//     "rgba(59,130,246,0.4)", // blue
//     "rgba(16,185,129,0.4)", // green
//     "rgba(234,179,8,0.4)", // yellow
//     "rgba(244,63,94,0.4)", // pink
//     "rgba(139,92,246,0.4)", // purple
//   ][i % 5],
//   delay: Math.random() * 20, // spread out start times
//   duration: Math.random() * 20 + 5, // 12–20s per cycle
// }));

// // Floating Shape Component
// const Floater = ({ shape, left, size, color, delay, duration }) => {
//   const shapeStyle = {
//     width: size,
//     height: size,
//     background: color,
//     position: "absolute",
//     left,
//     bottom: "-80px", // start just below screen
//     animation: `floatUp ${duration}s linear infinite`,
//     animationDelay: `${delay}s`,
//     clipPath:
//       shape === "circle"
//         ? "circle(50%)"
//         : shape === "rectangle"
//         ? "inset(0 0 0 0)"
//         : shape === "ellipse"
//         ? "ellipse(50% 35% at 50% 50%)"
//         : shape === "pentagon"
//         ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
//         : shape === "star"
//         ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
//         : shape === "diamond"
//         ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
//         : "none",
//   };

//   return <div style={shapeStyle} />;
// };

// const MobHero = () => {
//   return (
//     <div className="relative md:hidden px-6 py-16 overflow-hidden bg-gradient-to-b from-blue-400 via-orange-50 to-blue-400 mb-65 sm:mb-0 ">
//       {/* Floating Background */}
//       {floaters.map((floater, i) => (
//         <Floater key={i} {...floater} />
//       ))}

//       {/* Foreground Content */}
//       <div className="relative z-10 space-y-6">
//         {/* Heading */}
//         <div>
//           <h2 className="text-5xl text-orange-600 tracking-wide">
//             WE ARE <br />{" "}
//             <span className="text-blue-600 text-5xl">Zyntex Media</span>
//           </h2>
//           <hr className="h-1.5 mt-3 w-95 sm:w-[100%]  border-orange-500 rounded-full" />
//         </div>

//         {/* Description */}
//         <div className="uppercase">
//           <p className="text-gray-900 text-2xl sm:text-3xl leading-relaxed">
//             Connect with us for{" "}
//             <span className="font-semibold text-blue-600">
//               Website, APP development
//             </span>
//             , <span className="font-semibold text-orange-600">design</span>, and{" "}
//             <span className="font-semibold text-orange-600">
//               seo & digital marketing
//             </span>
//             .
//           </p>
//           <hr className="h-2 mt-3 w-95 sm:w-[100%] border-blue-600 rounded-full" />
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex sm:items-center gap-4 mt-6">
//           {/* Email Button */}
//           <a
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=zyntexmedia@gmail.com&su=Hello&body=Let's%20Connect"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-5 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
//           >
//             <MdEmail className="text-lg" />
//             Email Us
//           </a>

//           {/* WhatsApp Button */}
//           <a
//             href="https://wa.me/917479867857?text=Let's%20Connect%20with%20me"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-5 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
//           >
//             <FaWhatsapp className="text-lg" />
//             WhatsApp Us
//           </a>
//         </div>
//       </div>

//       {/* Floating Animation Keyframes */}
//       <style jsx>{`
//         @keyframes floatUp {
//           0% {
//             transform: translateY(0) translateX(0) scale(1);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           50% {
//             transform: translateY(-50vh) translateX(25px) scale(1.2);
//           }
//           100% {
//             transform: translateY(-110vh) translateX(-25px) scale(0.8);
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MobHero;
