import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";

const Dropdown = ({ isOpen, toggleDropdown }) => {
  return (
    <div className="relative inline-block">
      {isOpen ? (
        <ChevronUpIcon
          className="cursor-pointer w-5 h-5 ml-1 transition-all duration-200 text-customGreen"
          onClick={toggleDropdown}
        />
      ) : (
        <ChevronDownIcon
          className="cursor-pointer w-5 h-5 ml-1 transition-all duration-200 text-gray-600 hover:text-customGreen"
          onClick={toggleDropdown}
        />
      )}

      {isOpen && (
        <ul className="absolute left-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-20 animate-fadeIn">
          {[
            { label: "Product Design", href: "/ProductDesign" },
            { label: "Front-end Engineering", href: "/FrontEnd" },
            { label: "Back-end Engineering", href: "/BackEnd" },
            { label: "Data Analysis", href: "/DataAnalysis" },
            { label: "Cybersecurity", href: "/CyberSecurity" },
            { label: "Digital Marketing", href: "/DigitalMarketing" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-customGreen transition-colors duration-200"
                onClick={(e) => {
                  window.location.href = item.href;
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownContainerRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop dropdown
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }

      // Mobile dropdown
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target) &&
        isMobileMenuOpen &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, isDropdownOpen]);

  // Course items array to avoid duplication
  const courseItems = [
    { label: "Product Design", href: "/ProductDesign" },
    { label: "Front-end Engineering", href: "/FrontEnd" },
    { label: "Back-end Engineering", href: "/BackEnd" },
    { label: "Data Analysis", href: "/DataAnalysis" },
    { label: "Cybersecurity", href: "/CyberSecurity" },
    { label: "Digital Marketing", href: "/DigitalMarketing" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="logo" className="ml-1 h-[40px]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12 items-center">
          <a href="/About" className="text-gray-600 hover:text-customGreen">
            About Us
          </a>
          <div
            className="flex items-center relative"
            ref={dropdownContainerRef}
          >
            <span
              className="text-gray-600 hover:text-customGreen mr-1 cursor-pointer"
              onClick={toggleDropdown}
            >
              Courses
            </span>
            <Dropdown isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
          </div>
          <a href="#" className="text-gray-600 hover:text-customGreen">
            Projects
          </a>
        </nav>

        {/* Desktop Button */}
        <a href="#courses" className="hidden md:block">
          <button className="bg-[var(--customGreen)] text-white py-2 px-4 rounded-3xl hover:bg-green-800">
            Explore courses
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <a
            href="/About"
            className="block text-gray-600 hover:text-customGreen"
          >
            About Us
          </a>
          <div ref={mobileDropdownRef}>
            <div
              className="flex items-center justify-between text-gray-600 hover:text-customGreen cursor-pointer"
              onClick={toggleDropdown}
            >
              <span>Courses</span>
              {isDropdownOpen ? (
                <ChevronUpIcon className="w-5 h-5 transition-all duration-200" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 transition-all duration-200" />
              )}
            </div>
            {isDropdownOpen && (
              <div className="ml-4 mt-2 space-y-1">
                {courseItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-3 px-4 text-sm text-gray-700 hover:text-customGreen hover:bg-green-50 rounded-lg transition-all duration-200"
                    onClick={(e) => {
                      window.location.href = item.href;
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="block text-gray-600 hover:text-customGreen">
            Projects
          </a>
          <a href="#courses">
            <button className="w-full bg-customGreen text-white py-2 px-4 rounded-3xl hover:bg-green-800">
              Explore courses
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
