import Banner from "@/components/home/banner";
import Partners from "@/components/home/Partners";
import RecommendedBooks from "@/components/home/recommended-books";
import WhatBookLandOffers from "@/components/home/WhatBookLandOffers";
import BooksOnSale from "@/components/home/books-on-sale";
import PopularBooks from "@/components/home/popular-books";
import Testimonials from "@/components/home/Testimonials";
import FunFacts from "@/components/home/FunFacts";
import Newsletter from "@/components/home/Newsletter";

const Home = () => {
  return (
    <>
      <Banner />
      <Partners />
      <RecommendedBooks />
      <WhatBookLandOffers />
      <BooksOnSale />
      <PopularBooks />
      <Testimonials />
      <FunFacts />
      <Newsletter />
    </>
  );
};

export default Home;
