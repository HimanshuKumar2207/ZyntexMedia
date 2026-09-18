import React, { useEffect, useState } from "react";
import { packages } from "../components/Packages";
import { X, Check, ArrowRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedPackage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPackage]);

  // Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedPackage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Contact page navigation
  const handleContact = () => {
    setSelectedPackage(null);
    navigate("/contact");
  };

  return (
    <>
      {/* =====================================================
          OFFERS SECTION
      ====================================================== */}
      <section className="py-10 sm:py-14 px-3 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs sm:text-sm font-semibold">
              <Sparkles size={13} />
              Our Packages
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Choose the Right Package
            </h2>

            <p className="mt-2 text-sm sm:text-base text-gray-500 px-2">
              Professional digital solutions designed to help your business
              grow.
            </p>
          </div>

          {/* =================================================
              PACKAGE CARDS
          ================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
                className="
                  group
                  cursor-pointer
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300

                  w-[92%]
                  max-w-[340px]
                  mx-auto

                  sm:w-full
                  sm:max-w-none
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    relative
                    w-full
                    overflow-hidden
                    rounded-t-2xl
                    bg-gray-50
                  "
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="
                      block
                      w-full
                      h-auto
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                  {/* Hover overlay */}
                  <div
                    className="
                      absolute inset-0
                      flex items-center justify-center
                      bg-black/30
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  >
                    <span
                      className="
                        flex items-center gap-2
                        bg-white
                        text-gray-900
                        px-4 py-2.5
                        rounded-full
                        text-sm font-semibold
                        shadow-lg
                      "
                    >
                      View Package
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>

                {/* Small info */}
                <div className="px-2.5 pt-2.5 pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className="
                        text-xs
                        sm:text-base
                        font-semibold
                        text-gray-900
                        truncate
                      "
                    >
                      {pkg.title}
                    </h3>

                    <span
                      className="
                        text-sm
                        sm:text-lg
                        font-bold
                        text-orange-500
                        whitespace-nowrap
                      "
                    >
                      {pkg.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PACKAGE MODAL
      ====================================================== */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center

              p-2
              sm:p-5
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPackage(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* =================================================
                MODAL
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 12,
              }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-3xl

                max-h-[calc(100dvh-1rem)]
                sm:max-h-[calc(100dvh-2.5rem)]

                bg-white
                rounded-2xl
                overflow-hidden
                shadow-2xl
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPackage(null)}
                className="
                  absolute
                  top-2
                  right-2
                  sm:top-3
                  sm:right-3

                  z-30

                  w-8
                  h-8
                  sm:w-9
                  sm:h-9

                  rounded-full
                  bg-white
                  border
                  border-gray-200
                  shadow-md

                  flex
                  items-center
                  justify-center

                  text-gray-600
                  hover:text-black
                  hover:bg-gray-50
                  transition
                "
              >
                <X size={17} />
              </button>

              {/* =================================================
                  CONTENT
              ================================================== */}
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-[0.85fr_1.15fr]

                  h-full
                "
              >

                {/* =================================================
                    IMAGE
                ================================================== */}
                <div
                  className="
                    bg-gray-50
                    flex
                    items-center
                    justify-center

                    px-4
                    py-2

                    sm:p-5
                    md:p-6
                  "
                >
                  <img
                    src={selectedPackage.image}
                    alt={selectedPackage.title}
                    className="
                      w-auto
                      max-w-full

                      h-[110px]
                      sm:h-[180px]
                      md:h-auto

                      max-h-[22vh]
                      md:max-h-[500px]

                      object-contain
                      rounded-xl
                    "
                  />
                </div>

                {/* =================================================
                    DETAILS
                ================================================== */}
                <div
                  className="
                    px-4
                    pb-4
                    pt-3

                    sm:p-6
                    md:p-7

                    flex
                    flex-col
                    justify-center
                  "
                >

                  {/* Badge */}
                  {selectedPackage.badge && (
                    <span
                      className="
                        self-start
                        inline-flex
                        items-center
                        gap-1

                        px-2.5
                        py-1

                        rounded-full
                        bg-orange-50
                        text-orange-600

                        text-[10px]
                        sm:text-xs

                        font-bold

                        mb-1.5
                      "
                    >
                      <Sparkles size={11} />
                      {selectedPackage.badge}
                    </span>
                  )}

                  {/* Title */}
                  <h2
                    className="
                      text-lg
                      sm:text-2xl

                      font-bold
                      text-gray-900
                      leading-tight

                      pr-8
                    "
                  >
                    {selectedPackage.title}
                  </h2>

                  {/* Price */}
                  <div className="mt-1">
                    <span
                      className="
                        text-xl
                        sm:text-3xl

                        font-bold
                        text-orange-500
                      "
                    >
                      {selectedPackage.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      mt-1.5
                      text-[11px]
                      sm:text-sm

                      text-gray-500
                      leading-4
                      sm:leading-5
                    "
                  >
                    {selectedPackage.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 my-2.5 sm:my-4" />

                  {/* Features */}
                  <div>
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        mb-2
                        sm:mb-3
                      "
                    >
                      <h3
                        className="
                          text-xs
                          sm:text-base

                          font-bold
                          text-gray-900
                        "
                      >
                        What's Included
                      </h3>

                      <span
                        className="
                          text-[9px]
                          sm:text-xs
                          text-gray-400
                        "
                      >
                        {selectedPackage.features.length} features
                      </span>
                    </div>

                    {/* 2 columns even on mobile */}
                    <div
                      className="
                        grid
                        grid-cols-2

                        gap-x-3
                        gap-y-1.5

                        sm:gap-x-4
                        sm:gap-y-2
                      "
                    >
                      {selectedPackage.features.map((feature, index) => (
                        <div
                          key={index}
                          className="
                            flex
                            items-start
                            gap-1.5
                            sm:gap-2

                            text-[10px]
                            sm:text-sm

                            text-gray-600
                          "
                        >
                          <span
                            className="
                              mt-0.5
                              flex-shrink-0

                              w-4
                              h-4

                              sm:w-5
                              sm:h-5

                              rounded-full
                              bg-orange-50
                              text-orange-500

                              flex
                              items-center
                              justify-center
                            "
                          >
                            <Check
                              size={9}
                              strokeWidth={2.5}
                            />
                          </span>

                          <span
                            className="
                              leading-4
                              sm:leading-5
                            "
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={handleContact}
                    className="
                      w-full

                      mt-3
                      sm:mt-5

                      flex
                      items-center
                      justify-center
                      gap-1.5
                      sm:gap-2

                      bg-orange-500
                      hover:bg-orange-600

                      text-white
                      font-semibold

                      text-xs
                      sm:text-base

                      py-2.5
                      sm:py-3

                      rounded-lg
                      sm:rounded-xl

                      transition-all
                      duration-200

                      hover:shadow-lg
                      active:scale-[0.98]
                    "
                  >
                    <ArrowRight size={15} />
                    {selectedPackage.buttonText || "Get Started"}
                  </button>

                  <p
                    className="
                      text-center

                      text-[8px]
                      sm:text-[11px]

                      text-gray-400

                      mt-1.5
                      sm:mt-2
                    "
                  >
                    We'll help you choose the right solution for your business.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Offers;