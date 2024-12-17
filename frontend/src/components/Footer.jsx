import Logo from "../assets/icons/Logo";
import { Link, NavLink } from "react-router-dom";
import FacebookLogo from '../assets/images/FacebookFooter.png';
import LinkedInLogo from '../assets/images/LinkedInFooter.png';
import InstaFooter from '../assets/images/InstaFooter.png';
import WhatsAppFooter from '../assets/images/WhatsAppFooter.png';
import EmailInput from "./EmailInput";

const Footer = () => {
  return (
    <div className="relative text-white">
      <div className="relative z-10 max-w-8xl px-6 sm:px-8 lg:px-16 mx-auto py-8 sm:py-12 lg:py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Description */}
        <div className="space-y-6 sm:space-y-8">
          <Logo />
          <p className="text-sm text-white leading-5">
            Scala-Tech offers a range of services including design, engineering,
            and project management. We specialize in user experience design, web
            development, mobile app development, custom software development,
            branding and identity, and more.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 sm:mb-8">About Us</h3>
          <p className="text-sm">
            Scala Technology
            <span className="block mt-2 sm:mt-4">BASED IN Austin, Texas</span>
            <a
              href="mailto:infoscalatech@gmail.com"
              className="underline mt-2 sm:mt-4 block"
            >
              infoscalatech@gmail.com
            </a>
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 sm:mb-8">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive
                      ? "text-navblue underline"
                      : "text-white hover:underline"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive
                      ? "text-navblue underline"
                      : "text-white hover:underline"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive
                      ? "text-navblue underline"
                      : "text-white hover:underline"
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources/portfolio"
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive
                      ? "text-navblue underline"
                      : "text-white hover:underline"
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources/blogs"
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive
                      ? "text-navblue underline"
                      : "text-white hover:underline"
                  }`
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources/careers"
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive
                      ? "text-navblue underline"
                      : "text-white hover:underline"
                  }`
                }
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive
                      ? "text-navblue underline"
                      : "text-white hover:underline"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Newsletter and Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 sm:mb-8">Newsletter</h3>
          {/* <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-auto flex-1 p-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button className="p-2 bg-navblue rounded-md hover:bg-navblue">
              →
            </button>
          </div> */}
          <EmailInput/>

          <h3 className="text-xl font-semibold mb-4 sm:mb-8 mt-6 sm:mt-8">Socials</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400">
              <img src={FacebookLogo} alt="Facebook" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <img src={InstaFooter} alt="Instagram" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <img src={LinkedInLogo} alt="LinkedIn" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <img src={WhatsAppFooter} alt="WhatsApp" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-6 sm:px-8 lg:px-16">
        <span className="block border-t border-white h-10"></span>
      </div>
      <div className="text-center text-sm text-white pb-6 sm:pb-8 lg:pb-16">
        Copyright © 2024 Scala Technologies
      </div>
    </div>
  );
};

export default Footer;
