"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Animation = () => {
  const [anmContact, setAnmContact] = useState<null | object>(null);

  useEffect(() => {
    import(`@/assets/contact.json`).then((response) =>
      setAnmContact(response.default),
    );
  }, []);

  return anmContact ? (
    <Lottie className="w-full" animationData={anmContact} loop={true} />
  ) : null;
};

export default Animation;
