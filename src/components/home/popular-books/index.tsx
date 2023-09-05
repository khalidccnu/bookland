"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IKImage } from "imagekitio-react";
import { Rings } from "react-loader-spinner";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useGetPopularBooksQuery } from "@/redux/books/booksAPI";
import BookCard from "@/components/home/popular-books/BookCard";

interface Book {
  _id: string;
  title: string;
  price: number;
  discountPrice: number;
  discount: boolean;
  discountPercentage: number;
}

const PopularBooks = () => {
  const { isLoading, data: popularBooks } = useGetPopularBooksQuery();

  return (
    <section className={`relative bg-gray-100 py-16`}>
      <figure className={`absolute top-0 left-0 w-full h-full opacity-5`}>
        <IKImage
          path="/bookland/pattern/random-square-halftone.png"
          transformation={[
            {
              q: "30",
            },
          ]}
          className={`w-full h-full`}
        />
      </figure>
      <div className="relative container">
        <h2 className={`font-bold text-2xl text-center mb-10`}>
          Popular For You
        </h2>
        <div className={`max-w-3xl mx-auto`}>
          {!isLoading ? (
            <>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  enabled: true,
                  prevEl: ".swiper-pb-button-prev",
                  nextEl: ".swiper-pb-button-next",
                }}
                pagination={{ el: ".swiper-pb-pagination", clickable: true }}
                loop={true}
                slidesPerView="auto"
                spaceBetween={50}
              >
                {popularBooks?.map((popularBook: Book) => (
                  <SwiperSlide
                    key={popularBook._id}
                    className={`group !w-4/5 h-auto`}
                  >
                    <BookCard book={popularBook} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-controller flex justify-center items-center mt-5 space-x-1">
                <div className="swiper-pb-button-prev flex justify-center items-center bg-yellow-indian text-white w-6 h-6 rounded-full cursor-pointer">
                  <MdOutlineKeyboardArrowLeft />
                </div>
                <div className="swiper-pb-pagination !w-fit"></div>
                <div className="swiper-pb-button-next flex justify-center items-center bg-yellow-indian text-white w-6 h-6 rounded-full cursor-pointer">
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
            </>
          ) : (
            <Rings
              width="50"
              height="50"
              color="#eba552"
              wrapperClass="justify-center"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
