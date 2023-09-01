"use client";

import React from "react";
import CountUp from "react-countup";

interface NumberCountUpProps {
  start: number;
  end: number;
}

const NumberCountUp: React.FC<NumberCountUpProps> = ({ start, end }) => {
  return (
    <CountUp start={start} end={end} duration={5} enableScrollSpy={true} />
  );
};

export default NumberCountUp;
