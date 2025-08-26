import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import Title from "./Title";

// Company-focused testimonials
const testimonials = [
  {
    name: "Amit Sharma",
    image: "https://i.pravatar.cc/150?img=12",
    text: "TechverseMedia transformed our outdated website into a fast, modern platform that our customers love. Their team is efficient, creative, and always delivers beyond expectations.",
  },
  {
    name: "Priya Verma",
    image: "https://i.pravatar.cc/150?img=32",
    text: "Working with TechverseMedia was seamless. They understood our vision and executed it with precision, making our online presence stronger than ever.",
  },
  {
    name: "Rahul Mehta",
    image: "https://i.pravatar.cc/150?img=56",
    text: "Their innovative approach to design and development helped us launch a highly scalable e-commerce platform with minimal downtime.",
  },
  {
    name: "Sneha Kapoor",
    image: "https://i.pravatar.cc/150?img=45",
    text: "From UI/UX to backend optimization, TechverseMedia handled it all perfectly. Our platform is now faster, cleaner, and more engaging.",
  },
  {
    name: "Karan Bhatt",
    image: "https://i.pravatar.cc/150?img=15",
    text: "A highly professional team that truly cares about delivering value. We saw a measurable boost in conversions within weeks.",
  },
];

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-4 pb-2 sm:pt-10 sm:pb-0 md:pb-10 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center sm:mb-8">
        <Title
          heading1="What our Client Says"
          heading2="Genuine feedback from our valued clients who have experienced the
          ZyntexMedia"
        />
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 sm:p-6 border border-blue-500 h-[260px] sm:h-[280px] flex flex-col">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-orange-600 text-2xl sm:text-3xl mb-3 flex-shrink-0" />

                {/* Text */}
                <p className="text-gray-700 text-md sm:text-sm md:text-base leading-relaxed flex-grow overflow-hidden">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-500"
                  />
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-20"></div>
      </div>
    </section>
  );
};

export default Testimonial;
