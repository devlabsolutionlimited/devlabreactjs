import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import img from "../../../assets/images/logo.svg";
import {
  FaHome,
  FaChalkboardTeacher,
  FaBookOpen,
  FaChartLine,
  FaSignInAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 100;

      setIsSticky(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        style={{
          backgroundColor: isSticky ? "white" : "transparent",
          color: isSticky ? "black" : "white",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          padding: "1rem",
          transition: "background-color 0.3s ease-in-out",
          zIndex: 50,
          boxShadow: isSticky
            ? "0px 20px 50px rgba(59, 90, 136, 0.05)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="">
                <Link to="/" className="flex items-center">
                  <img className="h-11 w-11" src={img} alt="Logo" />
                  <p className=" text-3xl font-semibold font-sans">Dav<span className="text-primary">Lab</span></p>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex font-sans items-baseline space-x-12">
                <Link
                  to="/"
                  className="  hover:text-primary rounded-md text-base font-semibold"
                >
                  Home
                </Link>
                <Link
                  to="/instructors"
                  className="  hover:text-primary rounded-md text-base font-semibold"
                >
                  About
                </Link>
                <Link
                  to="/classes"
                  className="  hover:text-primary rounded-md text-base font-semibold"
                >
                  Pages
                </Link>
                <Link
                  to="/dashboard"
                  className="  hover:text-primary rounded-md text-base font-semibold"
                >
                  Blog
                </Link>
                <Link
                  to="/dashboard"
                  className="  hover:text-primary rounded-md text-base font-semibold"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Link
                to="/login"
                className={`px-7 py-4 rounded-full font-semibold text-base ${
                  isSticky
                    ? "bg-[#e74c3c] hover:bg-black hover:text-white text-white"
                    : "bg-white hover:bg-[#e74c3c] hover:text-white text-black"
                }`}
              >
                Get Started
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={handleToggle}
                className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={handleToggle}
          direction="left"
          className="z-50"
          style={{
            position: "fixed",
            height: "100%",
            width: "250px",
            background: "#081828",
          }}
        >
          <div className="px-4 py-4 text-white">
            <Link to="/" className="">
              <img
                className="h-11 w-11 px-auto"
                src={img}
                alt="Logo"
              />
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 mt-3 text-base"
              onClick={handleToggle}
            >
              <FaHome className="inline-block h-6 w-5 mr-2" /> Home
            </Link>
            <Link
              to="/instructors"
              className="block px-4 py-2 text-base"
              onClick={handleToggle}
            >
              <FaChalkboardTeacher className="inline-block h-6 w-5 mr-2" />{" "}
              Instructors
            </Link>
            <Link
              to="/classes"
              className="block px-4 py-2 text-base"
              onClick={handleToggle}
            >
              <FaBookOpen className="inline-block h-6 w-5 mr-2" /> Classes
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-base"
              onClick={handleToggle}
            >
              <FaChartLine className="inline-block h-6 w-5 mr-2" /> Dashboard
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-base"
              onClick={handleToggle}
            >
              <FaSignInAlt className="inline-block h-6 w-5 mr-2" /> Login
            </Link>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
