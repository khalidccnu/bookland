"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import lgBookLand from "@/app/lg-bookland.svg";
import Search from "@/components/nav/Search";
import Menu from "@/components/nav/Menu";

const Nav = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenu, setMenu] = useState(false);

  const handleSticky = () => {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);

    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  return (
    <>
      <nav
        className={`${
          isSticky
            ? "sticky top-0 bg-blue-cetacean/70 backdrop-blur-2xl border border-transparent border-b-yellow-indian/10"
            : "bg-blue-cetacean"
        } py-5 z-40`}
      >
        <div className="container">
          <div className={`flex items-center`}>
            <figure className={`mr-auto`}>
              <Link href="/">
                <Image
                  src={lgBookLand.src}
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                  className={`w-32 h-auto`}
                />
              </Link>
            </figure>
            <div className={`hidden md:block mr-3`}>
              <Search />
            </div>
            <div className={`flex space-x-3`}>
              <Link
                href="/signin"
                className={`btn btn-sm bg-jacarta text-white !border-jacarta hover:bg-transparent rounded normal-case`}
              >
                <FaSignInAlt className={`sm:hidden`} />
                <span className={`hidden sm:inline`}>Sign In</span>
              </Link>
              <Link
                href="/signup"
                className={`btn btn-sm bg-white text-blue-cetacean !border-white hover:bg-transparent hover:text-white rounded normal-case`}
              >
                <FaUserPlus className={`sm:hidden`} />
                <span className={`hidden sm:inline`}>Sign Up</span>
              </Link>
              <button
                type="button"
                className={`btn btn-sm bg-transparent text-white hover:bg-jacarta rounded`}
                onClick={() => setMenu(!isMenu)}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Menu isMenu={isMenu} setMenu={setMenu} />
    </>
  );
};

export default Nav;
