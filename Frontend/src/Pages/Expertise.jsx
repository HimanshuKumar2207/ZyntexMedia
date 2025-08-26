import React from "react";
import { Link } from "react-scroll";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import WhatsappBanner from "../components/WhatsappBanner";
import Navbar from "../components/Navbar";
import Industries from "../components/Industries";

const navItems = [
  { to: "industries", label: "Industries Served" },
  { to: "process", label: "Our Process" },
  { to: "testimonial", label: "Testimonials" },
];

const Expertise = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row mb-[-40px]">
        {/* Sidebar Navigation (Hidden on small and medium screens) */}
        <aside className="hidden lg:block sticky top-25 self-start h-[100vh] w-70 flex-col bg-gradient-to-b from-blue-500 to-blue-600 shadow-lg">
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
                className="cursor-pointer px-2 py-1.5 rounded-sm transition-all duration-300 text-white hover:bg-white hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full overflow-x-hidden">
          <section id="industries" className="scroll-mt-24">
            <Industries />
          </section>

          <section id="process" className="scroll-mt-24">
            <Process />
          </section>

          <section id="testimonial" className="scroll-mt-24">
            <Testimonial />
          </section>
        </main>
      </div>
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default Expertise;
