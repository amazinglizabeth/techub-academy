import React from "react";
import logo from "./images/logo.png";
import instagram from "./images/Instagram.png";
import linkedin from "./images/Linkedin.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[rgba(195,227,200,1)] py-8 px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between md:gap-8">
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <img src={logo} alt="logo" className="ml-1 h-[60px] w-[140px]" />
          <p className="text-gray-700">
            TecHub Spaces Lateef Jakande Road, <br />
            Ikeja, Lagos
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/techubspaces?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              aria-label="Instagram"
            >
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={twitter} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Courses</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#">Product Design</a>
            </li>
            <li>
              <a href="#">Frontend Development</a>
            </li>
            <li>
              <a href="#">Backend Development</a>
            </li>
            <li>
              <a href="#">Data Analysis</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">About</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-8">
        <h2 className="font-semibold text-lg">Subscribe to our Newsletter</h2>
        <form className="mt-4 flex items-center gap-2 md:gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-1/2 md:w-[400px] px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[var(--customGreen)] text-white text-l rounded-3xl hover:bg-green-600 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Note */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-gray-500 text-center">
        © 2025 TecHub Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
