"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface NumberCountUpProps {
  start: number;
  end: number;
}

const NumberCountUp: React.FC<NumberCountUpProps> = ({ start, end }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <VisibilitySensor onChange={(visible: boolean) => setVisible(visible)}>
      {isVisible ? (
        <CountUp start={start} end={end} duration={5} />
      ) : (
        <span>...</span>
      )}
    </VisibilitySensor>
  );
};

export default NumberCountUp;
