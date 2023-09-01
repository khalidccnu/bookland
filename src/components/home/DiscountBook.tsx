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
  discountPercentage: number;
  rating: number;
}

interface DiscountBookProps {
  book: Book;
}

const DiscountBook: React.FC<DiscountBookProps> = ({ book }) => {
  const {
    _id,
    title,
    price,
    discountPrice,
    image,
    discountPercentage,
    rating,
  } = book;

  return (
    <div>
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

export default DiscountBook;
