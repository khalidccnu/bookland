"use client";

import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import IKProvider from "@/providers/IKProvider";
import StripeProvider from "@/providers/StripeProvider";
import AOSProvider from "@/providers/AOSProvider";
import CartProvider from "@/providers/CartProvider";
import store from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <IKProvider>
        <StripeProvider>{children}</StripeProvider>
      </IKProvider>
      <AOSProvider />
      <CartProvider />
      <Toaster />
    </Provider>
  );
};

export default Providers;
