"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="w-full flex h-screen justify-center items-center bg-third">
      <div>
        <div className="text-center">
          <h2 className="text-[26px] max-sm:text-[22px] text-primary font-semibold font-dm-sans">
            Page Not Found
          </h2>
          <h3 className="font-dm-sans font-black text-secondary text-[200px] max-lg:text-[180px] max-sm:text-[150px] pt-[20px]">
            404
          </h3>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="bg-primary py-[15px] px-[30px] text-lg font-medium font-inter text-third rounded-full hover:bg-[#173B98]">
            <Link href={"/"}>Home</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
