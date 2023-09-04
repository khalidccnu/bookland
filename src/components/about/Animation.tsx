"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Animation = () => {
  const [anmAbout, setAnmAbout] = useState<null | object>(null);

  useEffect(() => {
    import(`@/assets/about.json`).then((response) =>
      setAnmAbout(response.default),
    );
  }, []);

  return anmAbout ? (
    <Lottie className="w-full" animationData={anmAbout} loop={true} />
  ) : null;
};

export default Animation;
