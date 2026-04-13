"use client";

import Responsive from "@components/Responsive";
import TamanDayu from "@images/taman_dayu.png";
import Image1 from "@images/works/image1.png";
import Image2 from "@images/works/image2.png";
import Image3 from "@images/works/image3.png";
import Image4 from "@images/works/image4.png";
import Image5 from "@images/works/image5.png";
import Image6 from "@images/works/image6.png";
import Image7 from "@images/works/image7.png";
import Image from "next/image";

const portoData = [
  { name: "Taman Dayu", url: TamanDayu },
  { name: "Image 1", url: Image1 },
  { name: "Image 2", url: Image2 },
  { name: "Image 3", url: Image3 },
  { name: "Image 4", url: Image4 },
  { name: "Image 5", url: Image5 },
  { name: "Image 6", url: Image6 },
  { name: "Image 7", url: Image7 },
];

const Works = () => {
  return (
    <Responsive
      className="justify-center flex flex-col gap-8 md:gap-20 text-center"
      parentClassName="py-20"
    >
      <h1 className="font-extralight uppercase text-[#222133]">Our Works</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {portoData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md relative overflow-hidden"
          >
            <Image src={item.url} alt={item.name} className="w-full h-auto" />
            <h2 className="font-bold text-[12px] md:text-lg mt-2 absolute bottom-3 text-center w-full text-white z-1">
              {item.name}
            </h2>
            <div className="absolute inset-0 bg-linear-to-t from-[#00002F]/28 via-[#00002F]/10 to-transparent sm:from-[#00002F]/36 sm:via-[#00002F]/14 md:from-[#00002F]/45 md:via-[#00002F]/18" />
          </div>
        ))}
      </div>
    </Responsive>
  );
};

export default Works;
