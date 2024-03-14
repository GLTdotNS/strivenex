import { useState, useEffect } from "react";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    const cookieExpiration = localStorage.getItem("cookieExpiration");

    // Check if the cookie has been accepted and check if it has expired
    if (
      !cookieAccepted ||
      (cookieExpiration && Date.now() > parseInt(cookieExpiration))
    ) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    // Set expiration date to 2 days from now
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 2);

    localStorage.setItem("cookieAccepted", "true");
    localStorage.setItem(
      "cookieExpiration",
      expirationDate.getTime().toString()
    );
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 rounded-r right-0 lg:w-[400px] sm:w-full bg-gray-800 text-white h-[150px] p-4 z-50 animate-slide-in ">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <p className="text-sm">
              This website uses cookies to ensure you get the best experience.
              By continuing to use this site, you agree to the use of cookies.
            </p>
            <button
              onClick={acceptCookies}
              className="bg-transparent absolute bottom-2 left-2 border-2 border-sky-500  hover:bg-blue-600 transition-colors text-white py-4 w-64 px-2 rounded-full text-xs"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
