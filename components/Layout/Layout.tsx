// components/Layout.tsx

import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Getstarted from "../GetStarted/Getstarted";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Getstarted />
      <Footer />
    </div>
  );
};

export default Layout;
