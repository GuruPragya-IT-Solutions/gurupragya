import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // State for mobile dropdown

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen); // Toggle mobile dropdown visibility
  };

  return (
    <nav className="bg-white shadow-lg font-['pacifico'] fixed top-0 w-full z-50 min-h-[8vh]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo (Aligned to the left) */}
        <div className="flex items-center space-x-3 mr-auto">
          <img
            src="https://i.imgur.com/9gxMIrq.png"
            alt="Logo"
            className="h-24"
          />
        </div>

        {/* Left Links (hidden on small screens) */}
        <div className="flex space-x-12 text-lg font-medium hidden md:flex items-center">
          <Link
            to="/"
            className="text-blue-600 hover:bg-blue-600 hover:text-white hover:border-2 hover:border-blue-600 px-5 py-2 rounded-full transition-all duration-100 ease-in"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-blue-600 hover:bg-blue-600 hover:text-white hover:border-2 hover:border-blue-600 px-5 py-2 rounded-full transition-all duration-100 ease-in"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              to="#"
              className="text-blue-600 hover:bg-blue-600 hover:text-white hover:border-2 hover:border-blue-600 px-5 py-2 rounded-full transition-all duration-100 ease-in"
            >
              Services
            </Link>
            {/* Dropdown Menu for Desktop */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-10">
                <Link
                  to="/services/web-development"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  Web Development
                </Link>
                <Link
                  to="/services/app-development"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  App Development
                </Link>
                <Link
                  to="/services/digital-marketing"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/services/seo"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  SEO Optimization
                </Link>
                <Link
                  to="/services/ui-ux-design"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  UI/UX Design
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Links (hidden on small screens) */}
        <div className="flex space-x-12 text-lg font-medium hidden md:flex items-center">
          <Link
            to="/contact"
            className="contact-link text-blue-600 hover:bg-blue-600 hover:text-white hover:border-2 hover:border-blue-600 px-5 py-2 rounded-full transition-all duration-100 ease-in-out"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center px-6 py-3">
          <button
            onClick={toggleMobileMenu}
            className="text-blue-600 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full flex flex-col space-y-4 mt-4 px-6 py-4 bg-white shadow-xl z-30 transition-all duration-300 ease-in-out">
          <Link
            to="/"
            className="text-blue-600 hover:bg-blue-600 hover:text-white hover:border-2 hover:border-blue-600 px-5 py-2 rounded-full transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-blue-600 hover:bg-blue-600 hover:text-white hover:border-2 hover:border-blue-600 px-5 py-2 rounded-full transition-all duration-300 ease-in-out"
          >
            About
          </Link>
          <div className="relative">
            <button
              onClick={toggleMobileDropdown} // Toggle dropdown on click
              className="text-blue-600 hover:bg-blue-600 hover:text-white hover:border-2 hover:border-blue-600 px-5 py-2 rounded-full transition-all duration-300 ease-in-out"
            >
              Services
            </button>
            {/* Dropdown for Mobile */}
            {isMobileDropdownOpen && (
              <div className="w-full bg-white shadow-lg rounded-md z-10">
                <Link
                  to="/services/web-development"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  Web Development
                </Link>
                <Link
                  to="/services/app-development"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  App Development
                </Link>
                <Link
                  to="/services/digital-marketing"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/services/seo"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  SEO Optimization
                </Link>
                <Link
                  to="/services/ui-ux-design"
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
                >
                  UI/UX Design
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className="contact-link text-blue-600 hover:bg-blue-600 hover:text-white hover:border-2 hover:border-blue-600 px-5 py-2 rounded-full transition-all duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
