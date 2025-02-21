"use client";

import Link from "next/link";
import NetricLogo from "./ui/NetricLogo";
import { navLinks } from "@/lib/constants";
import MobileMenu from "./ui/MobileMenu";
const Header = () => {
  return (
    <header className="w-full container-max py-[36px] flex justify-between items-center">
      <Link href="/">
        <NetricLogo width={102} height={30} />
      </Link>

      <nav className="flex flex-row gap-[60px] max-sm:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            className="font-inter text-secondary text-lg hover:text-primary duration-200"
            key={link.href}
          >
            {link.title}
          </Link>
        ))}
      </nav>

      <MobileMenu />
    </header>
  );
};

export default Header;
