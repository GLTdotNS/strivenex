import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import bg from "../../styles/bg.png";
import vercel from "../../styles/Vercel_1.png";
import three from "../../styles/ThreeJS_1.png";
import sanity from "../../styles/Sanity_io_1.png";
import stripe from "../../styles/stripe.png";
import shopify from "../../styles/shopify_1.png";
import figma from "../../styles/Figma_1.png";
import adobe from "../../styles/adobe.png";
import tailwind from "../../styles/Tailwind_1.png";
import hosting from "../../styles/hosting.jpg";
import mobile from "../../styles/mobile.jpg";
import custom from "../../styles/custom.png";
import mui from "../../styles/MUI_1.png";
import next from "../../styles/nextjs.png";
import Image from "next/image";
import CustomerCountSection from "../Customers/Customers";

const Landing = () => {
  const router = useRouter();

  return (
    <div className="bg-white">
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
            <button
              onClick={() => router.push("/booking")}
              className="hover-2 font-bold py-2 px-6 rounded-full mt-8 flex items-center transition duration-300 ease-in-out"
            >
              Click here to unlock your digital future
            </button>
          </div>

          <Image
            width={500}
            height={500}
            className="mt-12 md:mt-12 md:w-[40%] sm:w-full"
            src={bg.src}
            alt="Platform"
          />
        </div>
      </header>

      <div className="bg-slate-50 flex items-center justify-center">
        <div className=" py-12 px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl text-gray-700 lg:text-6xl font-bold mb-4">
            Cutting Edge Solutions for Your Business
          </h1>
          <p className="text-lg text-gray-600 md:text-xl lg:text-2xl">
            Empowering small businesses with innovative technology and
            strategies.
          </p>

          <CustomerCountSection />
          <button
            onClick={() => router.push("/booking")}
            className="hover-2 p-2 border-2 text-lg w-64  border-blue-100 text-gray-700 hover:bg-blue-200  rounded-full text-center"
          >
            Have a question ?
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row sm:flex-col items-center">
        <div className="flex flex-wrap justify-center lg:justify-start lg:mr-4">
          <Image
            width={500}
            height={500}
            src={next.src}
            alt="Technology 1"
            className="w-24 h-24 rounded-full mb-2 mx-2"
          />
          <Image
            width={500}
            height={500}
            src={three.src}
            alt="Technology 2"
            className="w-24 h-24 rounded-full mb-2 mx-2"
          />
          <Image
            width={500}
            height={500}
            src={vercel.src}
            alt="Technology 3"
            className="w-24 h-24 rounded-full mb-2 mx-2"
          />
          <Image
            width={500}
            height={500}
            src={sanity.src}
            alt="Technology 4"
            className="w-36 h-34 rounded-full mb-2 mx-2"
          />
          <Image
            width={500}
            height={500}
            src={stripe.src}
            alt="Technology 10"
            className="w-24 h-24 rounded-full mb-2 mx-2"
          />
          <Image
            width={500}
            height={500}
            src={shopify.src}
            alt="Technology 5"
            className="w-40 h- rounded-full mb-2 mx-2"
          />
          <Image
            width={200}
            height={200}
            src={figma.src}
            alt="Technology 6"
            className="w-34 h-24 rounded-full mb-2 mx-2"
          />
          <Image
            width={200}
            height={200}
            src={adobe.src}
            alt="Technology 7"
            className="w-34 h-24 rounded-full mb-2 mx-2"
          />
          <Image
            width={500}
            height={500}
            src={tailwind.src}
            alt="Technology 8"
            className="w-24 h-24 rounded-full mb-2 mx-2"
          />
          <Image
            width={500}
            height={500}
            src={mui.src}
            alt="Technology 9"
            className="w-24 h-24 rounded-full mb-2 mx-2"
          />
        </div>

        <div className="flex flex-col lg:max-w-md">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
            Empowering Your Business with Cutting-Edge Technologies
          </h2>
          <p className="text-lg text-center lg:text-left">
            We utilize a wide range of innovative technologies to build robust
            and scalable solutions that meet the unique needs of your business.
            From frontend frameworks to backend databases, weve got you covered.
          </p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-sm bg-white border-t-4 border-blue-500 flex flex-col justify-center items-center">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-blue-500">
                  Free Hosting
                </h3>
                <Image
                  width={500}
                  height={500}
                  className=" w-auto object-cover"
                  src={hosting.src}
                  alt="Free Hosting"
                />
                <p className="text-gray-800 mt-4">
                  Experience the convenience of hosting your website for free,
                  ensuring it remains accessible online without any additional
                  costs or complications.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm bg-white border-t-4 border-yellow-500 flex flex-col justify-center items-center">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-yellow-500">
                  Customizable
                </h3>
                <Image
                  width={500}
                  height={500}
                  className=" w-auto object-cover"
                  src={custom.src}
                  alt="Customizable"
                />
                <p className="text-gray-800 mt-4">
                  Customize your website to reflect your brand identity with our
                  wide range of templates, colors, fonts, and layout options.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm bg-white border-t-4 border-green-500 flex flex-col justify-center items-center">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-green-500">
                  Mobile-Friendly
                </h3>
                <Image
                  width={500}
                  height={500}
                  className=" w-full object-cover"
                  src={mobile.src}
                  alt="Mobile-Friendly"
                />
                <p className="text-gray-800 mt-4">
                  Ensure your website looks great on all devices with our
                  responsive design, optimized for desktops, tablets, and mobile
                  phones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
