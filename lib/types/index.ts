export type TContextValue = {
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

import { StaticImageData } from "next/image";

export type WorkProps = {
  link: string;
  title: string;
  role: string;
  image: StaticImageData;
  category: "Website" | "Design" | "Game";
};
