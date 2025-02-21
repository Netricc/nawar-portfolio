"use client";

import { useEffect, useContext, useRef, useState } from "react";
import { AppContext } from "@/context/store";
import gsap from "gsap";
import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { starIcon } from "@/assets/icons";

const MobileNav = () => {
  const context = useContext(AppContext);
  const asideRef = useRef<HTMLDivElement>(null);

  // Set initial state with safe defaults
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  if (!context) {
    throw new Error("MobileMenu must be used within an AppProvider");
  }

  const { showMobileNav, setShowMobileNav } = context;

  // Only update state once the component is mounted (client-side)
  useEffect(() => {
    setScrollY(window.scrollY);
    setWindowWidth(window.innerWidth);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 62 && showMobileNav) {
      setShowMobileNav(false);
    } else if (windowWidth >= 640 && showMobileNav) {
      window.location.reload();
    }
  }, [scrollY, windowWidth, showMobileNav, setShowMobileNav]);

  useEffect(() => {
    if (!asideRef.current) return;
    if (showMobileNav && scrollY <= 62 && windowWidth < 640) {
      gsap.to(asideRef.current, { x: "0%", duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(asideRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [showMobileNav, scrollY, windowWidth]);

  return (
    <aside
      ref={asideRef}
      className="h-screen z-30 max-sm:flex max-sm:w-full justify-center items-center fixed top-0 right-0 translate-x-[100%] w-[80%] bg-secondary"
    >
      <nav className="flex flex-col items-center gap-[112px]">
        {navLinks.map((link) => (
          <Link
            onClick={() => setShowMobileNav(false)}
            className="flex items-center font-dm-sans text-[40px] text-third hover:text-primary duration-200"
            key={link.href}
            href={link.href}
          >
            <Image
              src={starIcon}
              alt="star icon"
              width={30}
              height={30}
              className="w-auto h-auto"
              style={{ width: "auto", height: "auto" }}
            />
            <span className="ml-[22px]">{link.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default MobileNav;
