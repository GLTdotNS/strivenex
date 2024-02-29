import React from "react";
import { useState } from "react";
import bg from "../../styles/bg.png";
import {
  FaShoppingCart,
  FaMapMarkerAlt,
  FaFacebookSquare,
} from "react-icons/fa";
import CustomerCountSection from "../Customers/Customers";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
const Landing = () => {
  const router = useRouter();

  return (
    <div className="bg-white-100">
      <header className="bg-cover bg-center text-blue-400 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="max-w-md text-center md:text-left mt-24">
            <h1 className="text-4xl font-bold leading-tight mt-4 slide-in-from-top">
              Empower Your Business Growth with Us
            </h1>
            <p className="text-lg mb-8 animate-slide-in ">
              We offer easy solutions to enhance your business presence.
            </p>
            <ul className="text-left text-black mt-12 mb-12">
              <li className="mb-2 slide-in-from-left">
                Easy Contact with Our Team
              </li>
              <li className="mb-2 slide-in-from-right">
                Scalable and Customized Solutions
              </li>
              <li className="animate-slide-in ">
                Growing Your Business Made Simple
              </li>
            </ul>
            <Link
              href="/booking"
              className="bg-gradient-to-r from-orange-300 to-orange-400 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-2 px-6 rounded-lg inline-block shadow-md"
            >
              Book now
            </Link>
          </div>

          <img
            className="mt-2 md:mt-0 md:w-[40%] sm:w-full"
            src={bg.src}
            alt="Platform"
          />
        </div>
      </header>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100  flex items-center justify-center">
        <div className=" py-12 px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl text-gray-700 lg:text-6xl font-bold mb-4">
            Cutting Edge Solutions for Your Business
          </h1>
          <p className="text-lg text-gray-600 md:text-xl lg:text-2xl">
            Empowering small businesses with innovative technology and
            strategies.
          </p>
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-6 rounded-full mt-8">
            Learn More
          </button>
          <div className="container mx-auto px-4 py-8 text-gray-700 ">
            <div className="grid grid-cols-1  md:grid-cols-2  gap-8">
              {/* Essential Starter Pack */}
              <div className={`bg-white shadow-lg rounded-lg overflow-hidden`}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Basic Starter Pack
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tailored for startups and small businesses, offering
                    essential services to establish a robust online presence.{" "}
                    <br />
                  </p>
                  <br />
                  <ul className="list-disc list-inside mb-4 ">
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Basic website setup
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Free logo design
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Social media integration
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegTimesCircle className="text-red-500 mr-2" />
                      SEO optimization
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegTimesCircle className="text-red-500 mr-2" />
                      Advanced SEO analytics
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegTimesCircle className="text-red-500 mr-2" />
                      Monthly reports
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegTimesCircle className="text-red-500 mr-2" />
                      No limit on bandwidth
                    </li>
                  </ul>
                  <button className="block w-full py-2 text-center rounded-lg bg-gray-300 text-gray-700 cursor-not-allowed">
                    Learn more
                  </button>
                </div>
              </div>

              {/* Standard Growth Package */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden slide-in-from-right ">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Standard Growth Package
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Designed for businesses looking to expand their reach.
                    Offers standard marketing and growth-oriented services.
                  </p>
                  <br />
                  <ul className="list-disc list-inside mb-4">
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Advanced website setup
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Free logo design
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Social media integration
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      SEO optimization
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegTimesCircle className="text-red-500 mr-2" />
                      Advanced SEO analytics
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegTimesCircle className="text-red-500 mr-2" />
                      Monthly reports
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegTimesCircle className="text-red-500 mr-2" />
                      Unlimited bandwidth
                    </li>
                  </ul>
                  <button
                    onClick={() => router.push("/products/standard")}
                    className="block w-full py-2 text-center rounded-lg bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-bold hover:bg-yellow-400 transition-all duration-300"
                  >
                    Learn more
                  </button>
                </div>
              </div>

              {/* Advanced Advantage Package */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Advantage Package
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tailored for businesses seeking a competitive edge. Provides
                    advanced marketing strategies and optimization services.
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Advanced website setup
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Free logo design
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Social media integration
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      SEO optimization
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Advanced SEO analytics
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500  mr-2" />
                      Monthly reports
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500  mr-2" />
                      No limit on bandwidth
                    </li>
                  </ul>
                  <button
                    onClick={() => router.push("/products/advanced")}
                    className="block w-full py-2 text-center rounded-lg bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-bold hover:bg-yellow-400 transition-all duration-300"
                  >
                    Learn more
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Custom Package</h3>
                  <p className="text-gray-600 mb-4">
                    Tailored to fit your specific business needs. Choose your
                    desired features and services.
                  </p>
                  <br />
                  <ul className="list-disc list-inside mb-4">
                    {/* Add your custom options here */}
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Custom feature
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Custom feature
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Custom feature
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Custom feature
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Custom feature
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Custom feature
                    </li>
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      Custom feature
                    </li>
                  </ul>
                  <button
                    onClick={() => router.push("/products/custom")}
                    className="block w-full py-2 text-center rounded-lg bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-bold hover:bg-yellow-400 transition-all duration-300"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomerCountSection />
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Our Solutions for Small Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-lg p-12 shadow-md">
              <h3 className="text-xl font-bold mb-4">E-commerce Integration</h3>
              <FaShoppingCart
                size={150}
                className="mx-auto mb-4 text-blue-500"
              />
              <p>
                Boost your sales with our e-commerce integration solutions,
                allowing you to purchase websites or services for your business
                effortlessly.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-12 shadow-md">
              <h3 className="text-xl font-bold mb-4">Local SEO Optimization</h3>
              <FaMapMarkerAlt
                size={150}
                className="mx-auto mb-4 text-green-500"
              />
              <p>
                Enhance your visibility in local searches and attract more
                customers from your area with our local SEO optimization
                services.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-12 shadow-md">
              <h3 className="text-xl font-bold mb-4">Social Media Marketing</h3>
              <FaFacebookSquare
                size={150}
                className="mx-auto mb-4 text-indigo-500"
              />
              <p>
                Enhance your brand presence and engagement with potential
                customers through targeted social media marketing campaigns
                tailored for small businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-12 shadow-md">
              <h3 className="text-xl font-bold mb-4">Free hosting</h3>
              <img
                style={{ height: "60%", width: "100%" }}
                src="https://cdn.mos.cms.futurecdn.net/NQ4xeRKDaREYqtUg9n8xGc.jpg"
              />
              <p>
                Experience the convenience of hosting your website for free,
                ensuring it remains accessible online without any additional
                costs or complications.
              </p>
            </div>
            <div className="bg-white rounded-lg p-12  shadow-md">
              <h3 className="text-xl font-bold mb-4">Customizable</h3>
              <img
                style={{ height: "60%", width: "100%" }}
                src="https://assets-global.website-files.com/60f85e33b5a89c61fcd8377d/61c2715b711f0121a48ed747_Designstripe-Customizable%20Graphics-min.png"
              />
              <p>
                Customize your website to reflect your brand identity with our
                wide range of templates, colors, fonts, and layout options.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Mobile-Friendly</h3>
              <img
                style={{ height: "60%", width: "100%" }}
                src="https://www.dmacmedia.ie/blog/wp-content/uploads/2015/06/mobile_friendly_websites.jpg"
              />
              <p>
                Ensure your website looks great on all devices with our
                responsive design, optimized for desktops, tablets, and mobile
                phones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
