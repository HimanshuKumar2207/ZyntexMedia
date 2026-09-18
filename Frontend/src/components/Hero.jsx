import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdEmail, MdClose } from "react-icons/md";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// ============================================================
// SERVICES
// ============================================================

const services = [
  "Website Development",
  "App Development",
  "UI/UX Design",
  "SEO Optimization",
  "Digital Marketing",
];

// ============================================================
// INPUT CLASS
// ============================================================

const inputClass =
  "block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100";

// ============================================================
// INQUIRY FORM
// IMPORTANT:
// Keep this OUTSIDE Hero so it doesn't remount while typing.
// ============================================================

const InquiryForm = ({
  fullName,
  setFullName,
  phone,
  setPhone,
  email,
  setEmail,
  service,
  setService,
  message,
  setMessage,
  loading,
  handleSubmit,
}) => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:p-5 lg:p-5 xl:p-6">
      {/* HEADER */}
      <div className="mb-4">
        <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
          <FaPaperPlane className="text-xs" />
        </div>

        <h2 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">
          Let's Build Something Great
        </h2>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          Tell us about your project and our team will get back to you.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="w-full space-y-3">
        {/* FULL NAME */}
        <div className="w-full">
          <label
            htmlFor="hero-full-name"
            className="mb-1 block text-xs font-semibold text-gray-700"
          >
            Full Name
          </label>

          <input
            id="hero-full-name"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your name"
            autoComplete="name"
            className={inputClass}
          />
        </div>

        {/* PHONE + EMAIL */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* PHONE */}
          <div className="w-full">
            <label
              htmlFor="hero-phone"
              className="mb-1 block text-xs font-semibold text-gray-700"
            >
              Phone
            </label>

            <input
              id="hero-phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              autoComplete="tel"
              inputMode="tel"
              className={inputClass}
            />
          </div>

          {/* EMAIL */}
          <div className="w-full">
            <label
              htmlFor="hero-email"
              className="mb-1 block text-xs font-semibold text-gray-700"
            >
              Email
            </label>

            <input
              id="hero-email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              autoComplete="email"
              inputMode="email"
              className={inputClass}
            />
          </div>
        </div>

        {/* SERVICE */}
        <div className="w-full">
          <label
            htmlFor="hero-service"
            className="mb-1 block text-xs font-semibold text-gray-700"
          >
            Service
          </label>

          <select
            id="hero-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">Select a service</option>

            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* MESSAGE */}
        <div className="w-full">
          <label
            htmlFor="hero-message"
            className="mb-1 block text-xs font-semibold text-gray-700"
          >
            Message
          </label>

          <textarea
            id="hero-message"
            name="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your project..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-blue-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <FaPaperPlane className="text-xs" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

// ============================================================
// MOBILE POPUP
// IMPORTANT:
// Also keep this OUTSIDE Hero.
// This prevents AnimatePresence from continuously remounting.
// ============================================================

const MobilePopup = ({ show, onClose, ...formProps }) => {
  return createPortal(
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5">
          {/* BACKDROP */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* MODAL */}
          <motion.div
            key="modal"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 max-h-[94vh] w-full max-w-md overflow-y-auto"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 shadow-sm transition hover:bg-gray-200"
              aria-label="Close form"
            >
              <MdClose className="text-xl" />
            </button>

            {/* FORM */}
            <InquiryForm {...formProps} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

// ============================================================
// HERO
// ============================================================

const Hero = () => {
  const navigate = useNavigate();
  const { axios } = useAppContext();

  // ==========================================================
  // FORM STATES
  // ==========================================================

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ==========================================================
  // MOBILE POPUP
  // ==========================================================

  const [showMobileForm, setShowMobileForm] = useState(false);

  // ==========================================================
  // TYPING ANIMATION
  // ==========================================================

  const [currentCareer, setCurrentCareer] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = services[currentCareer];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentText.substring(0, displayText.length + 1);

          setDisplayText(nextText);

          if (nextText === currentText) {
            setIsDeleting(true);
          }
        } else {
          const nextText = currentText.substring(0, displayText.length - 1);

          setDisplayText(nextText);

          if (nextText === "") {
            setIsDeleting(false);

            setCurrentCareer((prev) => (prev + 1) % services.length);
          }
        }
      },
      isDeleting ? 45 : displayText === currentText ? 1200 : 85,
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentCareer]);

  // ==========================================================
  // MOBILE FORM AUTO OPEN
  // Opens once after 3 seconds on mobile.
  // ==========================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        setShowMobileForm(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // ==========================================================
  // LOCK BODY SCROLL WHEN MOBILE POPUP IS OPEN
  // ==========================================================

  useEffect(() => {
    if (showMobileForm && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileForm]);

  // ==========================================================
  // FORM SUBMIT
  // ==========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATION
    if (
      !fullName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !service ||
      !message.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post("/api/inquiries", {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        service,
        message: message.trim(),
      });

      if (data?.success) {
        // RESET FORM
        setFullName("");
        setPhone("");
        setEmail("");
        setService("");
        setMessage("");

        // CLOSE MOBILE POPUP
        setShowMobileForm(false);

        // GO TO THANK YOU PAGE
        navigate("/thank-you");
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Inquiry Error:", error);

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to submit inquiry",
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================================
  // COMMON FORM PROPS
  // ==========================================================

  const formProps = {
    fullName,
    setFullName,
    phone,
    setPhone,
    email,
    setEmail,
    service,
    setService,
    message,
    setMessage,
    loading,
    handleSubmit,
  };

  // ==========================================================
  // HERO UI
  // ==========================================================

  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* BACKGROUND GLOWS */}
        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl sm:h-80 sm:w-80" />

        <div className="pointer-events-none absolute -bottom-20 -right-32 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl sm:h-96 sm:w-96" />

        {/* CONTENT */}
        <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16 xl:px-12">
          <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8 lg:gap-10 xl:gap-16">
            {/* ==================================================
                LEFT CONTENT
            ================================================== */}

            <div className="flex min-w-0 flex-col justify-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                {/* BADGE */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:text-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  Your Digital Growth Partner
                </div>

                {/* HEADING */}
                <h1 className="text-3xl font-extrabold leading-[1.12] text-gray-900 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Welcome to
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                    ZyntexMedia
                  </span>
                </h1>

                {/* TYPING TEXT */}
                <div className="mt-5 flex min-h-[34px] items-center text-lg font-bold text-blue-600 sm:text-xl lg:mt-6 lg:text-2xl">
                  <span>We Build</span>

                  <span className="ml-2">
                    {displayText}

                    <span className="ml-0.5 animate-pulse text-orange-500">
                      |
                    </span>
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:mt-5">
                  At{" "}
                  <span className="font-semibold text-gray-900">
                    ZyntexMedia
                  </span>
                  , we build modern digital solutions—from websites and mobile
                  apps to marketing campaigns. We combine technology,
                  creativity, and strategy to help businesses grow and connect
                  with their audience.
                </p>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-7">
                  {/* EMAIL */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=zyntexmedia@gmail.com&su=Hello&body=Let's%20Connect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto"
                  >
                    <MdEmail className="text-lg" />
                    Email Us
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href="https://wa.me/917479867857?text=Let's%20Connect%20with%20me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto"
                  >
                    <FaWhatsapp className="text-lg" />
                    WhatsApp Us
                  </a>
                </div>

                {/* BOTTOM LINE */}
                <div className="mt-7 hidden items-center gap-3 text-sm text-gray-500 md:flex">
                  <span className="h-px w-10 bg-gray-300" />
                  Modern • Creative • Growth Focused
                  <span className="h-px w-10 bg-gray-300" />
                </div>
              </motion.div>
            </div>

            {/* ==================================================
                DESKTOP FORM
                md and above
            ================================================== */}

            <div className="hidden min-w-0 md:block">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="mx-auto w-full max-w-[360px] lg:max-w-[500px]"
              >
                <InquiryForm {...formProps} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          MOBILE POPUP
      ======================================================== */}

      <MobilePopup
        show={showMobileForm}
        onClose={() => setShowMobileForm(false)}
        {...formProps}
      />
    </>
  );
};

export default Hero;
