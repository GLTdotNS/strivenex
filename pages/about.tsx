import React from "react";
import cover from "../styles/strive.png";
import rocket from "../styles/rocket.png";
const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-[1px] p-24">
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

      <section className=" mx-auto bg-gradient-to-b from-blue-100 to-slate-100 mb-24 p-4 lg:w-[70%]">
        <h1 className="text-center text-[24px]">Who we are ?</h1>
        <p className="p-2 mt-2 w-full">
          Welcome to StriveNex, your trusted partner in building powerful online
          presences and maximizing digital success. At StriveNex, we are
          passionate about crafting stunning websites, optimizing search engine
          visibility, and delivering tailored solutions that exceed your
          expectations.
        </p>
        <p className="p-2 mt-2 w-full">
          StriveNex is more than just a web development agency; we are your
          dedicated allies in the digital landscape. With a keen understanding
          of your needs and objectives, we collaborate closely with you to
          create websites that not only look exceptional but also drive results.
          From sleek and user-friendly designs to robust e-commerce platforms,
          we specialize in bringing your vision to life.
        </p>
        <p className="p-2 mt-2 w-full">
          In today&apos;s competitive online environment, visibility is key.
          That&apos;s where our expertise in search engine optimization (SEO)
          comes into play. We utilize cutting-edge strategies and industry best
          practices to enhance your website&apos;s ranking and attract more
          organic traffic. With our proven SEO techniques, your business can
          stand out from the crowd and reach its full potential.
        </p>
        <p className="p-2 mt-2 w-full">
          What sets us apart at StriveNex is our unwavering commitment to
          understanding your unique needs and goals. We take the time to listen,
          learn, and adapt our approach to ensure your satisfaction at every
          step of the process. Your success is our priority, and we are
          dedicated to delivering results that propel your business forward.
        </p>
        <p className="p-2 mt-2 w-full">
          Whether you are a small startup or a large corporation, we have the
          expertise and resources to help you thrive in the digital age. With
          our comprehensive suite of services, including web development, SEO,
          and ongoing support, you can trust StriveNex to be your partner in
          success.
        </p>
        <p className="p-2 mt-2 w-full">
          Join forces with StriveNex today and experience the difference our
          passion, expertise, and dedication can make for your business.
          Let&apos;s elevate your online presence, drive meaningful growth, and
          embark on a journey towards digital success together.
        </p>
      </section>

      <section className="py-12  bg-slate-100  text-gray-500 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl">
            Have questions or want to learn more? Reach out to us!
          </p>
          {/* Contact Form */}
          <form className="mt-8 max-w-md mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="bg-white rounded-md px-4 py-2 outline-none"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="bg-white rounded-md px-4 py-2 outline-none"
                placeholder="Your Email"
              />
            </div>
            <textarea
              className="mt-4 bg-white rounded-md px-4 py-2 outline-none w-full"
              placeholder="Your Message"
              rows={6}
            ></textarea>
            <button className="mt-6 bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
