"use client";

import { useState } from "react";
import { Rings } from "react-loader-spinner";
import { useAppSelector } from "@/redux/hooks";
import Items from "@/components/cart/Items";
import CalculationCard from "@/components/cart/CalculationCard";

interface Book {
  _id: string;
  title: string;
  isbn13: string;
  quantity: number;
  price: number;
  discountPrice: number;
  image: {
    path: string;
  };
  discount: boolean;
}

const Cart = () => {
  const { cart, cartLoading } = useAppSelector((store) => store.cartSlice);
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <section className={`py-16`}>
      <div className="container">
        {!cartLoading ? (
          cart.length ? (
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
              <div className={`md:col-span-2`}>
                <Items cart={cart} books={books} setBooks={setBooks} />
              </div>
              <div>
                <CalculationCard books={books} />
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
