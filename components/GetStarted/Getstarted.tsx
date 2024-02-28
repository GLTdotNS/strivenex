import React from "react";

const Getstarted = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-100 to-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Join thousands of businesses already using our platform to create
          their online presence.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block shadow-md"
        >
          Create Your Website
        </a>
      </div>
    </section>
  );
};

export default Getstarted;
