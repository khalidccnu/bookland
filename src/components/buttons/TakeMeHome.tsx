"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

interface TakeMeHomeProps {
  className?: string;
}

const TakeMeHome: React.FC<TakeMeHomeProps> = ({ className }) => {
  const router = useRouter();

  return (
    <button className={className} onClick={() => router.push("/")}>
      <FaHome />
      <span className="mt-0.5">Take me home</span>
    </button>
  );
};

export default TakeMeHome;
