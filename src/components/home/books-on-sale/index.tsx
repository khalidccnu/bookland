"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Rings } from "react-loader-spinner";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import useDiscountBooks from "@/hooks/useDiscountBooks";
import BookCard from "@/components/home/books-on-sale/BookCard";

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

const BooksOnSale = () => {
  const { isLoading, discountBooks } = useDiscountBooks();

  return (
    <section className={`py-16`}>
      <div className="container">
        <div className={`flex justify-between mb-10`}>
          <h2 className={`font-bold text-2xl`}>Books on Sale</h2>
          {!isLoading ? (
            <div className="swiper-controller flex items-center space-x-1">
              <div className="swiper-bos-button-prev flex justify-center items-center bg-yellow-indian text-white w-6 h-6 rounded-full cursor-pointer">
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div className="swiper-bos-pagination !w-fit"></div>
              <div className="swiper-bos-button-next flex justify-center items-center bg-yellow-indian text-white w-6 h-6 rounded-full cursor-pointer">
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          ) : null}
        </div>
        {!isLoading ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              enabled: true,
              prevEl: ".swiper-bos-button-prev",
              nextEl: ".swiper-bos-button-next",
              disabledClass: "swiper-bos-button-disabled",
            }}
            pagination={{ el: ".swiper-bos-pagination", clickable: true }}
            slidesPerView={1}
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {discountBooks.map((discountBook: Book) => (
              <SwiperSlide key={discountBook._id}>
                <BookCard book={discountBook} />
              </SwiperSlide>
            ))}
          </Swiper>
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

export default BooksOnSale;
