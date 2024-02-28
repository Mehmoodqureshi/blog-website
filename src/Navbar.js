/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Union from "./Union.jpg";
import "./navbar.css"; // Import CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [mode, setMode] = useState("light"); // Add state for mode

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle mode
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${
        scrolling ? "hidden bg-gray-800" : "bg-transparent"
      } ${mode === "dark" ? "dark-screen" : ""} p-4`}
    >
      <div className="container overflow-hidden flex items-center justify-between ">
        {/* Logo - Left */}
        <div className="flex items-center">
          <img src={Union} alt="Logo" className="h-8" />
          <span className="text-lg font-semibold text-black">
            Meta<b>Blog</b>
          </span>
        </div>

        {/* Navigation Links for Desktop (if needed) */}
        <div className="items-center  overflow-hidden space-x-12 pl-44 lg:flex">
          <Link to="/" className="text-black hover:text-gray-300">
            Home
          </Link>
          <Link to="/blogs" className="text-black hover:text-gray-300">
            Blog
          </Link>
          <Link to="/SinglePost" className="text-black hover:text-gray-300">
            Single Blog
          </Link>
          <a href="#" className="text-black hover:text-gray-300">
            Pages
          </a>
          <Link to="/contact" className="text-black hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Search Bar - Right */}
        <div className="flex items-center pl-32">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-12 py-2 pl-2 text-gray-700 rounded-md bg-gray-50 focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Dark Mode Switch */}
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="modeSwitch"
            checked={mode === "dark"}
            onChange={toggleMode}
            className="hidden"
          />
          {/* <label htmlFor="modeSwitch" className="mr-2"></label> */}
          <div
            className={`dark-mode-switch ${mode === "dark" ? "dark" : ""}`}
            onClick={toggleMode}
          ></div>
        </div>

        {/* Hamburger Icon for Mobile (if needed) */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none focus:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Navigation Links (if needed) */}
      {isOpen && (
        <div className="mt-4 flex-col lg:hidden">
          <Link to="/" className="block px-4 py-2 text-white border-b border-gray-700">
            Home
          </Link>
          <Link to="/blogs" className="block px-4 py-2 text-white border-b border-gray-700">
            Blog
          </Link>
          <Link to="/SinglePost" className="block px-4 py-2 text-white border-b border-gray-700">
            Single Blog
          </Link>
          <a
            href="#"
            className="block px-4 py-2 text-white border-b border-gray-700"
          >
            Page
          </a>
          <a href="#" className="block px-4 py-2 text-white">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
