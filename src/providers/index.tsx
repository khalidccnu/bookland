import React from "react";
import IKProvider from "@/providers/IKProvider";
import AOSProvider from "@/providers/AOSProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <IKProvider>{children}</IKProvider>
      <AOSProvider />
    </>
  );
};

export default Providers;
