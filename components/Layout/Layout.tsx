// components/Layout.tsx

import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Getstarted from "../GetStarted/Getstarted";
import CookieBanner from "../Cookies/Cookies";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <CookieBanner />
      <Navbar />
      {children}
      <Getstarted />
      <Footer />
    </div>
  );
};

export default Layout;
