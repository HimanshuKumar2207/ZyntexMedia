import React, { useRef, useState } from "react";
import { IoHome } from "react-icons/io5";
import { MdAddCall, MdEmail, MdWork } from "react-icons/md";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import contactImg from "../assets/contact.jpg";
import { useAppContext } from "../context/AppContext";

const Contact = () => {
  const form = useRef();
  const { axios } = useAppContext();
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <IoHome />,
      title: "Office",
      detail: "Patna, Bihar - 800001",
      sub: "India",
    },
    {
      icon: <MdAddCall />,
      title: "Phone",
      detail: "+91 7479867857 | +91 7091506903",
      sub: "Let’s discuss your project",
    },
    {
      icon: <MdEmail />,
      title: "Email",
      detail: "zyntexmedia@gmail.com",
      sub: "We’d love to hear from you",
    },
    {
      icon: <MdWork />,
      title: "Our Services",
      detail: "Web, Software & App Development",
      sub: "Digital solutions for businesses",
    },
  ];

  const sendInquiry = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const formData = new FormData(form.current);

      const fullName = formData.get("from_name")?.trim();
      const phone = formData.get("from_number")?.trim();
      const email = formData.get("from_email")?.trim();
      const service = formData.get("from_subject")?.trim();
      const message = formData.get("message")?.trim();

      if (!fullName || !phone || !email || !service || !message) {
        toast.error("Please fill all required fields.");
        setLoading(false);
        return;
      }

      const { data } = await axios.post("/api/inquiries", {
        fullName,
        phone,
        email,
        service,
        message,
      });

      if (!data?.success) {
        toast.error(data?.message || "Failed to submit inquiry.");
        return;
      }

      toast.success("Message sent successfully! We will contact you soon.");

      form.current.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      console.error("Response:", error?.response?.data);

      toast.error(
        error?.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section
        className="
          mt-8
          mb-12
          w-full
          overflow-hidden
          px-4
          sm:mt-10
          sm:mb-14
          sm:px-6
          md:px-10
          lg:mb-16
          lg:px-16
          xl:px-20
          2xl:px-28
        "
      >
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div
          className="
            mx-auto
            mb-6
            w-full
            max-w-3xl
            text-center
            sm:mb-8
          "
        >
          <h3
            className="
              px-1
              text-xl
              font-bold
              leading-tight
              text-gray-800
              sm:text-2xl
              md:text-3xl
            "
          >
            Have a Project in Mind?{" "}
            <span className="text-blue-600">Let's Talk!</span>
          </h3>
        </div>

        {/* =========================================================
            CONTACT SECTION
        ========================================================= */}
        <div
          className="
            relative
            mx-auto
            grid
            w-full
            max-w-7xl
            grid-cols-1
            gap-5
            overflow-hidden
            rounded-2xl
            bg-cover
            bg-center
            p-4
            sm:gap-6
            sm:rounded-[22px]
            sm:p-6
            md:gap-7
            md:p-8
            lg:grid-cols-3
            lg:gap-8
            lg:rounded-3xl
            lg:p-10
          "
          style={{
            backgroundImage: `url(${contactImg})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* =========================================================
              CONTACT INFORMATION
          ========================================================= */}
          <div
            className="
              relative
              z-10
              flex
              min-w-0
              flex-col
              gap-3
              sm:gap-4
              md:gap-5
            "
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  min-w-0
                  items-start
                  gap-3
                  rounded-xl
                  bg-white
                  p-3.5
                  shadow-md
                  transition
                  duration-300
                  hover:shadow-lg
                  sm:gap-4
                  sm:p-7
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-gradient-to-r
                    from-blue-400
                    to-blue-600
                    text-lg
                    text-white
                    sm:h-11
                    sm:w-11
                    sm:text-xl
                  "
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-800 sm:text-base">
                    {item.title}
                  </p>

                  <p
                    className="
                      mt-0.5
                      break-words
                      text-xs
                      leading-5
                      text-gray-600
                      sm:text-sm
                    "
                  >
                    {item.detail}
                  </p>

                  <span
                    className="
                      mt-0.5
                      block
                      break-words
                      text-[11px]
                      leading-4
                      text-gray-500
                      sm:text-xs
                    "
                  >
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================
              CONTACT FORM
          ========================================================= */}
          <div
            className="
              relative
              z-10
              min-w-0
              rounded-xl
              bg-white/95
              p-4
              shadow-xl
              backdrop-blur-md
              sm:rounded-2xl
              sm:p-6
              md:p-7
              lg:col-span-2
              lg:p-8
            "
          >
            <h2
              className="
                mb-4
                text-lg
                font-semibold
                text-gray-800
                sm:mb-5
                sm:text-xl
                md:text-2xl
              "
            >
              Send Us a Message
            </h2>

            <form
              ref={form}
              onSubmit={sendInquiry}
              className="space-y-3.5 sm:space-y-4 md:space-y-5"
            >
              {/* =====================================================
                  NAME & PHONE
              ===================================================== */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Name"
                  required
                  className="
                    min-h-11
                    w-full
                    min-w-0
                    rounded-lg
                    border
                    border-gray-300
                    px-3
                    py-2.5
                    text-sm
                    text-gray-800
                    transition
                    placeholder:text-gray-400
                    focus:border-blue-600
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    sm:min-h-12
                    sm:py-3
                  "
                />

                <input
                  name="from_number"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="
                    min-h-11
                    w-full
                    min-w-0
                    rounded-lg
                    border
                    border-gray-300
                    px-3
                    py-2.5
                    text-sm
                    text-gray-800
                    transition
                    placeholder:text-gray-400
                    focus:border-blue-600
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    sm:min-h-12
                    sm:py-3
                  "
                />
              </div>

              {/* =====================================================
                  EMAIL
              ===================================================== */}
              <input
                name="from_email"
                type="email"
                placeholder="Email Address"
                required
                className="
                  min-h-11
                  w-full
                  min-w-0
                  rounded-lg
                  border
                  border-gray-300
                  px-3
                  py-2.5
                  text-sm
                  text-gray-800
                  transition
                  placeholder:text-gray-400
                  focus:border-blue-600
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  sm:min-h-12
                  sm:py-3
                "
              />

              {/* =====================================================
                  SERVICE
              ===================================================== */}
              <select
                name="from_subject"
                required
                defaultValue="Website Development"
                className="
                  min-h-11
                  w-full
                  min-w-0
                  cursor-pointer
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  px-3
                  py-2.5
                  text-sm
                  text-gray-800
                  transition
                  focus:border-blue-600
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  sm:min-h-12
                  sm:py-3
                "
              >
                <option value="" disabled>
                  Select a Service
                </option>

                <option value="Website Development">Website Development</option>

                <option value="Software Development">
                  Software Development
                </option>

                <option value="Mobile App Development">
                  Mobile App Development
                </option>

                <option value="UI/UX Design">UI/UX Design</option>

                <option value="Digital Marketing">Digital Marketing</option>

                <option value="SEO">SEO</option>

                <option value="Branding & Design">Branding & Design</option>

                <option value="All Services">All Services</option>

                <option value="Other">Other</option>
              </select>

              {/* =====================================================
                  MESSAGE
              ===================================================== */}
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows="4"
                required
                className="
                  min-h-[110px]
                  w-full
                  min-w-0
                  resize-none
                  rounded-lg
                  border
                  border-gray-300
                  px-3
                  py-3
                  text-sm
                  leading-5
                  text-gray-800
                  transition
                  placeholder:text-gray-400
                  focus:border-blue-600
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  sm:min-h-[120px]
                "
              />

              {/* =====================================================
                  SUBMIT BUTTON
              ===================================================== */}
              <button
                type="submit"
                disabled={loading}
                className={`
                  mt-1
                  min-h-11
                  w-full
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  sm:mt-2
                  sm:min-h-12
                  ${
                    loading
                      ? "cursor-not-allowed bg-gray-400"
                      : "cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  }
                `}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
