import React from "react";
import logo from "../../styles/transparent.png";
import img from "../../styles/footer.png";
import Getstarted from "../GetStarted/Getstarted";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="bg-slate-50 font-bold text-gray-700 py-6 px-4 border-t-2"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <Getstarted />

        <ul className="flex justify-center lg:justify-end mt-4 lg:mt-0 border-2 rounded p-2 mb-12">
          <li className="mx-2">
            <Link href="/" className="hover-1">
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/about" className="hover-1 border-2-b">
              About
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/booking" className="hover-1 ">
              Contact
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/terms" className="hover-1">
              ToS
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/privacy" className="hover-1">
              Privacy
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full text-center border-t-2">
        <span className="text-center p-2">All rights reserved |</span>
        <span>StriveNex, Berlin, De</span>
      </div>
    </footer>
  );
};

export default Footer;
