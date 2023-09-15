import React from "react";
import Providers from "@/providers";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>
        <Nav />
        {children}
        <Footer />
      </Providers>
      <UnderConstruction />
    </>
  );
};

export default Layout;
