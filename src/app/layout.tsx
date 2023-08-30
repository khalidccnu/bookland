import React from "react";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import brandIcon from "./fi-bookland.svg";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefinSans",
});

export const metadata: Metadata = {
  title: "BookLand",
  description:
    "BookLand is the largest online bookstore in Bangladesh. Buy books at lowest price.",
  icons: {
    shortcut: brandIcon.src,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${josefinSans.variable} font-josefinSans flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
