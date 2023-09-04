import React from "react";
import Link from "next/link";

interface Book {
  _id: string;
  title: string;
  price: number;
  discountPrice: number;
  discount: boolean;
  discountPercentage: number;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { _id, title, price, discountPrice, discount, discountPercentage } =
    book;

  return (
    <div
      className={`group-[.swiper-slide-active]:bg-gray-300 h-full rounded overflow-hidden`}
    >
      <div
        className={`bg-white max-w-xs h-full px-10 py-12 group-[.swiper-slide-active]:mx-auto`}
      >
        <h3 className={`font-bold text-xl`}>{title}</h3>
        <div className={`mt-3 mb-7`}>
          {!discount ? (
            <h5 className={`font-semibold text-lg`}>${price}</h5>
          ) : (
            <div className={`flex items-center space-x-3`}>
              <div className={`flex space-x-1`}>
                <h5 className={`font-semibold text-lg`}>${discountPrice}</h5>
                <span className={`text-xs text-yellow-indian line-through`}>
                  ${price}
                </span>
              </div>
              <span
                className={`bg-gray-300 font-medium text-xs px-2 py-1 rounded`}
              >
                {discountPercentage}% OFF
              </span>
            </div>
          )}
        </div>
        <div className={`flex flex-wrap gap-3`}>
          <button
            type="button"
            className={`btn btn-sm bg-yellow-indian text-white !border-yellow-indian hover:bg-transparent hover:text-yellow-indian rounded normal-case`}
          >
            Buy Now
          </button>
          <Link
            href="/"
            className={`btn btn-sm bg-transparent text-yellow-indian !border-yellow-indian hover:bg-yellow-indian hover:text-white rounded normal-case`}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
