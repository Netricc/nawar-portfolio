"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { StaticImageData } from "next/image";
import gsap from "gsap";
import { websiteIcon, designIcon, gameIcon } from "@/assets/icons";

interface WorkProps {
  work: {
    link: string;
    title: string;
    role: string;
    image: StaticImageData;
    category: "Website" | "Design" | "Game";
  };
}

const WorkCard: React.FC<WorkProps> = ({ work }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const imageEl = imageRef.current;
    const cardEl = cardRef.current;

    if (imageEl && cardEl) {
      gsap.set(imageEl, { opacity: 0, scale: 0.9 });

      const handleMouseMove = (event: MouseEvent) => {
        gsap.to(imageEl, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.2,
          ease: "power3.out",
        });
      };

      const handleMouseEnter = (event: MouseEvent) => {
        gsap.set(imageEl, {
          x: event.clientX,
          y: event.clientY,
        });

        gsap.to(imageEl, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });

        window.addEventListener("mousemove", handleMouseMove);
      };

      const handleMouseLeave = () => {
        gsap.to(imageEl, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: "power3.out",
        });

        window.removeEventListener("mousemove", handleMouseMove);
      };

      cardEl.addEventListener("mouseenter", handleMouseEnter);
      cardEl.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        cardEl.removeEventListener("mouseenter", handleMouseEnter);
        cardEl.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <>
      <Link className="z-0" href={work.link}>
        <article
          ref={cardRef}
          className="w-full workCard cursor-pointer border-y-2 border-gray py-[68px] px-[46px] flex justify-between items-center relative"
        >
          <h4 className="font-medium font-dm-sans text-[32px] text-secondary  uppercase">
            {work.title}
          </h4>
          <p className="font-medium text-gray text-lg font-inter">
            {work.role}
          </p>
        </article>
      </Link>
      <div
        ref={imageRef}
        className="fixed pointer-events-none"
        style={{
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      >
        <Image
          width={350}
          height={250}
          className="rounded-lg z-30 border-4 border-primary"
          src={work.image}
          alt={work.title}
        />
        <div className="absolute bg-primary top-[10px] left-[10px] z-30 h-[32px] w-[32px] rounded-full flex justify-center items-center font-semibold">
          <Image
            src={
              work.category === "Website"
                ? websiteIcon
                : work.category === "Design"
                ? designIcon
                : gameIcon
            }
            alt={work.category}
            width={24}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
