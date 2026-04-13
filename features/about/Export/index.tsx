import Responsive from "@components/Responsive";
import Image from "next/image";
import { HiMapPin } from "react-icons/hi2";

const exportMarkets = [
  { name: "USA", left: "18%", top: "39%" },
  { name: "CHINA", left: "66%", top: "39%" },
  { name: "KOREA", left: "79%", top: "39%" },
  { name: "AUSTRALIA", left: "79%", top: "70%" },
  { name: "NEW ZEALAND", left: "87%", top: "82%" },
];

const Export = () => {
  return (
    <Responsive className="bg-white text-center">
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-3">
          <h1 className="font-extralight uppercase text-[#222133]">
            Our Export
          </h1>
        </div>

        <div className="relative mx-auto aspect-video w-full max-w-6xl">
          <Image
            src="/images/world2.svg"
            alt="World export map"
            fill
            className="object-contain"
          />

          {/* {exportMarkets.map((market) => (
            <div
              key={market.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: market.left, top: market.top }}
            >
              <div className="flex items-center gap-1 text-[#222133]">
                <HiMapPin className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.12em] md:text-sm">
                  {market.name}
                </span>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </Responsive>
  );
};

export default Export;
