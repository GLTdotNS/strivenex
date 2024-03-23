import React from "react";
import { useRouter } from "next/router";
const Getstarted = () => {
  const router = useRouter();
  return (
    <section className="py-16 bg-gradient-to-r -r-2">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-md mb-8">
          Join hundred of businesses already using our platform to create their
          online presence.
        </p>
        <button
          onClick={() => router.push("/booking")}
          className="bg-white border-2 border-blue-200 text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-4 rounded-full"
        >
          Get started
        </button>
      </div>
    </section>
  );
};

export default Getstarted;
