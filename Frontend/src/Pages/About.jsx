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

      {/* Sidebar + Main Content wrapper */}
      <div className="flex flex-row mb-[-40px]">
        {/* Sidebar */}
        <aside className="hidden lg:block flex sticky top-25 self-start h-[100vh] w-70 flex-col bg-gradient-to-b from-blue-500 to-blue-600 shadow-lg">
          <nav className="flex flex-col gap-4 p-6 pt-16 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="bg-orange-400 text-blue-700 font-semibold shadow-md"
                className="cursor-pointer px-2 py-1.5 rounded-lg transition-all duration-300 text-white hover:bg-white hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full overflow-x-hidden">
          <section id="who" className="scroll-mt-24">
            <WhoIAm />
          </section>

          <section id="whyus" className="scroll-mt-24">
            <WhyUs />
          </section>

          <section id="vision" className="scroll-mt-24">
            <Vision />
          </section>
        </main>
      </div>

      {/* Footer full width */}
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default About;
