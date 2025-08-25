import React from "react";
import { Link } from "react-scroll";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import WhatsappBanner from "../components/WhatsappBanner";
import Navbar from "../components/Navbar";
import Industries from "../components/Industries";

const Expertise = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar Navigation (Hidden on small and medium screens) */}
        <aside className="hidden lg:block fixed top-8 left-0 h-screen w-[14%] border-r border-gray-300 bg-gradient-to-r from-blue-500 to-blue-600  shadow-md z-10">
          <nav className="w-full flex flex-col gap-6 pt-32 px-4 text-sm font-medium">
            {[
              { to: "industries", label: "Industries Served" },
              { to: "process", label: "Our Process" },
              { to: "testimonial", label: "Testimonials" },
            ].map((item) => (
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

        {/* Main Content */}
        <main className="w-full lg:ml-[14%] overflow-x-hidden">
          <section id="industries" className="scroll-mt-24">
            <Industries />
          </section>

          <section id="process" className="scroll-mt-24">
            <Process />
          </section>

          <section id="testimonial" className="scroll-mt-24">
            <Testimonial />
          </section>

          <WhatsappBanner />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Expertise;
