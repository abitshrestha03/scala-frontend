import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// import Logo from "../assets/icons/Logo";
import LogoImage from '../assets/images/Logo.png';
import MobileLogo from "../assets/icons/MoblieLogo";
import FacebookLogo from "../assets/images/FacebookFooter.png";
import LinkedInLogo from "../assets/images/LinkedInFooter.png";
import InstaFooter from "../assets/images/InstaFooter.png";
import WhatsAppFooter from "../assets/images/WhatsAppFooter.png";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu when a NavLink is clicked
    setIsDropdownOpen(false); // Close dropdown
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 h-20 py-4 sm:px-6 ms:px-6 md:px-8 lg:px-20 xl:px-32 3xl:px-80 transition-all duration-300 ${
        // isScrolled ? "backdrop-blur-lg bg-blue-900/80 shadow-xl" : ""
        isScrolled ? "backdrop-blur-lg bg-[#071560E5] shadow-xl" : ""
      }`}
    >
      {" "}
      <div className="flex justify-between items-center">
        <Link to="/">
          {/* <Logo /> */}
          <img src={LogoImage} style={{ height: "50px" }} alt="Logo" />
        </Link>
        <button className="block lg:hidden text-white" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <nav
          ref={menuRef}
          className={`${
            isMenuOpen ? "" : "hidden"
          }  flex-col items-center space-y-2 lg:flex lg:flex-row lg:space-y-0 lg:space-x-8 relative`}
          style={
            isMenuOpen
              ? {
                  background:
                    "linear-gradient(185.77deg, #000822 0%, #000C32 100%)",
                }
              : {}
          }
        >
          <div
            className={`${
              isMenuOpen
                ? "fixed right-0 left-0 top-0 bottom-0 h-[100vh] flex flex-col py-4 px-4"
                : "flex-col items-center space-y-2 lg:flex lg:flex-row lg:space-y-0 lg:space-x-8 relative"
            }`}
            style={
              isMenuOpen
                ? {
                    background:
                      "linear-gradient(185.77deg, #000822 0%, #000C32 100%)",
                  }
                : {}
            }
          >
            <div
              className={`flex justify-between items-center py-4 px-4 ${
                isMenuOpen ? "block mb-4" : "hidden"
              }`}
            >
              {/* Mobile Logo */}
              <Link to="/">
                <MobileLogo />
              </Link>
              {/* Close Button */}
              <button className="text-white text-4xl" onClick={closeMenu}>
                &times;
              </button>
            </div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold py-2 px-4 lg:px-1 xl:px-3 rounded-sm ms:text-[20px] md:text-lg lg:text-sm xl:text-base ms:hidden lg:block ${
                  isActive
                    ? "text-navblue bg-navbg"
                    : "text-navWhite hover:bg-navbg"
                }`
              }
              onClick={closeMenu}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-semibold py-2 px-4 lg:px-1 xl:px-3 rounded-sm ms:text-[20px] md:text-lg lg:text-sm xl:text-base ms:hidden lg:block ${
                  isActive
                    ? "text-navblue bg-navbg"
                    : "text-navWhite hover:bg-navbg"
                }`
              }
              onClick={closeMenu}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `font-semibold py-2 px-4 lg:px-1 xl:px-3 rounded-sm ms:text-[20px] md:text-lg lg:text-sm xl:text-base ms:hidden lg:block ${
                  isActive
                    ? "text-navblue bg-navbg"
                    : "text-navWhite hover:bg-navbg"
                }`
              }
              onClick={closeMenu}
            >
              SERVICES
            </NavLink>
            <div className="flex justify-center lg:hidden">
              <div className="text-white flex flex-col items-start space-y-2 font-semibold lg:hidden ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 rounded-sm text-[20px] md:text-lg lg:text-sm xl:text-base flex items-center gap-x-2 ${
                      isActive ? "text-navblue" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="text-3xl">•</span> Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 rounded-sm text-[20px] md:text-lg lg:text-sm xl:text-base flex items-center gap-x-2 ${
                      isActive ? "text-navblue" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="text-3xl">•</span> About Us
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `px-4 rounded-sm text-[20px] md:text-lg lg:text-sm xl:text-base flex items-center gap-x-2 ${
                      isActive ? "text-navblue" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="text-3xl">•</span> <span>Services</span>
                </NavLink>
                <NavLink
                  to="/resources/portfolio"
                  className={({ isActive }) =>
                    `px-4 rounded-sm text-[20px] md:text-lg lg:text-sm xl:text-base flex items-center gap-x-2 ${
                      isActive ? "text-navblue" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="text-3xl">•</span> Portfolio
                </NavLink>
                <NavLink
                  to="/resources/blogs"
                  className={({ isActive }) =>
                    `px-4 rounded-sm text-[20px] md:text-lg lg:text-sm xl:text-base flex items-center gap-x-2 ${
                      isActive ? "text-navblue" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="text-3xl">•</span> Blogs
                </NavLink>
                <NavLink
                  to="/resources/careers"
                  className={({ isActive }) =>
                    `px-4 rounded-sm text-[20px] md:text-lg lg:text-sm xl:text-base flex items-center gap-x-2 ${
                      isActive ? "text-navblue" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="text-3xl">•</span> Careers
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `px-4 rounded-sm text-[20px] md:text-lg lg:text-sm xl:text-base flex items-center gap-x-2 ${
                      isActive ? "text-navblue" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="text-3xl">•</span> Contact Us
                </NavLink>
              </div>
            </div>

            <div className="mobile-footer lg:hidden text-white text-center mt-8">
              <h4 className="text-[16px]">Reach Out</h4>
              <a
                href="mailto:infoscalatech@gmail.com"
                className="text-[12px] underline"
              >
                infoscalatech@gmail.com
              </a>
              <div className="flex space-x-4 mt-2 justify-center">
                <Link href="#" className="hover:text-blue-400">
                  <img src={FacebookLogo} alt="Facebook" className="h-[20px]" />
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  <img src={InstaFooter} alt="Instagram" className="h-[20px]" />
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  <img src={LinkedInLogo} alt="LinkedIn" className="h-[20px]" />
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  <img
                    src={WhatsAppFooter}
                    alt="WhatsApp"
                    className="h-[20px]"
                  />
                </Link>
              </div>{" "}
            </div>
            <div
              className="relative"
              onMouseEnter={() => !isMenuOpen && setIsDropdownOpen(true)} // Open on hover (desktop)
              onMouseLeave={() => !isMenuOpen && setIsDropdownOpen(false)} // Close on hover out (desktop)
            >
              <button
                className={`items-center text-navWhite font-semibold hover:bg-navbg hover:py-2 lg:px-1 xl:px-4 space-x-2 hidden lg:flex ${
                  isMenuOpen ? "cursor-pointer" : ""
                }`}
                onClick={isMenuOpen ? toggleDropdown : undefined} // Clickable in burger menu only
              >
                <span
                  className={`md:text-lg  lg:text-sm xl:text-base ${
                    isMenuOpen
                      ? "text-navWhite hover:bg-navbg font-semibold ms-4 mb-2"
                      : ""
                  }`}
                >
                  RESOURCES
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  } ${isMenuOpen ? "mb-2" : "mb-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute w-48 bg-gray-900 rounded-lg shadow-lg py-2 z-10">
                  <NavLink
                    to="/resources/portfolio"
                    className="block px-4 py-2 text-sm hover:bg-gray-800 text-navWhite rounded-md cursor-pointer font-semibold"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      closeMenu();
                    }}
                  >
                    PORTFOLIO
                  </NavLink>
                  <NavLink
                    to="/resources/blogs"
                    className="block px-4 py-2 text-sm hover:bg-gray-800 text-navWhite rounded-md cursor-pointer font-semibold"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      closeMenu();
                    }}
                  >
                    BLOGS
                  </NavLink>
                  <NavLink
                    to="/resources/careers"
                    className="block px-4 py-2 text-sm hover:bg-gray-800 text-navWhite rounded-md cursor-pointer font-semibold"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      closeMenu();
                    }}
                  >
                    CAREERS
                  </NavLink>
                </div>
              )}
            </div>
            <Link
              to="/contact-us"
              className={`hidden lg:block ${
                isMenuOpen
                  ? "text-navWhite over:bg-navbg font-semibold ms-4"
                  : "px-4 py-2 text-white font-semibold transition md:text-lg lg:text-sm xl:text-base bg-[#0039EF] rounded-[4px]"
              }`}
              style={
                isMenuOpen
                  ? {}
                  : {
                      boxShadow: `
                      0px 10px 12px 0px rgba(255, 255, 255, 0.2) inset, 
                      0px -6px 10px 0px rgba(0, 0, 0, 0.25) inset, 
                      3px 0px 17px 0px rgba(0, 0, 0, 0.25) inset, 
                      -5px 0px 14px 0px rgba(255, 255, 255, 0.13) inset
                    `,
                    }
              }
            >
              CONTACT US
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
