import React, { useEffect, useState } from "react";
import { IKImage } from "imagekitio-react";
import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCart } from "@/redux/cart/cartSlice";

interface Book {
  _id: string;
  title: string;
  price: number;
  image: {
    path: string;
  };
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { _id, title, price, image } = book;
  const [isCart, setCart] = useState(false);
  const { cart } = useAppSelector((store) => store.cartSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const itemIndex = cart.findIndex((item: { id: string }) => item.id === _id);

    itemIndex !== -1 ? setCart(true) : setCart(false);
  }, [cart, _id]);

  return (
    <div>
      <figure className={`w-full h-80`}>
        <IKImage
          path={image.path}
          transformation={[
            {
              height: "864",
              q: "60",
            },
          ]}
          className={`w-full h-full`}
        />
      </figure>
      <div
        className={`hidden group-[.swiper-slide-active]:block px-3 mt-5 text-center space-y-1`}
      >
        <h3
          className={`font-semibold whitespace-nowrap overflow-ellipsis overflow-x-hidden`}
        >
          {title}
        </h3>
        <span className={`block font-medium text-yellow-indian`}>${price}</span>
        <button
          type="button"
          className={`btn-yellow-indian hover:text-yellow-indian ${
            isCart ? "btn-disabled" : ""
          }`}
          onClick={() => {
            dispatch(addCart({ method: "short", id: _id }));
            toast.success("Item added!");
          }}
        >
          <FaCartPlus />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
