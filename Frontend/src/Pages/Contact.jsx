import React, { useRef } from "react";
import { IoHome } from "react-icons/io5";
import { MdAddCall, MdEmail, MdWork } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import contactImg from "../assets/contact.jpg";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Step 1: Send Admin Notification
    emailjs
      .sendForm(
        "service_yat85vi",
        "template_o8c5ozs", // Admin template → goes to YOU
        form.current,
        "ia7juwqCetOnlwQl-"
      )
      .then(() => {
        // Step 2: Send Auto-reply
        return emailjs.sendForm(
          "service_yat85vi",
          "template_nmkq2to", // Auto-reply template → goes to USER
          form.current,
          "ia7juwqCetOnlwQl-"
        );
      })
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <Navbar />

      <div className="mt-16 mb-20 px-4 sm:px-8 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Have a Project in Mind?{" "}
            <span className="text-blue-600">We'd Love to Hear From You!</span>
          </h3>
          <p className="text-gray-500 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
            Whether you're launching a new business, reimagining your brand, or
            building your next digital product — we're here to help. We offer
            end-to-end digital solutions, including Website Design &
            Development, Branding & Strategy, SEO Optimization, Software &
            Mobile App Development, and much more. Let's turn your ideas into
            reality. We'd love to connect!
          </p>
        </div>

        {/* Contact Section */}
        <div
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-8 lg:p-10 rounded-2xl bg-cover bg-center overflow-hidden my-12"
          style={{
            backgroundImage: `url(${contactImg})`,
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl"></div>

          {/* Contact Info Cards */}
          <div className="relative z-10 flex flex-col gap-5 lg:gap-6">
            {[
              {
                icon: <IoHome className="text-xl text-white" />,
                title: "Address",
                detail: "Patna - Bihar - 800009",
                sub: "Patna, Bihar, India",
              },
              {
                icon: <MdAddCall className="text-xl text-white" />,
                title: "Phone",
                detail: "+91 7479867857 | +91 7091506903",
                sub: "Mon–Sat, 9am – 8pm",
              },
              {
                icon: <MdEmail className="text-xl text-white" />,
                title: "Email",
                detail: "zyntexmedia@gmail.com",
                sub: "Reach out anytime!",
              },
              {
                icon: <MdWork className="text-xl text-white" />,
                title: "Availability",
                detail: "Freelance Available",
                sub: "Open to remote & contract roles",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-4 sm:p-5 flex gap-4 items-start hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                  <span className="text-xs text-gray-500">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="relative z-10 lg:col-span-2 bg-white/95 shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 backdrop-blur-md border border-gray-100">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-5">
              Send Us a Message
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="from_name"
                  placeholder="Name"
                  className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition text-sm"
                  required
                />
                <input
                  name="from_number"
                  type="number"
                  placeholder="Number"
                  className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition text-sm"
                  required
                />
              </div>
              <input
                name="from_email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition text-sm"
                required
              />
              <input
                name="from_subject"
                placeholder="Subject"
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition text-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full px-3 py-2 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition text-sm resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:focus:ring-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition-all duration-200 w-full shadow-sm mt-2 sm:mt-4 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
