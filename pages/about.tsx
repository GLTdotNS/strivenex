import React from "react";
import cover from "../styles/strive.png";
import rocket from "../styles/rocket.png";
import { FaCheckCircle } from "react-icons/fa";
const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-[1px] p-24 page fade-in">
      {/* Hero Section */}
      <section>
        {/* Cover Photo */}
        <div className="w-full">
          <img
            src={cover.src}
            alt="StriveNex"
            className="w-[100vw] h-[auto] rounded-lg mt-12"
          />
        </div>
        <section>
          <div className="bg-white text-gray-700 py-8">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
              <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 border-b-2 rounded">
                <p className="ml-2 text-blue-400 uppercase tracking-loose">
                  Our Journey
                </p>
                <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                  The tree of success
                </p>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Success is not a singular achievement; it&apos; s a
                  flourishing tree nourished by determination, perseverance, and
                  unwavering commitment.
                </p>
              </div>
              <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden p-10 h-full">
                    <div
                      style={{ right: "50%" }}
                      className="border-2-2 border-yellow-555 absolute h-full border"
                    ></div>
                    <div
                      style={{ left: "50%" }}
                      className="border-2-2 border-yellow-555 absolute h-full border"
                    ></div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-yellow-300">2022</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Company Established
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                          StriveNex was founded with a vision to empower
                          individuals and businesses to achieve their goals
                          through innovative digital solutions.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1  w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-yellow-300">2023</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          First Major Project
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                          Successfully completed our first major project,
                          marking a significant milestone in our journey.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-yellow-300"> 2024</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Expansion
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                          Expanded our services and team, catering to a wider
                          range of clients and industries.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img className="-mt-24 w-full" src={rocket.src} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="mx-auto mb-24 p-4 lg:w-[70%]">
        <h1 className="text-center text-[24px]">Who we are ?</h1>
        <ul className="list-disc list-inside">
          <li className="p-2 mt-2 w-full flex items-start">
            <span className="text-5xl mr-4">🤗</span>
            <span>
              Welcome to StriveNex, your trusted partner in building powerful
              online presences and maximizing digital success. At StriveNex, we
              understand the unique needs and challenges faced by small
              businesses. Our mission is to provide tailored solutions that help
              small businesses thrive in the digital age.
            </span>
          </li>
          <li className="p-2 mt-2 w-full flex items-start">
            <span className="text-5xl mr-4">🚀</span>
            <span>
              With StriveNex, you&apos;re not just getting a service provider –
              you&apos;re gaining a committed ally dedicated to your small
              business&apos;s success. We collaborate closely with you to create
              websites that not only look exceptional but also drive results,
              empowering your small business to stand out online.
            </span>
          </li>
          <li className="p-2 mt-2 w-full flex items-start">
            <span className="text-5xl mr-4">🔍</span>
            <span>
              In today&apos;s competitive online environment, visibility is
              crucial for small businesses. That&apos;s where our expertise in
              search engine optimization (SEO) comes in. We utilize cutting-edge
              strategies to enhance your website&apos;s visibility and attract
              more organic traffic, helping your small business reach its full
              potential.
            </span>
          </li>
          <li className="p-2 mt-2 w-full flex items-start">
            <span className="text-5xl mr-4">🎯</span>
            <span>
              At StriveNex, we&apos;re committed to understanding your unique
              needs and goals as a small business owner. We take the time to
              listen, learn, and adapt our approach to ensure your satisfaction
              at every step of the process. Your success is our priority, and
              we&apos;re dedicated to delivering results that propel your small
              business forward.
            </span>
          </li>
          <li className="p-2 mt-2 w-full flex items-start">
            <span className="text-5xl mr-4">💼</span>
            <span>
              Whether you&apos;re a fledgling startup or an established small
              business, we have the expertise and resources to help you thrive.
              From web development to SEO and ongoing support, our comprehensive
              suite of services is tailored to meet the unique needs of small
              businesses, empowering your growth and success.
            </span>
          </li>
          <li className="p-2 mt-2 w-full flex items-start">
            <span className="text-5xl mr-4">🤝</span>
            <span>
              Join forces with StriveNex today and experience the difference our
              passion, expertise, and dedication can make for your small
              business. Let&apos;s elevate your online presence, drive
              meaningful growth, and embark on a journey towards digital success
              together.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUsPage;
