import { useState, useEffect } from "react";

const PopupBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isClosed = sessionStorage.getItem("popupClosed");
      if (!isClosed) {
        setIsOpen(true);
      }
    }, 10000); // Delay for 10 seconds

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("popupClosed", "true");
  };

  return (
    <div
      className={` fixed left-0 bottom-[200px] z-50 bg-yellow-200 border border-yellow-500 text-yellow-900 px-4 py-2 rounded-lg transform transition-transform ${
        isOpen ? "translate-x-0 popUp" : "-translate-x-full"
      }`}
    >
      {isOpen && (
        <>
          <div className="flex items-center justify-between">
            <p className=" font-bold text-lg">Limited Time Offer!</p>
            <button onClick={handleClose} className=" hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="">
            <p>Special Offer!</p>
            <p className="text-sm">Get 20% off on your first purchase.</p>
            <button className="w-full border-2 border-gray-800 hover:bg-white hover- rounded-full p-2 mt-2 ">
              Get started
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PopupBanner;
