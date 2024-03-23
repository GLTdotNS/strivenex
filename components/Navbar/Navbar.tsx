import React, { useState } from "react";
import logo from "../../styles/logo.png";
import bg from "../../styles/bg.png";

import Link from "next/link";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className=" bg-white p-6 border-b-[1px] fixed w-full z-50 ">
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-yellow-50   via-yellow-500 to-blue-500 text-white text-center ">
          <h1 className="text-sm p-2 ">We support Ukraine</h1>
        </div>
        <Image
          width={200}
          height={200}
          src={bg.src}
          alt="Empower"
          className="mr-4 h-12 mt-4"
          style={{ display: "none" }}
        />
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center ">
            <Link href={"/"}>
              {" "}
              <Image
                width={200}
                height={200}
                src={logo.src}
                alt="Logo"
                className="mr-4 h-10 w-34  mt-6"
              />
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
              <button className="hover-2 bg-white border-2 border-blue-200 text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-4 rounded-full">
                Get started
              </button>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="slide-in-from-top   z-50 lg:hidden fixed font-bold text-4xl top-[130px] left-0 w-full h-full bg-gradient-to-b from-white via-white via-white to-orange-100 z-100 flex flex-col items-center justify-center">
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
    </>
  );
};

export default Navbar;
