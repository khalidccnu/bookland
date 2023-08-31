"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const BannerAnimation = () => {
  const [anmReader, setAnmReader] = useState<null | object>(null);

  useEffect(() => {
    import(`@/assets/reader.json`).then((response) =>
      setAnmReader(response.default),
    );
  }, []);

  return anmReader ? (
    <Lottie className="w-full" animationData={anmReader} loop={true} />
  ) : null;
};

export default BannerAnimation;
