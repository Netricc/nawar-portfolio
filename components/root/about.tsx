import Link from "next/link";

const about = () => {
  return (
    <section className="w-full bg-primary">
      <div className="w-full h-full container-max py-[82px]">
        <div className="w-full flex max-lg:flex-col max-lg:justify-start max-lg:gap-[22px] items-start justify-between">
          <h2 className="text-[36px] text-third max-sm:text-[26px] w-[608px] font-semibold font-dm-sans max-sm:w-full">
            “I transform your ideas into reality, creating innovative solutions
            that make a positive impact on the world and improve lives”.
          </h2>
          <p className="font-inter text-base font-normal text-third w-[315px] max-lg:w-[463px] max-sm:w-full">
            I can design and develop with excellence—why not take it a step
            further? I can handle your entire project, from design to
            development and deployment. Imagine the efficiency of having it all
            done by one person instead of two or three teams.
          </p>
        </div>
        <button className="bg-third mt-[66px] py-[15px] px-[30px] text-lg font-medium font-inter text-secondary rounded-full hover:bg-secondary hover:text-third duration-200">
          <Link href={"/about"}>About Me</Link>
        </button>
      </div>
    </section>
  );
};

export default about;
