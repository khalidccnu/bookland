import React from "react";
import Providers from "@/providers";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <Providers>{children}</Providers>
      <Footer />
    </>
  );
};

export default Layout;
