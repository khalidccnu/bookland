"use client";

import { useEffect } from "react";
import { Rings } from "react-loader-spinner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCart } from "@/redux/cart/cartThunks";
import Items from "@/components/cart/Items";
import CalculationCard from "@/components/cart/CalculationCard";

const Cart = () => {
  const { cart, cartBooks, cartLoading } = useAppSelector(
    (store) => store.cartSlice,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart) {
      dispatch(getCart({ cart }));
    }
  }, [cart]);

  return (
    <section className={`py-16`}>
      <div className="container">
        {!cartLoading ? (
          cart.length ? (
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
              <div className={`md:col-span-2`}>
                <Items books={cartBooks} />
              </div>
              <div>
                <CalculationCard />
              </div>
            </div>
          ) : (
            <div className="alert max-w-2xl mx-auto rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Your cart is currently empty.</span>
            </div>
          )
        ) : (
          <Rings
            width="50"
            height="50"
            color="#eba552"
            wrapperClass="justify-center"
          />
        )}
      </div>
    </section>
  );
};

export default Cart;
