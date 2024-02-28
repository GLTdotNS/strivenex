import React, { useState, useEffect } from "react";

const CustomerCountSection = () => {
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    const targetCount = 150; // Your target customer count

    const updateCount = () => {
      let currentCount = 0;
      const increment = Math.ceil(targetCount / 100); // Adjust the increment for faster or slower counting
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
          currentCount = targetCount;
          clearInterval(timer);
        }
        setCustomerCount(currentCount);
      }, 10); // Adjust the interval for faster or slower counting
    };

    updateCount();
  }, []);

  return (
    <section className="py-16 bg-slate-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Trusted by {customerCount}+ Customers
        </h2>
        <p className="text-lg">
          We are proud to have served over {customerCount} small businesses and
          counting. Let us help you grow your business too!
        </p>
      </div>
    </section>
  );
};

export default CustomerCountSection;
