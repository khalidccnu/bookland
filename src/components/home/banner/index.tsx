import Image from "next/image";
import imgWave from "@/assets/wave.svg";
import BannerContent from "@/components/home/banner/BannerContent";
import BannerAnimation from "@/components/home/banner/BannerAnimation";

const Banner = () => {
  return (
    <section
      className={`relative bg-blue-cetacean text-white py-16 overflow-x-hidden`}
    >
      <figure className={`absolute top-0 left-0 w-full h-full opacity-[0.02]`}>
        <Image
          src={imgWave.src}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className={`w-full h-full`}
        />
      </figure>
      <div className="relative container">
        <div
          className={`flex flex-col sm:flex-row items-center sm:justify-center`}
        >
          <BannerContent />
          <div
            className={`order-first sm:order-none max-w-sm lg:max-w-lg sm:-mr-24 lg:-mr-32`}
          >
            <BannerAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
