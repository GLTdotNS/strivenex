import React from "react";
import bg from "../../styles/bg.png";
import {
  FaShoppingCart,
  FaMapMarkerAlt,
  FaFacebookSquare,
} from "react-icons/fa";
import CustomerCountSection from "../Customers/Customers";

const Landing = () => {
  return (
    <div className="bg-white-100">
      <header className="bg-cover bg-center text-blue-400 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="max-w-md text-center md:text-left mt-24">
            <h1 className="text-4xl font-bold leading-tight mt-4">
              Scalable and Secure Platform
            </h1>
            <p className="text-lg mb-8">
              Create your own stunning website for your small business.
            </p>
            <ul className="text-left text-black mt-12 mb-12">
              <li className="mb-2">Easy to use and customize</li>
              <li className="mb-2">Scalable for your growing needs</li>
              <li>Secure platform to protect your data</li>
            </ul>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-300 to-orange-400 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-2 px-6 rounded-lg inline-block shadow-md"
            >
              Book free demo
            </a>
          </div>

          <img
            className="mt-2 md:mt-0 md:w-[40%] sm:w-full"
            src={bg.src}
            alt="Platform"
          />
        </div>
      </header>
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
                allowing you to sell your products or services online
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
                Improve your visibility in local searches and attract more
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
                Customize your website to reflect your brand identity with our
                wide range of templates, colors, fonts, and layout options.
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
