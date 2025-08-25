import React from "react";
import { assets } from "../assets/assets";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappBanner = () => {
  const handleWhatsAppClick = () => {
    const phone = "917479867857"; // Include country code (91 for India)
    const message = "Let's Connect with me";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="hidden sm:flex relative overflow-hidden w-[95%] mb-[-40px] py-12 sm:py-auto px-4 sm:px-8 md:px-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg mx-auto mt-10 items-center justify-between gap-6 top-20">
      {/* Text Content */}
      <div className="flex-1 space-y-4 sm:space-y-6 ml-2  md:ml-5 lg:ml-20">
        <h2 className="text-white sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-snug">
          Connect with Us to Grow <br className="hidden lg:block" /> Your Business
        </h2>

        <p className="text-white/90 text-sm sm:text-base md:text-md lg:text-lg font-medium max-w-full">
          Let’s build something great together. Whether you're launching a new
          website, marketing your brand, or optimizing your digital presence —
          we’re here to help you scale.
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2 md:text-sm sm:text-sm bg-white text-green-700 px-5 py-2 rounded-md font-semibold uppercase shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <FaWhatsapp className="text-xl" />
          Connect on WhatsApp
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 hidden sm:flex justify-center">
        <img
          src={assets.phone}
          alt="WhatsApp Banner"
          className="max-w-full sm:h-70 md:h-80 w-auto object-contain animate-slide-x"
        />
      </div>
    </div>
  );
};

export default WhatsappBanner;
