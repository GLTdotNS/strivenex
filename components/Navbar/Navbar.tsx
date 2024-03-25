import React, { useState } from "react";
import logo from "../../styles/logo.png";
import bg from "../../styles/bg.png";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa"; // Import icons

import Link from "next/link";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className=" bg-white p-4  fixed border-b-2 w-full z-50 ">
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-yellow-50   via-yellow-500 to-blue-500 text-white text-center ">
          <h1 className="text-sm p-2 ">We support Ukraine</h1>
        </div>
        <Image
          width={200}
          height={200}
          src={bg.src}
          alt="Empower"
          className="mr-4    mt-4"
          style={{ display: "none" }}
        />
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={"/"}>
            {" "}
            <Image
              width={1000}
              height={1000}
              src={logo.src}
              alt="Logo"
              className="mr-4 h-23 w-24  mt-6"
            />
          </Link>
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
              Contacts
            </Link>
          </div>

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

          <div className="hidden lg:flex ">
            <Link href={"/booking"}>
              {" "}
              <button className="hover-2 bg-white border-2 border-blue-200 text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-4 ">
                Get started
              </button>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="slide-in-from-top uppercase z-50 lg:hidden fixed text-4xl top-[110px] left-0 w-full h-full bg-gradient-to-b from-white via-white via-white to-orange-100 z-100 flex flex-col items-start justify-start p-4">
            <a
              href={"/"}
              className="text-gray-800 border-b-2 hover:text-gray-600 mx-4 mt-12 flex items-center"
            >
              <FaHome className="mr-2 " />
              Home
            </a>
            <a
              href={"/about"}
              className="text-gray-800 border-b-2 hover:text-gray-600 mx-4 mt-2 flex items-center"
            >
              <FaInfoCircle className="mr-2" /> About
            </a>
            <a
              href={"/contact"}
              className="text-gray-800 border-b-2 hover:text-gray-600 mx-4 mt-2 flex items-center"
            >
              <FaEnvelope className="mr-2" />
              Contacts
            </a>
            <div className="flex justify-center mt-24 bottom-[20px] w-full">
              <button className="hover-2 bg-white border-2 border-blue-200 text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-4">
                Get started
              </button>
            </div>

            <div className="flex justify-center w-full mt-4">
              <div className="bg-yellow-200 border border-yellow-500 text-yellow-900 px-4 py-2 rounded-lg">
                <p>Special Offer!</p>
                <p className="text-sm">Get 20% off on your first purchase.</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
