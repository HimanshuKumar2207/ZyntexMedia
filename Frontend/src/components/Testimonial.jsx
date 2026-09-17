import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Title from "./Title";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?img=12",
    text: "Great experience working with ZyntexMedia. They understood our requirements and delivered a clean, modern website.",
  },
  {
    name: "Priya Verma",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?img=32",
    text: "The team was professional, responsive, and easy to work with. The final product matched our vision really well.",
  },
  {
    name: "Rahul Mehta",
    role: "E-commerce Business",
    image: "https://i.pravatar.cc/150?img=56",
    text: "Very smooth development process. The platform feels fast, polished, and much easier for our customers to use.",
  },
  {
    name: "Sneha Kapoor",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=45",
    text: "We appreciated their attention to detail and quick communication. The overall experience was simple and reliable.",
  },
  {
    name: "Karan Bhatt",
    role: "Business Consultant",
    image: "https://i.pravatar.cc/150?img=15",
    text: "A professional team with a practical approach. They delivered exactly what we needed and kept the process transparent.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: false,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-20">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-96px] top-16 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl sm:top-20 sm:h-64 sm:w-64" />

      <div className="pointer-events-none absolute bottom-8 right-[-96px] h-52 w-52 rounded-full bg-orange-400/10 blur-3xl sm:bottom-10 sm:h-64 sm:w-64" />

      {/* Heading */}
      <div className="relative mx-auto mb-5 w-full max-w-4xl text-center sm:mb-7 md:mb-8">
        <Title
          heading1="What Our Clients Say"
          heading2="A few words from clients we've had the opportunity to work with."
        />
      </div>

      {/* Slider */}
      <div className="relative mx-auto w-full max-w-6xl">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="px-2 pb-8 sm:px-2.5 md:px-3">
              <div className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:p-5 md:p-6">
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-orange-500 transition-all duration-500 group-hover:w-full" />

                {/* Quote and Rating */}
                <div className="mb-3 flex items-center justify-between sm:mb-4">
                  <FaQuoteLeft className="text-lg text-orange-500 sm:text-xl md:text-2xl" />

                  <div className="flex gap-0.5 text-[10px] text-orange-400 sm:gap-1 sm:text-xs">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>

                {/* Review */}
                <p className="flex-grow text-[13px] leading-5 text-gray-600 sm:text-sm sm:leading-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="my-4 h-px w-full bg-gray-100" />

                {/* Author */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-9 w-9 shrink-0 rounded-full border-2 border-blue-100 object-cover sm:h-10 sm:w-10 md:h-11 md:w-11"
                  />

                  <div className="min-w-0">
                    <h4 className="truncate text-[13px] font-semibold text-gray-900 sm:text-sm">
                      {testimonial.name}
                    </h4>

                    <p className="mt-0.5 truncate text-[10px] text-gray-500 sm:text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-600 transition-all duration-500 group-hover:w-1/2" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Bottom Label */}
      <div className="relative mt-1 flex items-center justify-center gap-2.5 sm:gap-3">
        <span className="h-px w-7 bg-gray-300 sm:w-10" />

        <span className="text-center text-[8px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-[10px] sm:tracking-[0.25em]">
          Trusted by growing businesses
        </span>

        <span className="h-px w-7 bg-gray-300 sm:w-10" />
      </div>
    </section>
  );
};

export default Testimonial;
