import React from "react";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";

import Footer from "../components/Footer";
import WhoIAm from "../components/WhoIAm";
import Navbar from "../components/Navbar";
import WhatsappBanner from "../components/WhatsappBanner";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonial";

const About = () => {
  const navItems = [
    {
      to: "who",
      label: "Who We Are",
    },
    {
      to: "industries-served",
      label: "Industries Served",
    },
    {
      to: "testimonials",
      label: "Testimonials",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main About Area */}
      <div className="flex w-full items-start">
        {/* Sidebar */}
        <aside className="sticky top-20 hidden h-screen w-64 shrink-0 bg-gradient-to-b from-blue-600 via-blue-600 to-blue-700 shadow-xl lg:flex lg:flex-col">
          {/* Sidebar Header */}
          <div className="px-6 pt-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              About Us
            </p>

            <h2 className="text-xl font-bold text-white">
              Explore ZyntexMedia
            </h2>

            <div className="mt-4 h-1 w-10 rounded-full bg-orange-400" />
          </div>

          {/* Navigation */}
          <nav className="mt-10 flex flex-col gap-2 px-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="!bg-white !text-blue-700 shadow-md"
                className="group flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/15"
              >
                <span>{item.label}</span>

                <FaArrowRight
                  size={11}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            ))}
          </nav>

          {/* Sidebar Bottom */}
          <div className="mt-40 p-5">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs leading-5 text-blue-50">
                Building modern digital experiences that help businesses grow
                and move forward.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Sections */}
        <main className="min-w-0 flex-1 overflow-x-hidden">
          {/* Who We Are */}
          <section id="who" className="scroll-mt-20">
            <WhoIAm />
          </section>

          {/* Industries */}
          <section id="industries-served" className="scroll-mt-20">
            <Industries />
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="scroll-mt-20">
            <Testimonials />
          </section>
        </main>
      </div>

      {/* These stay outside sidebar area */}
      <WhatsappBanner />

      <Footer />
    </div>
  );
};

export default About;
