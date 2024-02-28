import React from "react";
import logo from "../../styles/transparent.png";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-12 p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              <img src={logo.src} />
            </h3>
            <p className="mb-4">A brief description of the company.</p>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Service 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Service 2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Service 3
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-gray-400">
          &copy; 2024 THRIVE Salutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
