"use client";

import Image from "next/image";
import TimberImage from "@images/timber.jpg";

const woodList = [
  "Merbau",
  "Mahogany",
  "Ulin",
  "Nyatoh",
  "Rubberwood",
  "Meranti",
  "Sonokeling",
  "Sungkai",
  "Mindi",
  "More options by request",
];

const Timber = () => {
  const firstColumn = woodList.slice(0, 5);
  const secondColumn = woodList.slice(5, 10);

  return (
    <div className="relative flex justify-end overflow-hidden">
      <Image
        src={TimberImage}
        alt="contact us"
        fill
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex w-full flex-col gap-8 bg-[#222133]/88 px-6 py-10 text-white backdrop-blur-[1px] md:w-1/2 md:bg-linear-to-l md:from-[#222133] md:to-[#222133]/85 md:px-20 md:py-32">
        <h1 className="text-3xl uppercase font-extralight text-[#E3C692] md:text-[2.5rem]">
          Our Timber <br /> Species
        </h1>
        <div className="grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-x-10">
          <ul className="list-disc space-y-2 pl-5">
            {firstColumn.map((wood) => (
              <li key={wood}>{wood}</li>
            ))}
          </ul>
          <ul className="list-disc space-y-2 pl-5">
            {secondColumn.map((wood) => (
              <li key={wood}>{wood}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm leading-6 md:text-base">
          <span className="font-bold">Support Material:</span> <br /> Plywood,
          HMR, MDF, LVL, Veneer (Imported & Local Produce)
        </p>
      </div>
    </div>
  );
};

export default Timber;
