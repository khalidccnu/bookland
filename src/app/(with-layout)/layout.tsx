import React from "react";
import Nav from "@/components/nav/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
