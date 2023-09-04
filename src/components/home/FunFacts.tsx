import { FaBook, FaPenAlt, FaUsers } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import NumberCountUp from "@/components/NumberCountUp";

const FunFacts = () => {
  return (
    <section className={`py-16`}>
      <div className="container">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8`}>
          <div className={`text-center`}>
            <div
              className={`flex justify-center items-center text-yellow-indian text-3xl w-16 h-16 mx-auto border-2 border-yellow-indian border-dotted rounded`}
            >
              <FaUsers />
            </div>
            <h3 className={`font-bold text-lg text-blue-cetacean mt-5`}>
              <NumberCountUp start={111} end={130} />
            </h3>
            <h3 className={`font-medium text-gray-500`}>Happy Customers</h3>
          </div>
          <div className={`text-center`}>
            <div
              className={`flex justify-center items-center text-yellow-indian text-3xl w-16 h-16 mx-auto border-2 border-yellow-indian border-dotted rounded`}
            >
              <FaBook />
            </div>
            <h3 className={`font-bold text-lg text-blue-cetacean mt-5`}>
              <NumberCountUp start={78} end={100} />
            </h3>
            <h3 className={`font-medium text-gray-500`}>Book Collections</h3>
          </div>
          <div className={`text-center`}>
            <div
              className={`flex justify-center items-center text-yellow-indian text-3xl w-16 h-16 mx-auto border-2 border-yellow-indian border-dotted rounded`}
            >
              <FaShop />
            </div>
            <h3 className={`font-bold text-lg text-blue-cetacean mt-5`}>
              <NumberCountUp start={133} end={160} />
            </h3>
            <h3 className={`font-medium text-gray-500`}>Our Stores</h3>
          </div>
          <div className={`text-center`}>
            <div
              className={`flex justify-center items-center text-yellow-indian text-3xl w-16 h-16 mx-auto border-2 border-yellow-indian border-dotted rounded`}
            >
              <FaPenAlt />
            </div>
            <h3 className={`font-bold text-lg text-blue-cetacean mt-5`}>
              <NumberCountUp start={37} end={50} />
            </h3>
            <h3 className={`font-medium text-gray-500`}>Famous Writers</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
