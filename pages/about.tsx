// pages/about.tsx

import React from "react";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn about our company and team." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-800">
            Insert mission statement here.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2 text-gray-800">Value 1</li>
            <li className="mb-2 text-gray-800">Value 2</li>
            <li className="mb-2 text-gray-800">Value 3</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Team members here */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700">Position: Developer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">Position: Designer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
              <p className="text-gray-700">Position: Marketing</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default About;
