"use client";

import React from "react";
import { Provider } from "react-redux";
import IKProvider from "@/providers/IKProvider";
import AOSProvider from "@/providers/AOSProvider";
import store from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <IKProvider>
        <Provider store={store}>{children}</Provider>
      </IKProvider>
      <AOSProvider />
    </>
  );
};

export default Providers;
