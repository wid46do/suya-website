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
    <div className="flex justify-end px-0 py-0 md:px-0 md:py-0 mx-0 relative">
      <Image
        src={TimberImage}
        alt="contact us"
        fill
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="py-12 md:py-32 gap-10 flex flex-col w-1/2 z-10 px-20 bg-linear-to-l from-[#222133] to-[#222133]/85 text-white">
        <h1 className="uppercase text-[#E3C692] font-extralight">
          Our Timber <br /> Species
        </h1>
        <div className="mt-6 grid grid-cols-2 gap-x-10">
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
        <p>
          <span className="font-bold">Support Material:</span> <br /> Plywood,
          HMR, MDF, LVL, Veneer (Imported & Local Produce)
        </p>
      </div>
    </div>
  );
};

export default Timber;
