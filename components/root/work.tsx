import Link from "next/link";
import { works } from "@/lib/constants";
import { WorkCard } from "@/components/";
import { WorkProps } from "@/lib/types";
const work = () => {
  return (
    <section className="w-full min-h-screen py-[148px] max-lg:py-[100px] max-sm:py-[60px] container-max">
      <h2 className="font-inter font-medium text-base text-gray">
        RECENT WORK
      </h2>

      <div className="flex mt-[56px] flex-col gap-[68px]">
        {works.slice(0, 3).map((workItem: WorkProps, workIdx) => {
          return <WorkCard key={workIdx} {...workItem} />;
        })}
      </div>

      {works.length > 3 && (
        <div className="w-full flex justify-center">
          <button className="bg-third border-2 border-secondary mt-[66px] py-[15px] px-[30px] text-lg font-medium font-inter text-secondary rounded-full hover:bg-secondary hover:text-third duration-200">
            <Link href={"/work"}>
              All Projects <sup>{works.length}</sup>
            </Link>
          </button>
        </div>
      )}
    </section>
  );
};

export default work;
