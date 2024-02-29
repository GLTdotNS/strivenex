import React, { useState } from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/router";
import small from "../../styles/small.png";
import { BsArrowRight } from "react-icons/bs";
const SmallBasicPage: React.FC = () => {
  const [accordionState, setAccordionState] = useState<Array<boolean>>(
    new Array(10).fill(false)
  );

  const router = useRouter();
  const toggleAccordion = (index: number) => {
    const updatedAccordionState = [...accordionState];
    updatedAccordionState[index] = !updatedAccordionState[index];
    setAccordionState(updatedAccordionState);
  };

  const faqs = [
    {
      question: "Is there a setup fee for the Basic Starter Pack?",
      answer: "No, there is no setup fee for the Basic Starter Pack.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription to the Basic Starter Pack at any time with no additional fees.",
    },
    {
      question: "Do you offer domain registration services?",
      answer:
        "Yes, we offer domain registration services as part of our Basic Starter Pack.",
    },
    {
      question: "Is technical support included in the package?",
      answer:
        "Yes, technical support is included in the Basic Starter Pack. Our team is available to assist you with any issues or questions.",
    },
    {
      question: "Are there any limitations on storage or bandwidth?",
      answer:
        "Yes, there are limitations on storage or bandwidth for the Basic Starter Pack Bandwidth is capped at 20,000 users.",
    },
    {
      question: "Can I customize the design of my website?",
      answer:
        "No, customization options for the website design are not available with the Basic Starter Pack.",
    },
    {
      question: "Is SSL security included in the package?",
      answer: "Yes, SSL security is included in the Basic Starter Pack.",
    },
    {
      question: "Do you offer email hosting services?",
      answer:
        "Yes, we offer email hosting services as part of our Basic Starter Pack.",
    },
    {
      question: "Can I upgrade to a higher package later?",
      answer:
        "Yes, you can upgrade to a higher package at any time by contacting our support team.",
    },
    {
      question: "How long does it take to set up my website?",
      answer:
        "The setup time for your website depends on various factors, but typically it can be done within a few business days.",
    },
  ];

  return (
    <div className="container mx-auto px-4 p-24">
      {/* Cover Image */}
      <div className="mb-8">
        <img
          src={small.src}
          alt="Small Basic Package Cover"
          className="w-full h-34 rounded-lg"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Basic Starter Pack{" "}
          <button
            onClick={() => router.push("/booking")}
            className="bg-slate-200 text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-6 rounded-full mt-8"
          >
            Book now
          </button>
        </h2>
        <p className="mb-4">
          The Small Basic Package is tailored for small businesses, startups,
          and entrepreneurs seeking a streamlined online presence. Below are the
          key highlights of this package:
        </p>
        <ul className="list-disc list-inside">
          <li className="flex items-center mb-2 relative">
            <FaRegCheckCircle className="text-green-500 absolute left-[-15px] inset-[4px] mr-2 " />
            <span className="ml-2">
              {" "}
              Basic website setup with user-friendly interface.
            </span>
          </li>

          <li className="flex items-center mb-2 relative">
            <FaRegCheckCircle className="text-green-500 absolute left-[-15px] inset-[4px] mr-2 " />
            <span className="ml-2">
              {" "}
              Seamless social media integration to enhance online visibility.
            </span>
          </li>

          <li className="flex items-center mb-2 relative">
            <FaRegCheckCircle className="text-green-500 absolute left-[-15px] inset-[4px] mr-2 " />
            <span className="ml-2">
              {" "}
              Search Engine Optimization (SEO) tools for better search engine
              ranking.
            </span>
          </li>

          <li className="flex items-center mb-2 relative">
            <FaRegCheckCircle className="text-green-500 absolute left-[-15px] inset-[4px] mr-2 " />
            <span className="ml-2">
              {" "}
              Providing bandwidth ranging from 5,000 to 20,000 users.
            </span>
          </li>
        </ul>

        <p className="mt-4">Ideal for:</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Restaurants</li>
          <li>Small construction companies</li>
          <li>Retail stores</li>
          {/* Add more if needed */}
        </ul>
      </div>

      {/* Additional Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-blue-100 p-4 rounded-lg">
          <FaRegCheckCircle className="text-blue-500 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
          <p className="text-sm">
            Ensure your website looks great on all devices with our responsive
            design.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-green-100 p-4 rounded-lg">
          <FaRegTimesCircle className="text-red-500 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Customization Options</h3>
          <p className="text-sm">
            Customize your website with various color schemes, fonts, and layout
            options.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-yellow-100 p-4 rounded-lg">
          <FaRegCheckCircle className="text-yellow-500 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Technical Support</h3>
          <p className="text-sm">
            Get dedicated technical support to assist you with any issues or
            questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 text-gray-700">
        <div className="grid grid-cols-1  md:grid-cols-2  gap-8">
          {/* Essential Starter Pack */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Basic Starter Pack</h3>
              <p className="text-gray-600 mb-4">
                Tailored for startups and small businesses, offering essential
                services to establish a robust online presence. <br />
              </p>
              <br />
              <ul className="list-disc list-inside mb-4">
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
                  Unlimited bandwidth
                </li>
              </ul>
              <button className="block w-full py-2 text-center rounded-lg bg-gray-300 text-gray-700 cursor-not-allowed">
                Learn more
              </button>
            </div>
          </div>

          {/* Standard Growth Package */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Standard Growth Package
              </h3>
              <p className="text-gray-600 mb-4">
                Designed for businesses looking to expand their reach. Offers
                standard marketing and growth-oriented services.
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
                  Unlimited bandwidth
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
      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        {/* FAQ Accordion */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border lg:w-[70%] m-auto border-slate-200 rounded-lg mb-4"
          >
            <button
              className="flex justify-between w-full px-4 py-2 bg-slate-100 text-left text-lg font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span>{accordionState[index] ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                accordionState[index] ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-4 py-2">
                <p className="text-sm">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallBasicPage;
