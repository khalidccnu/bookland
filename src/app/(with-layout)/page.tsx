import Banner from "@/components/home/banner/Banner";
import Partners from "@/components/home/Partners";
import WhatBookLandOffers from "@/components/home/WhatBookLandOffers";
import BooksOnSale from "@/components/home/BooksOnSale";
import FunFacts from "@/components/home/FunFacts";
import Newsletter from "@/components/Newsletter";

const Home = () => {
  return (
    <>
      <Banner />
      <Partners />
      <WhatBookLandOffers />
      <BooksOnSale />
      <FunFacts />
      <Newsletter />
    </>
  );
};

export default Home;
