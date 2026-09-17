const Skills = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-8
        sm:px-6
        sm:py-12
        md:px-10
        md:py-16
        lg:px-16
        lg:py-20
        xl:px-20
       mt-[-255px] sm:mt-0
      "
    >
      {/* Background Orb */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          bottom-0
          h-40
          w-40
          rounded-full
          bg-gradient-to-r
          from-orange-100
          to-orange-200
          opacity-30
          blur-3xl
          sm:-right-20
          sm:-bottom-10
          sm:h-56
          sm:w-56
          md:h-64
          md:w-64
        "
      />

      {/* Blue Background Orb */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-10
          h-40
          w-40
          rounded-full
          bg-blue-100
          opacity-30
          blur-3xl
          sm:h-56
          sm:w-56
          md:h-72
          md:w-72
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= ABOUT SECTION ================= */}
        <div className="w-full">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-blue-100
              bg-gradient-to-r
              from-blue-600
              to-blue-500
              px-4
              py-5
              text-center
              shadow-[0_10px_35px_rgba(37,99,235,0.15)]
              sm:rounded-3xl
              sm:px-6
              sm:py-6
              md:px-10
              md:py-7
              lg:px-12
              lg:py-8
            "
          >
            {/* Inner Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full
                bg-white/10
                blur-3xl
                sm:h-48
                sm:w-48
              "
            />

            <div className="relative z-10">
              {/* Description */}
              <p
                className="
                  mx-auto
                  max-w-4xl
                  text-sm
                  font-medium
                  leading-6
                  text-white
                  sm:text-base
                  sm:leading-7
                  md:text-lg
                  md:leading-8
                "
              >
                At{" "}
                <span className="font-bold text-orange-400">ZyntexMedia</span>,
                We transform ideas into powerful digital experiences by
                combining innovative technology, creative design, and smart
                strategy to drive business growth.
              </p>

              {/* Divider */}
              <div className="mx-auto my-4 h-px w-12 bg-white/30 sm:my-5 sm:w-16 md:my-6" />

              {/* Quote */}
              <blockquote
                className="
                  mx-auto
                  max-w-3xl
                  border-l-[3px]
                  border-orange-400
                  pl-3
                  text-left
                  text-sm
                  font-semibold
                  italic
                  leading-6
                  text-white/95
                  sm:pl-4
                  sm:text-base
                  sm:leading-7
                  md:text-lg
                  md:leading-8
                "
              >
                "Innovation is not just building technology — it’s building the
                future."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
