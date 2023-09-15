import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements as StripeElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK || "");

const StripeProvider = ({ children }: { children: React.ReactNode }) => {
  return <StripeElements stripe={stripePromise}>{children}</StripeElements>;
};

export default StripeProvider;
