
import React from "react";
import { assets } from "../assets/assets";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

const WhatsappBanner = () => {
  const handleWhatsAppClick = () => {
    const phone = "917479867857";
    const message =
      "Hello ZyntexMedia, I'm interested in discussing a project with you.";

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phone}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative mx-auto my-10 w-[94%] overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 shadow-xl sm:my-12 sm:w-[92%] lg:w-[90%]">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl sm:h-64 sm:w-64" />

      <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl sm:h-60 sm:w-60" />

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[270px] flex-col md:flex-row">
        {/* Text Content */}
        <div className="flex flex-1 items-center px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-12">
          <div className="w-full max-w-xl">
            {/* Badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-white/90 backdrop-blur-sm sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              Let&apos;s Build Something Great
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              Have a Project in Mind?
              <span className="mt-1 block text-white/80 sm:mt-0 sm:inline sm:ml-2">
                Let&apos;s Talk.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-lg text-sm leading-6 text-blue-50/85 sm:text-[15px]">
              Modern websites, custom software, and digital solutions built to
              help your business grow.
            </p>

            {/* CTA */}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="group mt-5 inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-green-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 sm:px-5"
            >
              <FaWhatsapp className="text-lg" />

              <span>Let&apos;s Connect</span>

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Phone Image */}
        <div className="relative hidden flex-1 items-center justify-center pr-6 md:flex lg:pr-10">
          <div className="relative">
            {/* Image Glow */}
            <div className="absolute inset-5 rounded-full bg-white/10 blur-2xl" />

            <img
              src={assets.phone}
              alt="Connect with ZyntexMedia on WhatsApp"
              className="relative h-44 w-auto object-contain opacity-95 transition-transform duration-500 hover:scale-105 lg:h-52 xl:h-56"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappBanner;