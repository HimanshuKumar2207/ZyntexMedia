import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Expertise", path: "/expertise" },
    { name: "Works", path: "/projects" },
    // { name: "Blogs", path: "/blogmain" },
    { name: "Contact", path: "/contact" },
  ];

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Disable scroll on mobile menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScrollTop = () => {};
  });

  return (
    <div className="sticky top-0 z-50">
      <header className="w-full px-8 py-2 shadow-md bg-white flex items-center lg:justify-around justify-between relative z-50">
        {/* Logo */}
        <Link to="/">
          <img
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            src={assets.logotext}
            alt="Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7 text-gray-900 font-semibold">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // smooth scroll
                })
              }
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 text-md font-semibold"
                  : "text-gray-800"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="button px-4 py-2 "
            >
              Let's Talk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" ref={toggleRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <RxCross2 size={28} /> : <CiMenuFries size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-40"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600 transition"
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link to="/contact">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="button px-4 py-2 "
              >
                Let's Talk
              </button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
