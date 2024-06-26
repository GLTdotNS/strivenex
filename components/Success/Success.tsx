import Link from "next/link";
import React from "react";

const SuccessMessage = () => {
  return (
    <div className="flex items-center text-xl justify-center mt-24">
      <div className="succes-content flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          width="100"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22" />
          <path
            className="tick"
            fill="none"
            stroke="#FFF"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M14 27l5.917 4.917L34 17"
          />
        </svg>
        <p className="ml-2">Success! Your message has been sent.</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
