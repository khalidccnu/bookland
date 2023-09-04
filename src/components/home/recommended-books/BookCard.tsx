import React from "react";
import { IKImage } from "imagekitio-react";
import { FaCartPlus } from "react-icons/fa";

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
          className={`btn-yellow-indian hover:text-yellow-indian`}
        >
          <FaCartPlus />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
