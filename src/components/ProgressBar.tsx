"use client";

import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) setProgress((prev) => prev + 10);
  }, [progress]);

  return (
    <div className={`fixed top-0 left-0 bg-white w-full h-0.5 z-50`}>
      <div
        className={`bg-yellow-indian w-0 h-full transition-[width] duration-500`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
