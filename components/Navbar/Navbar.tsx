import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import logo from "../../styles/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setProductsOpen(false);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
    setServicesOpen(false);
  };

  const changeLanguage = () => {
    // Your logic for changing the language goes here
    console.log("Language changed to:");
  };

  return (
    <nav className="bg-white fixed w-full p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            height={500}
            width={500}
            src={logo.src}
            alt="Logo"
            className="h-16 w-auto mr-4"
          />
          <span className="font-semibold text-lg text-gray-800"></span>
        </div>
        <div className="flex items-center">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <HiMenuAlt2 className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href={"/"}>Home</Link>

            <div className="relative">
              <button
                onMouseEnter={toggleServices}
                onMouseLeave={toggleServices}
                className="text-gray-700   hover:text-gray-900 focus:outline-none relative flex items-center"
              >
                <span>Services</span>
                <FiChevronDown className="ml-1" />
                {servicesOpen && (
                  <div className="absolute text-left mt-[290px]  w-[250px] bg-white shadow-lg ">
                    <a
                      href="#"
                      className="py-2 border-b-2 px-4 text-sm bg-slate-100 text-gray-700 hover:text-gray-900 block"
                    >
                      Web design
                    </a>
                    <a
                      href="#"
                      className="py-2 bg-slate-50 border-b-2 px-4 text-sm text-gray-700 hover:text-gray-900 block"
                    >
                      Web developement
                    </a>
                    <a
                      href="#"
                      className="py-2 border-b-2 px-4 text-sm bg-slate-100 text-gray-700 hover:text-gray-900 block"
                    >
                      Website maintance
                    </a>{" "}
                    <a
                      href="#"
                      className="py-2 bg-slate-50 border-b-2 px-4 text-sm text-gray-700 hover:text-gray-900 block"
                    >
                      Redesign
                    </a>{" "}
                    <a
                      href="#"
                      className="py-2 border-b-2 px-4 text-sm bg-slate-100 text-gray-700 hover:text-gray-900 block"
                    >
                      Content writing
                    </a>{" "}
                    <a
                      href="#"
                      className="py-2 bg-slate-50 border-b-2 px-4 text-sm text-gray-700 hover:text-gray-900 block"
                    >
                      SEO
                    </a>{" "}
                    <a
                      href="#"
                      className="py-2 border-b-2 px-4 text-sm bg-slate-100 text-gray-700 hover:text-gray-900 block"
                    >
                      Logo design
                    </a>{" "}
                  </div>
                )}
              </button>
            </div>
            <div className="relative">
              <button
                onMouseEnter={toggleProducts}
                onMouseLeave={toggleProducts}
                className="text-gray-700   hover:text-gray-900 focus:outline-none relative flex items-center"
              >
                <span>Products</span>
                <FiChevronDown className="ml-1" />
                {productsOpen && (
                  <div className="absolute text-left mt-44 w-[250px] bg-white shadow-lg ">
                    <Link
                      href="/products/basic"
                      className="py-2 border-b-2 px-4 text-sm bg-slate-100 text-gray-700 hover:text-gray-900 block"
                    >
                      Basic Starter Pack
                    </Link>
                    <Link
                      href="/products/standard"
                      className="py-2 bg-slate-50 border-b-2 px-4 text-sm text-gray-700 hover:text-gray-900 block"
                    >
                      Standard Growth Package
                    </Link>
                    <Link
                      href="/products/advanced"
                      className="py-2 border-b-2 px-4 text-sm bg-slate-100 text-gray-700 hover:text-gray-900 block"
                    >
                      Premium Advantage Package
                    </Link>{" "}
                    <Link
                      href="/products/custom"
                      className="py-2 border-b-2 px-4 text-sm bg-slate-100 text-gray-700 hover:text-gray-900 block"
                    >
                      Custom Package
                    </Link>{" "}
                  </div>
                )}
              </button>
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              Contact
            </a>
          </div>
          {/* Language Change Button */}
          <button
            onClick={() => changeLanguage()}
            className="text-gray-700 hover:text-gray-900 focus:outline-none ml-8 flex items-center"
          >
            <img
              alt="Germany"
              height={20}
              width={20}
              src={
                "https://png2.cleanpng.com/sh/111a992450be726949134d123a60bc53/L0KzQYm3U8E6N5Dpj5H0aYP2gLBuTgN6dZN0hJ9EZXzvf8i0gBlza51qRdh4boSwd7b5jfFvgV46edQ5NkHpRoiBVsc6Ol89TacCMUG7SYK8UsE2OGk9TaY9OUO1PsH1h5==/kisspng-symbol-yellow-circle-font-germany-5ab061f6786792.8557118915215088544932.png"
              }
              className="mr-2"
            />
            <span>DE</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="mt-2 px-4 py-3 bg-white shadow sm:hidden">
            <Link onClick={() => setIsOpen(!open)} href={"/"}>
              Home
            </Link>
            <button
              onClick={toggleServices}
              className="block py-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              Services
            </button>
            {servicesOpen && (
              <div className="pl-4 transition-all">
                <a
                  onClick={() => setIsOpen(!open)}
                  href="#"
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Service 1
                </a>
                <a
                  onClick={() => setIsOpen(!open)}
                  href="#"
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Service 2
                </a>
                {/* Add more services here */}
              </div>
            )}
            <button
              onClick={toggleProducts}
              className="block py-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              Products
            </button>
            {productsOpen && (
              <div className="pl-4">
                <Link
                  onClick={() => setIsOpen(!open)}
                  href="/products/basic"
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Basic Starter Pack
                </Link>
                <Link
                  onClick={() => setIsOpen(!open)}
                  href="/products/standard"
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Standard Growth Package
                </Link>
                <Link
                  onClick={() => setIsOpen(!open)}
                  href="/products/advanced"
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Premium Advantage Package
                </Link>
                <Link
                  onClick={() => setIsOpen(!open)}
                  href="/products/advanced"
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Custom Package
                </Link>
              </div>
            )}
            <a
              href="#"
              className="block py-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none"
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
