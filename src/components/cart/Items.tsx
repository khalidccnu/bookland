import React, { useEffect } from "react";
import axios from "axios";
import Item from "@/components/cart/Item";

interface cartItem {
  id: string;
  quantity: number;
}

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

interface ItemsProps {
  cart: cartItem[];
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

const Items: React.FC<ItemsProps> = ({ cart, books, setBooks }) => {
  useEffect(() => {
    if (cart) {
      axios.post(`/apis/books/cart`, cart).then((response) => {
        const cartBooks = [];

        for (let book in cart) {
          const cartItems = response.data.find(
            (data: Book) => data._id === cart[book].id,
          );

          cartBooks.push({ ...cartItems, quantity: cart[book].quantity });
        }

        setBooks(cartBooks);
      });
    }
  }, [cart]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: Book) => (
            <Item key={book._id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
