"use client";

import Link from "next/link";
import { socialMediaLinks } from "@/lib/constants/";

const Footer = () => {
  return (
    <footer className="bg-secondary footer w-full min-h-screen">
      <div className="w-full h-full  text-third pt-[80px] max-lg:pt-[34px] relative">
        <div className="container-max w-full">
          <h2 className="text-[68px] max-lg:text-[42px] max-sm:text-[36px] text-third font-semibold font-dm-sans">
            Let&apos;s work <br /> Together
          </h2>

          <div className="hr w-full h-[2px] bg-gray mt-[40px]"></div>
          <div className="w-full flex justify-between items-center gap-[50px] flex-wrap max-sm:pt-[40px] max-sm:justify-center">
            <button className="py-[15px] px-[26px] text-third border-2 border-third text-[20px] max-sm:text-lg font-inter font-medium rounded-[38px]  hover:border-primary duration-200">
              <Link href={"mailto:nawabsn911@gmail.com"}>
                nawabsn911@gmail.com
              </Link>
            </button>
            <button
              id="footer-btn"
              className="w-[170px] mt-[40px] hover:bg-[#173B98] top bg-primary duration-200 rounded-full h-[170px] max-sm:h-[150px] max-sm:w-[150px] shadow-inner flex justify-center items-center text-third text-[16px] font-inter font-medium"
            >
              <Link href={"/contact"}>Get In Touch</Link>
            </button>
          </div>
        </div>

        <div className="loop-container overflow-hidden whitespace-nowrap mt-[100px] max-lg:mt-[100px] max-sm:mt-[80px]">
          <div className="loop-content inline-block animate-marquee">
            <h2 className="text-[86px] font-semibold max-sm:text-[65px]">
              LET&apos;S BRING YOUR IDEAS{" "}
              <span className="text-primary italic">TO LIFE</span> !
            </h2>
          </div>
          <div className="loop-content inline-block animate-marquee">
            <h2 className="text-[86px] font-semibold max-sm:text-[65px]">
              LET&apos;S BRING YOUR IDEAS{" "}
              <span className="text-primary italic">TO LIFE</span> !
            </h2>
          </div>
        </div>

        <div className="w-full max-md:flex-col max-md:gap-[60px] py-[40px] container-max flex justify-between items-center">
          <p className="font-inter text-lg max-sm:text-base font-medium text-third">
            {new Date().getFullYear()} © Edition
          </p>

          <div className="flex items-center gap-[52px] max-lg:gap-[38px] max-lg:text-base max-sm:gap-[20px]">
            {socialMediaLinks.map((socialLink) => {
              return (
                <Link
                  className="text-lg max-sm:text-base text-third font-medium font-inter hover:text-primary duration-200 "
                  href={socialLink.href}
                  target="_blank"
                  key={socialLink.href}
                >
                  {socialLink.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
