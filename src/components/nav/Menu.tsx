"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import menuItems from "@/components/nav/menuItems";

interface MenuProps {
  isMenu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ isMenu, setMenu }) => {
  const pathname = usePathname();
  const items = menuItems();

  return (
    <div
      className={`fixed top-0 right-0 flex items-center justify-center bg-blue-cetacean/70 backdrop-blur-2xl ${
        isMenu ? "w-80" : "w-0"
      } h-full py-16 overflow-x-hidden z-50 transition-[width] duration-500`}
    >
      <div className={`absolute top-5 left-1/2 -translate-x-1/2`}>
        <button
          type="button"
          className={`btn btn-sm bg-transparent text-white hover:bg-jacarta rounded`}
          onClick={() => setMenu(!isMenu)}
        >
          <FaTimes />
        </button>
      </div>
      <div className={`px-10`}>
        <ul
          className={`font-semibold text-lg text-white text-center space-y-3`}
        >
          {items.map(({ name, path }, idx) => {
            const isActive = pathname === path;

            return (
              <li key={idx}>
                <Link
                  href={path}
                  className={`hover:text-yellow-indian transition-colors duration-500 ${
                    isActive ? "text-yellow-indian" : ""
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
