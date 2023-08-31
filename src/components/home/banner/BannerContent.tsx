import Link from "next/link";
import Image from "next/image";
import imgHighlow from "@/assets/partners/highlow.png";
import imgAmajine from "@/assets/partners/amajine.png";
import imgGlowup from "@/assets/partners/glowup.png";

const BannerContent = () => {
  return (
    <div>
      <div>
        <span className={`text-xs tracking-[0.5em]`}>BACK TO SCHOOL</span>
        <h1 className={`font-bold text-3xl`}>Special 60% Off</h1>
        <h2 className={`font-semibold text-2xl`}>For our student community</h2>
      </div>
      <p className={`mt-3`}>
        Students are eligible for 60% discount on books. Get access more.
      </p>
      <div className={`mt-7 space-x-3`}>
        <Link href="/" className="btn-yellow-indian">
          Learn more
        </Link>
        <Link href="/" className="btn-yellow-indian-outline">
          What they say
        </Link>
      </div>
      <div className={`mt-10`}>
        <span className={`font-medium text-xs text-gray-500`}>Our partner</span>
        <ul className={`flex mt-1 space-x-3`}>
          <li>
            <Image
              src={imgHighlow.src}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full h-4`}
            />
          </li>
          <li>
            <Image
              src={imgAmajine.src}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full h-4`}
            />
          </li>
          <li>
            <Image
              src={imgGlowup.src}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full h-4`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BannerContent;
