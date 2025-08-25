import React from "react";
import { Link } from "react-scroll";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import WhoIAm from "../components/WhoIAm";
import Vision from "../components/Vision";
import Navbar from "../components/Navbar";
import WhatsappBanner from "../components/WhatsappBanner";

const About = () => {
  const navItems = [
    { to: "who", label: "Who we Are?" },
    { to: "whyus", label: "Why us" },
    { to: "vision", label: "Vision & Mission" },
  ];

  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar: visible on large screens only */}
        <aside className="hidden lg:block fixed top-8 left-0 h-screen w-[14%] border-r border-gray-300 bg-gradient-to-r from-blue-500 to-blue-600  shadow-md z-10">
          <nav className="w-full flex flex-col gap-6 pt-32 px-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="bg-gray-700 text-blue-600 shadow-md"
                className="cursor-pointer px-4 py-2 text-lg rounded-md transition-all duration-300 text-white hover:bg-white hover:text-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Mobile Top Scroll Nav */}

        {/* Main Content */}
        <main className="w-full lg:ml-[14%] overflow-x-hidden">
          <section id="who" className="scroll-mt-24">
            <WhoIAm />
          </section>

          <section id="whyus" className="scroll-mt-24">
            <WhyUs />
          </section>

          <section id="vision" className="scroll-mt-24">
            <Vision />
          </section>

          <WhatsappBanner />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default About;
