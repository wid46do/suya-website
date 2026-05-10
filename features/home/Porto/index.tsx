"use client";

import Responsive from "@components/Responsive";
import portoData from "../../../dictionaries/home/porto.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Porto = () => {
  const pathName = usePathname();
  const locale = pathName?.split("/")[1] || "en";
  const portfolioHref = `/${locale}/portfolio`;

  return (
    <Responsive
      className="justify-center flex flex-col gap-8 md:gap-20 text-center"
      parentClassName="py-20"
    >
      <h1 className="font-extralight uppercase text-[#222133]">Portfolio</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {portoData.map((item, index) => (
          <Link
            key={index}
            href={`${portfolioHref}?portfolio=${item.portfolioId}`}
            className="group relative overflow-hidden bg-white shadow-md"
            aria-label={`View ${item.name} in portfolio`}
          >
            <img
              src={item.url}
              alt={item.name}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="font-bold text-[12px] md:text-lg mt-2 absolute bottom-3 text-center w-full text-white z-1">
              {item.name}
            </h2>
            <div className="absolute inset-0 bg-linear-to-t from-[#00002F]/28 via-[#00002F]/10 to-transparent sm:from-[#00002F]/36 sm:via-[#00002F]/14 md:from-[#00002F]/45 md:via-[#00002F]/18" />
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Link
          href={portfolioHref}
          className="w-fit cursor-pointer border-4 border-black px-6 py-2"
        >
          See More
        </Link>
      </div>
    </Responsive>
  );
};

export default Porto;
