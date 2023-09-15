import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const getCart = createAsyncThunk(
  "tasks/getCart",
  ({ cart }: { cart: any }) => {
    return axios.post(`/apis/books/cart`, cart).then((response) => {
      const cartBooks = [];

      for (let book in cart) {
        const cartItems = response.data.find(
          (data: Book) => data._id === cart[book].id,
        );

        cartBooks.push({ ...cartItems, quantity: cart[book].quantity });
      }

      const total = cartBooks.reduce(
        (total: number, current: any) =>
          total +
          current.quantity *
            (current.discount ? current.discountPrice : current.price),
        0,
      );
      const tax = total * 0.03;
      const grandTotal = total + tax;

      return {
        cartBooks,
        calculation: {
          total,
          tax,
          grandTotal,
        },
      };
    });
  },
);
