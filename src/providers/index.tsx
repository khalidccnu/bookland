import React from "react";
import IKProvider from "@/providers/IKProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <IKProvider>{children}</IKProvider>;
};

export default Providers;
