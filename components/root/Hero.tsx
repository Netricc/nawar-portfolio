"use client";

import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap.to("#hero-h1", {
      delay: 3.4,
      opacity: 1,
    });
    gsap.to("#hero-h2", {
      delay: 3,
      opacity: 1,
      y: 0,
    });

    gsap.to("#hero-p", {
      delay: 3.2,
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section className="w-full min-h-screen  pt-[94px] pb-[118px] max-lg:pt-[78px] max-lg:pb-[326px] max-sm:pt-[80px] max-sm:pb-[176px]">
      <div className="container-max w-full">
        <h1
          id="hero-h1"
          className="font-dm-sans opacity-0 text-secondary text-[58px] max-sm:text-[36px] font-extralight italic"
        >
          Nawar
        </h1>
        <h2
          id="hero-h2"
          className="font-dm-sans opacity-0 translate-y-4 text-secondary text-[58px] max-sm:text-[36px]"
        >
          Designer & Front-end Developer
        </h2>
        <p
          id="hero-p"
          className="mt-[60px] opacity-0 translate-y-4 text-[20px] font-inter text-gray w-[760px] max-lg:w-[502px] max-sm:w-full"
        >
          I am Front-End Developer with a focus on animation and design,
          crafting interactive and visually stunning digital experiences.
        </p>
      </div>

      <div className="loop-container overflow-hidden whitespace-nowrap mt-[100px] max-lg:mt-[100px] max-sm:mt-[80px]">
        <div className="loop-content inline-block animate-marquee  mr-[x]">
          <h2 className="text-[86px] font-semibold max-sm:text-[65px]">
            I CREATE{" "}
            <span className="text-primary italic">BEAUTIFUL DESIGNS</span> THAT
            MAKE YOUR{" "}
            <span className="text-primary italic">USERS FALL IN LOVE</span>.
          </h2>
        </div>
        <div className="loop-content inline-block animate-marquee">
          <h2 className="text-[86px] font-semibold max-sm:text-[65px]">
            I CREATE{" "}
            <span className="text-primary italic">BEAUTIFUL DESIGNS</span> THAT
            MAKE YOUR{" "}
            <span className="text-primary italic">USERS FALL IN LOVE</span>.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
