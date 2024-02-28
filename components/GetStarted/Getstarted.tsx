import React from "react";
import { useRouter } from "next/router";
const Getstarted = () => {
  const router = useRouter();
  return (
    <section className="py-16 bg-gradient-to-r from-slate-100 to-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Join thousands of businesses already using our platform to create
          their online presence.
        </p>
        <button
          onClick={() => router.push("/booking")}
          className="bg-white text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-6 rounded-full mt-8"
        >
          Book your website
        </button>
      </div>
    </section>
  );
};

export default Getstarted;
