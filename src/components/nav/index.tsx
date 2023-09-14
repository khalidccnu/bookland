"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaShoppingBag, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
import lgBookLand from "@/app/lg-bookland.svg";
import Search from "@/components/nav/Search";
import Menu from "@/components/nav/Menu";

const Nav = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const { cart } = useAppSelector((store) => store.cartSlice);

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
                className={`hidden sm:inline-flex btn btn-sm bg-white text-blue-cetacean !border-white hover:bg-transparent hover:text-white rounded normal-case`}
              >
                <FaUserPlus className={`sm:hidden`} />
                <span className={`hidden sm:inline`}>Sign Up</span>
              </Link>
              <Link
                href={`/cart`}
                className={`relative btn btn-sm bg-transparent text-white hover:bg-jacarta rounded`}
              >
                <span
                  className={`absolute top-0 left-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center bg-jacarta w-5 h-5 p-1 rounded-full text-xs`}
                >
                  {cart.length}
                </span>
                <FaShoppingBag />
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
