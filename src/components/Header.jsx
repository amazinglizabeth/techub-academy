import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";

const Dropdown = ({ isOpen, toggleDropdown, courseItems, onItemClick }) => {
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
          {courseItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-customGreen transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick();
                  // Navigate immediately
                  console.log("Desktop navigating to:", item.href);
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
  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeDropdown = () => setIsDropdownOpen(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const courseItems = [
    { label: "Product Design", href: "/ProductDesign" },
    { label: "Front-end Engineering", href: "/FrontEnd" },
    { label: "Back-end Engineering", href: "/BackEnd" },
    { label: "Data Analysis", href: "/DataAnalysis" },
    { label: "Cybersecurity", href: "/CyberSecurity" },
    { label: "Digital Marketing", href: "/DigitalMarketing" },
  ];

  // Handle mobile dropdown item click
  const handleMobileItemClick = (href) => {
    console.log("Mobile navigating to:", href);
    closeMobileMenu();

    // Navigate immediately
    window.location.href = href;
  };

  // Handle desktop dropdown item click
  const handleDesktopItemClick = (href) => {
    console.log("Desktop navigating to:", href);
    closeDropdown();
    window.location.href = href;
  };

  // Click outside detection for both desktop and mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close desktop dropdown if clicked outside
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target) &&
        !mobileMenuRef.current?.contains(event.target)
      ) {
        closeDropdown();
      }

      // Close mobile menu if clicked outside (excluding hamburger button)
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
            <Dropdown
              isOpen={isDropdownOpen}
              toggleDropdown={toggleDropdown}
              courseItems={courseItems}
              onItemClick={() => handleDesktopItemClick}
            />
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
          ref={hamburgerButtonRef}
          className="md:hidden text-gray-700 focus:outline-none z-50"
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
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white shadow-lg px-6 py-4 space-y-0 absolute top-full left-0 right-0 z-40 border-t border-gray-200"
        >
          <a
            href="/About"
            className="block py-3 px-4 text-gray-600 hover:text-customGreen hover:bg-green-50 rounded-lg transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              console.log("About Us clicked");
              handleMobileItemClick("/About");
            }}
          >
            About Us
          </a>

          {/* Courses toggle */}
          <div className="py-2">
            <button
              className="w-full flex items-center justify-between text-gray-600 hover:text-customGreen cursor-pointer py-3 px-4 hover:bg-green-50 rounded-lg transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown();
              }}
            >
              <span>Courses</span>
              {isDropdownOpen ? (
                <ChevronUpIcon className="w-5 h-5 transition-all duration-200" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 transition-all duration-200" />
              )}
            </button>

            {/* Courses links */}
            {isDropdownOpen && (
              <div className="mt-2 space-y-1 pl-4">
                {courseItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-3 px-4 text-sm text-gray-700 hover:text-customGreen bg-green-50 rounded-lg transition-all duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleMobileItemClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="block py-3 px-4 text-gray-600 hover:text-customGreen hover:bg-green-50 rounded-lg transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              console.log("Projects clicked");
              handleMobileItemClick("#");
            }}
          >
            Projects
          </a>

          <div className="pt-2">
            <button
              className="w-full bg-customGreen text-white py-3 px-4 rounded-3xl hover:bg-green-800 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                handleMobileItemClick("#courses");
              }}
            >
              Explore courses
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
