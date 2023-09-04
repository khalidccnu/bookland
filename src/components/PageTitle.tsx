import React from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import imgPageTitlePattern from "@/assets/page-title-pattern.png";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div
      className={`relative h-60 bg-cover bg-center bg-no-repeat before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-blue-cetacean before:z-[-1]`}
      style={{ backgroundImage: `url(${imgPageTitlePattern.src})` }}
    >
      <div className="container h-full">
        <div className={`flex flex-col justify-center items-center h-full`}>
          <h2 className={`font-bold text-4xl text-white`}>{title}</h2>
          <ul
            className={`flex items-center font-medium text-gray-300 mt-5 space-x-2`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <MdArrowForwardIos />
            </li>
            <li className={`text-yellow-indian`}>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
