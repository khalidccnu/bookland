import React from "react";
import { IKImage } from "imagekitio-react";
import { FaStar } from "react-icons/fa";

interface Book {
  _id: string;
  title: string;
  price: number;
  discountPrice: number;
  image: {
    path: string;
  };
  discount: boolean;
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
    discount,
    discountPercentage,
    rating,
  } = book;

  return (
    <div>
      <figure className={`relative w-full h-80`}>
        {discount ? (
          <div
            className={`absolute top-4 left-[0.05rem] bg-yellow-indian text-white px-3 py-1 rounded-r`}
          >
            <span>{discountPercentage}</span>
            <span>%</span>
          </div>
        ) : null}
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
          <span className={`font-medium`}>
            ${discount ? discountPrice : price}
          </span>
          {discount ? (
            <span className={`text-xs text-gray-500 line-through`}>
              ${price}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
