"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { IKImage } from "imagekitio-react";
import { Rings } from "react-loader-spinner";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import useFeaturedBooks from "@/hooks/useFeaturedBooks";
import BookCard from "@/components/home/recommended-books/BookCard";

interface Book {
  _id: string;
  title: string;
  price: number;
  image: {
    path: string;
  };
}

const RecommendedBooks = () => {
  const { isLoading, featuredBooks } = useFeaturedBooks();

  return (
    <section id="rb" className={`relative bg-gray-100 py-16`}>
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
          Recommended For You
        </h2>
        <div className={`relative max-w-3xl mx-auto`}>
          {!isLoading ? (
            <>
              <Swiper
                modules={[EffectCoverflow, Navigation, Autoplay]}
                effect="coverflow"
                navigation={{
                  enabled: true,
                  prevEl: ".swiper-rb-button-prev",
                  nextEl: ".swiper-rb-button-next",
                }}
                autoplay={{
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {featuredBooks.map((featuredBook: Book) => (
                  <SwiperSlide key={featuredBook._id} className={`group`}>
                    <BookCard book={featuredBook} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-controller">
                <div className="swiper-rb-button-prev absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-yellow-indian text-white w-6 h-6 rounded cursor-pointer z-10">
                  <MdOutlineKeyboardArrowLeft />
                </div>
                <div className="swiper-rb-button-next absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-yellow-indian text-white w-6 h-6 rounded cursor-pointer z-10">
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

export default RecommendedBooks;
