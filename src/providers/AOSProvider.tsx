"use client";

import { useEffect } from "react";
import AOS from "aos";

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({ offset: 30, anchorPlacement: "center-bottom", duration: 3000 });
  }, []);

  return <></>;
};

export default AOSProvider;
