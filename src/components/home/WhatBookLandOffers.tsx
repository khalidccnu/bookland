import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdFlashOn, MdStar } from "react-icons/md";

const WhatBookLandOffers = () => {
  return (
    <section className={`py-16`}>
      <div className="container">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8`}>
          <div
            className={`text-center`}
            data-aos="fade-up"
            data-aos-offset="-30"
          >
            <div
              className={`flex justify-center items-center bg-yellow-indian/20 text-yellow-indian text-3xl w-16 h-16 mx-auto rounded`}
            >
              <MdFlashOn />
            </div>
            <h3 className={`font-bold text-lg text-blue-cetacean mt-5`}>
              Quick Delivery
            </h3>
          </div>
          <div
            className={`text-center`}
            data-aos="fade-up"
            data-aos-offset="-30"
          >
            <div
              className={`flex justify-center items-center bg-yellow-indian/20 text-yellow-indian text-3xl w-16 h-16 mx-auto rounded`}
            >
              <AiFillSafetyCertificate />
            </div>
            <h3 className={`font-bold text-lg text-blue-cetacean mt-5`}>
              Secure Payment
            </h3>
          </div>
          <div
            className={`text-center`}
            data-aos="fade-up"
            data-aos-offset="-30"
          >
            <div
              className={`flex justify-center items-center bg-yellow-indian/20 text-yellow-indian text-3xl w-16 h-16 mx-auto rounded`}
            >
              <BsHandThumbsUp />
            </div>
            <h3 className={`font-bold text-lg text-blue-cetacean mt-5`}>
              Best Quality
            </h3>
          </div>
          <div
            className={`text-center`}
            data-aos="fade-up"
            data-aos-offset="-30"
          >
            <div
              className={`flex justify-center items-center bg-yellow-indian/20 text-yellow-indian text-3xl w-16 h-16 mx-auto rounded`}
            >
              <MdStar />
            </div>
            <h3 className={`font-bold text-lg text-blue-cetacean mt-5`}>
              Return Guarantee
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatBookLandOffers;
