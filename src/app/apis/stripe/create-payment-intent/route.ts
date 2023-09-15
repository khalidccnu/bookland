import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_STRIPE_SK || "", {
  apiVersion: "2023-08-16",
});

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const amount = Math.round(data.paidBalance * 100);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return NextResponse.json({ secret: paymentIntent.client_secret });
};
