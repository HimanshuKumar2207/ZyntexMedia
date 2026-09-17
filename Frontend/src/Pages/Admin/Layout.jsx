// import React from "react";
// import { assets } from "../../assets/assets";
// import { Outlet } from "react-router-dom";
// import { useAppContext } from "../../context/AppContext";
// import ProjectSidebar from "../../components/Admin/ProjectSidebar";
// const Layout = () => {
//   const { setToken, axios, navigate } = useAppContext();

//   const logout = () => {
//     localStorage.removeItem("token");

//     // Remove authorization header
//     delete axios.defaults.headers.common["Authorization"];

//     setToken(null);

//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] text-gray-800">
//       {/* ================= HEADER ================= */}
//       <header className="sticky top-0 z-50 h-[72px] bg-white/90 backdrop-blur-xl border-b border-gray-200/70 shadow-sm">
//         <div className="h-full flex items-center justify-between px-5 sm:px-8 lg:px-12">
//           {/* ================= LOGO ================= */}
//           <div
//             onClick={() => navigate("/")}
//             className="flex items-center cursor-pointer group"
//           >
//             <img
//               src={assets.logotext}
//               alt="Logo"
//               className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-105"
//             />
//           </div>

//           {/* ================= RIGHT SECTION ================= */}
//           <div className="flex items-center gap-4">
//             {/* Project Admin Badge */}
//             <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200">
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

//               <span className="text-xs font-medium text-gray-600">
//                 project Admin
//               </span>
//             </div>

//             {/* Logout */}
//             <button
//               onClick={logout}
//               className="
//                 group flex items-center gap-2
//                 px-4 sm:px-5 py-2.5
//                 rounded-xl
//                 bg-gray-900
//                 text-white
//                 text-sm font-medium
//                 shadow-sm
//                 hover:bg-red-500
//                 hover:shadow-lg hover:shadow-red-500/20
//                 active:scale-95
//                 transition-all duration-300
//                 cursor-pointer
//               "
//             >
//               {/* Logout Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.8}
//                 stroke="currentColor"
//                 className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15"
//                 />

//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M18 15l3-3m0 0l-3-3m3 3H9"
//                 />
//               </svg>

//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ================= MAIN AREA ================= */}
//       <div className="flex min-h-[calc(100vh-72px)]">
//         {/* ================= SIDEBAR ================= */}
//         <aside className="shrink-0">
//           <ProjectSidebar />
//         </aside>

//         {/* ================= PAGE CONTENT ================= */}
//         <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
//           <div className="w-full max-w-[1600px] mx-auto">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React from "react";
// import { assets } from "../../assets/assets";
// import { Outlet } from "react-router-dom";
// import { useAppContext } from "../../context/AppContext";
// import ProjectSidebar from "../../components/Admin/ProjectSidebar";

// const Layout = () => {
//   const { setToken, axios, navigate } = useAppContext();

//   const logout = () => {
//     localStorage.removeItem("token");

//     // Remove authorization header
//     delete axios.defaults.headers.common["Authorization"];

//     setToken(null);

//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] text-gray-800">

//       {/* ================= HEADER ================= */}
//       <header className="sticky top-0 z-50 h-[72px] bg-white/90 backdrop-blur-xl border-b border-gray-200/70 shadow-sm">
//         <div className="h-full flex items-center justify-between px-5 sm:px-8 lg:px-12">

//           {/* Logo */}
//           <div
//             onClick={() => navigate("/")}
//             className="flex items-center cursor-pointer group"
//           >
//             <img
//               src={assets.logotext}
//               alt="Logo"
//               className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-105"
//             />
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">

//             {/* Admin Badge */}
//             <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200">
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

//               <span className="text-xs font-medium text-gray-600">
//                 Project Admin
//               </span>
//             </div>

//             {/* Logout */}
//             <button
//               onClick={logout}
//               className="
//                 group flex items-center gap-2
//                 px-4 sm:px-5 py-2.5
//                 rounded-xl
//                 bg-gray-900
//                 text-white
//                 text-sm font-medium
//                 shadow-sm
//                 hover:bg-red-500
//                 hover:shadow-lg hover:shadow-red-500/20
//                 active:scale-95
//                 transition-all duration-300
//                 cursor-pointer
//               "
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.8}
//                 stroke="currentColor"
//                 className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 9V5.25A2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15"
//                 />

//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M18 15l3-3m0 0l-3-3m3 3H9"
//                 />
//               </svg>

//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ================= MAIN AREA ================= */}
//       <div className="flex min-h-[calc(100vh-72px)]">

//         {/* Sidebar */}
//         <aside className="shrink-0">
//           <ProjectSidebar />
//         </aside>

//         {/* Page Content */}
//         <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
//           <div className="w-full max-w-[1600px] mx-auto">
//             <Outlet />
//           </div>
//         </main>

//       </div>
//     </div>
//   );
// };

// export default Layout;
