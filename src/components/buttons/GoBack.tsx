"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

interface GoBackProps {
  className?: string;
}

const GoBack: React.FC<GoBackProps> = ({ className }) => {
  const router = useRouter();

  return (
    <button className={className} onClick={() => router.back()}>
      <FaArrowLeft />
      <span className="mt-0.5">Go back</span>
    </button>
  );
};

export default GoBack;
