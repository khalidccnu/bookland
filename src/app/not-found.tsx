import { Metadata } from "next";
import Image from "next/image";
import img404 from "@/assets/404.svg";
import GoBack from "@/components/buttons/GoBack";
import TakeMeHome from "@/components/buttons/TakeMeHome";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <section>
      <div className="container">
        <div
          className={`flex flex-col sm:grid sm:grid-cols-2 gap-7 justify-center sm:items-center max-w-4xl min-h-screen py-16 mx-auto`}
        >
          <div className="space-y-3">
            <span className="font-medium text-sm text-yellow-indian">404</span>
            <h1 className="font-semibold text-3xl text-blue-cetacean">
              Page not found
            </h1>
            <p className="text-jacarta">
              Sorry, the page you are looking for does not exist.
            </p>
            <div className="flex !mt-5 gap-x-3">
              <GoBack className="btn btn-sm bg-blue-cetacean text-yellow-indian !border-blue-cetacean hover:bg-transparent rounded-lg normal-case" />
              <TakeMeHome className="btn btn-sm bg-transparent text-yellow-indian !border-blue-cetacean hover:bg-blue-cetacean rounded-lg normal-case" />
            </div>
          </div>
          <figure className={`order-first sm:order-none`}>
            <Image
              src={img404.src}
              alt=""
              width="0"
              height="0"
              className={`w-full h-auto`}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
