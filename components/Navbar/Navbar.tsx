import React, { useState } from "react";
import logo from "../../styles/logo.png";
import Link from "next/link";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-white via-gray-100 to-white p-4 border-b-[1px] fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center ">
          <Link href={"/"}>
            {" "}
            <img src={logo.src} alt="Logo" className="h-10 mr-4 h-12" />
          </Link>
        </div>
        <div className="hidden lg:flex uppercase flex-grow justify-center">
          <Link
            href={"/"}
            className="text-gray-800 hover:text-gray-600 mx-4 hover-1"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="text-gray-800 hover:text-gray-600 mx-4 hover-1"
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="text-gray-800 hover:text-gray-600 mx-4 hover-1"
          >
            Contact
          </Link>
        </div>
        {/* Hamburger Icon for Small Devices */}
        <div className="block lg:hidden ">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="demo">
              <div className="menu-icon">
                <input className="menu-icon__cheeckbox" type="checkbox" />
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Right Button (visible in navbar) */}
        <div className="hidden lg:flex ">
          <Link href={"/booking"}>
            {" "}
            <button className="hover-2 bg-white border-2 border-blue-200 text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-4 rounded-full">
              Get started
            </button>
          </Link>
        </div>
      </div>

      {/* Responsive Menu for Small Devices */}
      {isMenuOpen && (
        <div className="slide-in-from-top z-50 lg:hidden fixed font-bold text-4xl top-0 left-0 w-full h-full bg-orange-50 flex flex-col items-center justify-center">
          <img src={logo.src} alt="" className="fixed top-[0px] left-0 h-24" />
          <Link href={"/"} className="text-gray-800 hover:text-gray-600 mx-4">
            Home
          </Link>
          <Link
            href={"/about"}
            className="text-gray-800 hover:text-gray-600 mx-4 mt-2"
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="text-gray-800 hover:text-gray-600 mx-4 mt-2"
          >
            Contact
          </Link>
          <Link href={"booking"}>
            {" "}
            <button className="hover-2 bg-white mt-12 border-2 border-blue-200 text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-4 rounded-full">
              Get started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
