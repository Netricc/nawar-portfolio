"use client";

import React, { useRef, useContext, useEffect } from "react";
import Image from "next/image";
import { AppContext } from "@/context/store";
import { menuIcon } from "@/assets/icons";
import gsap from "gsap";

const MobileMenu: React.FC = () => {
  const mobileMenuIconRef = useRef<HTMLImageElement>(null);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("MobileMenu must be used within an AppProvider");
  }

  const { setShowMobileNav, showMobileNav } = context;

  const handleBtnClick = () => {
    setShowMobileNav((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (!mobileMenuIconRef.current) return;
    if (showMobileNav) {
      gsap.to(mobileMenuIconRef.current, {
        rotate: 90,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuIconRef.current, {
        rotate: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [showMobileNav]);

  return (
    <button
      className={`max-sm:flex z-40 hidden justify-center items-center ${
        showMobileNav ? "bg-primary" : "bg-secondary"
      } h-[50px] w-[50px] rounded-full hover:bg-primary duration-200 cursor-pointer`}
      onClick={handleBtnClick}
    >
      <Image
        ref={mobileMenuIconRef}
        src={menuIcon}
        alt="menu icon"
        width={25}
        height={25}
      />
    </button>
  );
};

export default MobileMenu;
