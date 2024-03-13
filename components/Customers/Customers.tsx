import React from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const StepsSection: React.FC = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [router.isReady]);
  return (
    <div className="mx-auto mb-8 w-full border-b text-gray-700">
      <div className="flex flex-col border-t">
        <div className="lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl self-start">
          <aside className="my-2 flex flex-col px-0 py-2 md:flex-row md:px-6 md:py-10 lg:py-12 xl:py-16">
            <div className="overflow-visible md:basis-1/2">
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="flex flex-row ">
                  <h2 className="text-4xl hover-3 slide-in-from-left">
                    {" "}
                    Web Applications
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:basis-1/2 md:px-5">
              <div style={{ opacity: 1, transform: "none" }}>
                <p>
                  Our bespoke web applications are tailored to adapt to your
                  operational needs and scale with your business. Ideal for
                  businesses with complex and unique models, ensuring high
                  performance and scalability
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Second Step */}
      <div className="flex flex-col border-t">
        <div className="lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl self-center">
          <aside className="my-2 flex flex-col px-0 py-2 md:flex-row md:px-6 md:py-10 lg:py-12 xl:py-16">
            <div className="overflow-visible md:basis-1/2 ">
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="flex flex-row ">
                  <h2 className="text-4xl  hover-3 ">E-commerce Solutions</h2>
                </div>
              </div>
            </div>
            <div className="md:basis-1/2 md:px-5">
              <div style={{ opacity: 1, transform: "none" }}>
                <p>
                  Create fast and captivating online shops tailored for sales
                  and user interactions. Our integration of Sanity with Shopify
                  offers enhanced features and flexibility for your retail and
                  marketing teams.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Third Step */}
      <div className="flex flex-col border-t">
        <div className="lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl self-end">
          <aside className="my-2 flex flex-col px-0 py-2 md:flex-row md:px-6 md:py-10 lg:py-12 xl:py-16">
            <div className="overflow-visible md:basis-1/2">
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="flex flex-row ">
                  <h2 className="text-4xl  hover-3 ">
                    Easy-to-Manage Websites
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:basis-1/2 md:px-5">
              <div style={{ opacity: 1, transform: "none" }}>
                <p>
                  We specialize in building websites that are easy to manage for
                  your content managers and marketing team. Our full headless
                  approach allows seamless content reuse across different
                  platforms, making it ideal for handling large amounts of
                  content
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
