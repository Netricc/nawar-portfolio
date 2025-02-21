import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen  pt-[94px] pb-[118px] max-lg:pt-[78px] max-lg:pb-[326px] max-sm:pt-[80px] max-sm:pb-[176px]">
      <div className="container-max w-full">
        <h1 className="font-dm-sans text-secondary text-[58px] max-sm:text-[36px] font-extralight italic">
          Nawar
        </h1>
        <h2 className="font-dm-sans text-secondary text-[58px] max-sm:text-[36px]">
          Designer & Front-end Developer
        </h2>
        <p className="mt-[60px] text-[20px] font-inter text-gray w-[760px] max-lg:w-[502px] max-sm:w-full">
          I am Front-End Developer with a focus on animation and design,
          crafting interactive and visually stunning digital experiences.
        </p>
      </div>

      <div className="loop relative w-full mt-[250px] max-lg:mt-[230px] max-sm:mt-[180px]">
        <h2
          className={`absolute 
              font-dm-sans text-left left-[100%]
           text-[86px] font-semibold max-sm:text-[65px]`}
        >
          I CREATE{" "}
          <span className="text-primary italic">BEAUTIFUL DESIGNS</span> THAT
          MAKE YOUR{" "}
          <span className="text-primary italic">USERS FALL IN LOVE</span>.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
