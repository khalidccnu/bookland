import React from "react";
import Item from "@/components/cart/Item";

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
  books: Book[];
}

const Items: React.FC<ItemsProps> = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th className={`w-36`}>Quantity</th>
            <th className={`w-36`}>Total</th>
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
