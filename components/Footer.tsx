"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary w-full min-h-screen">
      <div className="w-full h-full  text-third pt-[80px] max-lg:pt-[34px] relative">
        <div className="container-max w-full">
          <h2 className="text-[68px] text-third font-semibold font-dm-sans">
            Let&apos;s work <br /> Together
          </h2>

          <div className="hr w-full h-[2px] bg-gray mt-[40px]"></div>
          <div className="w-full flex justify-between items-center gap-[50px] flex-wrap max-sm:pt-[40px]">
            <button className="py-[15px] px-[26px] text-third border-2 border-third text-[20px] font-inter font-medium rounded-[38px]  hover:border-primary duration-200">
              <Link href={"mailto:nawabsn911@gmail.com"}>
                nawabsn911@gmail.com
              </Link>
            </button>
            <button
              id="footer-btn"
              className="w-[170px] mt-[40px] hover:bg-[#173B98] top bg-primary duration-200 rounded-full h-[170px] shadow-inner flex justify-center items-center text-third text-[16px] font-inter font-medium"
            >
              <Link href={"/contact"}>Get In Touch</Link>
            </button>
          </div>
        </div>

        <div className="loop relative w-full mt-[100px] max-lg:mt-[230px] max-sm:mt-[180px]">
          <h2
            className={`absolute 
              font-dm-sans text-left left-[100%]
           text-[86px] font-semibold max-sm:text-[65px]`}
          >
            LET&apos;S BRING YOUR IDEAS{" "}
            <span className="text-primary italic">TO LIFE</span> !
          </h2>
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
