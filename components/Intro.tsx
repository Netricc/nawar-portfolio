"use client";

import { introWords } from "@/lib/constants/";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Intro = () => {
  const [showWord, setShowWord] = useState(0);

  useEffect(() => {
    gsap.to("#word", {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    // Delay before starting the word change
    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setShowWord((prev) => {
          if (prev === introWords.length - 1) {
            clearInterval(interval); // Stop the interval when reaching the last word
            return prev; // Keep the last word displayed
          }
          return prev + 1;
        });
      }, 140);

      return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, 500); // Initial delay for the first word (500ms)

    return () => clearTimeout(delayTimeout); // Clear timeout if component unmounts early
  }, []);

  useEffect(() => {
    gsap.to("#intro-section", {
      y: "-100%",
      duration: 0.6,
      delay: 2.6,
      borderRadius: "0% 10% 80% 81% / 10% 0% 27% 29% ",
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section
      id="intro-section"
      className="fixed w-full h-screen bg-secondary z-50 flex items-center justify-center intosection"
    >
      <div className="z-50 flex items-center justify-center text-center">
        <ul className="list-disc w-[600px] h-[600px] rounded-full flex items-center justify-center ">
          <li
            id="word"
            className="text-third max-sm:text-[50px] text-[60px] font-dm-sans  opacity-0"
          >
            {introWords[showWord]}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
