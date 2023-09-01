import Image from "next/image";
import imgHighlow from "@/assets/partners/highlow.svg";
import imgBoosst from "@/assets/partners/boosst.svg";
import imgAmajine from "@/assets/partners/amajine.svg";
import imgManthul from "@/assets/partners/manthul.svg";
import imgGlowup from "@/assets/partners/glowup.svg";

const Partners = () => {
  return (
    <section className={`py-16`}>
      <div className="container">
        <ul
          className={`grid grid-cols-3 sm:grid-cols-5 gap-8 max-w-3xl mx-auto`}
        >
          <li data-aos="fade" data-aos-offset="0">
            <Image
              src={imgHighlow.src}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full h-8`}
            />
          </li>
          <li data-aos="fade" data-aos-offset="0">
            <Image
              src={imgBoosst.src}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full h-8`}
            />
          </li>
          <li data-aos="fade" data-aos-offset="0">
            <Image
              src={imgAmajine.src}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full h-8`}
            />
          </li>
          <li data-aos="fade" data-aos-offset="0">
            <Image
              src={imgManthul.src}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full h-8`}
            />
          </li>
          <li data-aos="fade" data-aos-offset="0">
            <Image
              src={imgGlowup.src}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full h-8`}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Partners;
