import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdFlashOn, MdStar } from "react-icons/md";

const WhatBookLandOffers = () => {
  return (
    <section className={`py-16`}>
      <div className="container">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8`}>
          <div className={`text-center`}>
            <div
              className={`flex justify-center items-center bg-yellow-indian/20 text-yellow-indian text-3xl w-16 h-16 mx-auto rounded`}
            >
              <MdFlashOn />
            </div>
            <h2 className={`font-bold text-xl text-blue-cetacean mt-5`}>
              Quick Delivery
            </h2>
          </div>
          <div className={`text-center`}>
            <div
              className={`flex justify-center items-center bg-yellow-indian/20 text-yellow-indian text-3xl w-16 h-16 mx-auto rounded`}
            >
              <AiFillSafetyCertificate />
            </div>
            <h2 className={`font-bold text-xl text-blue-cetacean mt-5`}>
              Secure Payment
            </h2>
          </div>
          <div className={`text-center`}>
            <div
              className={`flex justify-center items-center bg-yellow-indian/20 text-yellow-indian text-3xl w-16 h-16 mx-auto rounded`}
            >
              <BsHandThumbsUp />
            </div>
            <h2 className={`font-bold text-xl text-blue-cetacean mt-5`}>
              Best Quality
            </h2>
          </div>
          <div className={`text-center`}>
            <div
              className={`flex justify-center items-center bg-yellow-indian/20 text-yellow-indian text-3xl w-16 h-16 mx-auto rounded`}
            >
              <MdStar />
            </div>
            <h2 className={`font-bold text-xl text-blue-cetacean mt-5`}>
              Return Guarantee
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatBookLandOffers;
