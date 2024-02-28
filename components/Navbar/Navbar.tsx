import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import logo from "../../styles/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="bg-white fixed w-full p-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img className="h-16 w-full" src={logo.src} alt="Logo" />
            </div>
            {/* Links */}
            <div className="hidden md:block flex-grow ">
              <div className="flex items-baseline space-x-4 justify-end">
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                {/* Dropdown for Services */}
                <div
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <button className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Services
                    <RiArrowDropDownLine size={20} style={{ float: "right" }} />
                  </button>
                  <div
                    className={`absolute z-10  w-64 bg-white rounded-md shadow-lg ${
                      dropdown ? "" : "hidden"
                    }`}
                    style={{ right: 0 }}
                  >
                    <div className="py-1 ">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Essential Starter Pack
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Standard Growth Package
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Advanced Advantage Package
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Premium Power Pack
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Elite Enterprise Package
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700  inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <div>
                {isOpen ? <IoMdClose size={30} /> : <CiMenuFries size={30} />}
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden" role="menu">
          <div className=" pt-2 pb-3 space-y-1 sm:px-3 border-2">
            <a
              href="#"
              className="text-gray-700 hover:bg-slate-100 hover:text-gray px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="text-gray-700 hover:bg-slate-50 hover:text-gray px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
                <RiArrowDropDownLine />
              </button>
              <div
                className={`absolute inset-12 left-0 w-full bg-slate-50 h-48 z-10 bg-white border-b-2 shadow-lg ${
                  dropdown ? "" : "hidden"
                }`}
              >
                <div className="py-1 ">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Essential Starter Pack
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Standard Growth Package
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Advanced Advantage Package
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Premium Power Pack
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Elite Enterprise Package
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
