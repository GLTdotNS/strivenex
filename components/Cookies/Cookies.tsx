import { useState, useEffect } from "react";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50  animate-slide-in">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <p>
              We use cookies to enhance your experience. By continuing to visit
              this site you agree to our use of cookies.
            </p>
            <button
              onClick={acceptCookies}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded text-xs"
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
