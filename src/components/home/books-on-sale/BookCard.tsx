import React, { useEffect, useState } from "react";
import { IKImage } from "imagekitio-react";
import toast from "react-hot-toast";
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCart, removeCart } from "@/redux/cart/cartSlice";

interface Book {
  _id: string;
  title: string;
  price: number;
  discountPrice: number;
  image: {
    path: string;
  };
  discountPercentage: number;
  rating: number;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const {
    _id,
    title,
    price,
    discountPrice,
    image,
    discountPercentage,
    rating,
  } = book;
  const [isCart, setCart] = useState(false);
  const { cart } = useAppSelector((store) => store.cartSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const itemIndex = cart.findIndex((item: { id: string }) => item.id === _id);

    itemIndex !== -1 ? setCart(true) : setCart(false);
  }, [cart, _id]);

  return (
    <div className={`group`}>
      <figure className={`relative w-full h-80`}>
        <div
          className={`absolute top-4 left-[0.05rem] bg-yellow-indian text-white px-3 py-1 rounded-r`}
        >
          <span>{discountPercentage}</span>
          <span>%</span>
        </div>
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
        <div
          className={`absolute left-0 top-0 flex justify-center items-center w-full h-0 group-hover:h-full bg-gray-500/50 text-3xl transition-[height] duration-500 overflow-hidden`}
        >
          <div
            className={`flex justify-center items-center bg-white w-12 h-12 p-3 text-blue-cetacean hover:text-yellow-indian rounded-full transition-colors duration-500`}
          >
            {isCart ? (
              <BsCartDashFill
                className={`cursor-pointer`}
                onClick={() => {
                  dispatch(removeCart({ method: "short", id: _id }));
                  toast.success("Item removed!");
                }}
              />
            ) : (
              <BsCartPlusFill
                className={`cursor-pointer`}
                onClick={() => {
                  dispatch(addCart({ method: "short", id: _id }));
                  toast.success("Item added!");
                }}
              />
            )}
          </div>
        </div>
      </figure>
      <h3
        className={`font-semibold text-lg mt-3 mb-1 whitespace-nowrap overflow-ellipsis overflow-x-hidden`}
      >
        {title}
      </h3>
      <div className={`flex justify-between`}>
        <div className="flex text-yellow-indian space-x-1">
          <FaStar />
          <span className={`-mt-0.5`}>{rating}</span>
        </div>
        <div className={`space-x-1`}>
          <span className={`font-medium`}>${discountPrice}</span>
          <span className={`text-xs text-gray-500 line-through`}>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
