import { asomaWork, hotankWork } from "@/assets/images";

export const navLinks = [
  { title: "About", href: "/about" },
  { title: "Work", href: "/work" },
  { title: "Contact", href: "/contact" },
];

export const introWords = [
  "Hello",
  "Bonjour",
  "привет",
  "Óla",
  "halo",
  "Marhaba",
  "Мэндээ",
  "Mba'éichapa",
  "Salem",
  "сайн уу",
  "Hola",
  "السلام عليكم",
];

export const socialMediaLinks = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@netric-master",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/netric_master/",
  },
  {
    title: "X",
    href: "https://x.com/netricMaster",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/nawar-alsafadi/",
  },
];

import { WorkProps } from "@/lib/types/";

export const works: WorkProps[] = [
  {
    title: "Asoma",
    link: "https://asoma.netlify.app",
    image: asomaWork,
    role: "Design & Development",
    category: "Website",
  },
  {
    title: "HoTank",
    link: "https://nawar-hotank.netlify.app",
    image: hotankWork,
    role: "Development",
    category: "Website",
  },
];
