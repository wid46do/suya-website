"use client";

import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import Image from "next/image";
import HomeImage from "@images/bg-section4.png";
import { motion } from "motion/react";
import { fadeInBottom } from "@functions/motion";

interface Props {
  dict?: Dictionary;
}

const Hero: React.FC<Props> = ({ dict }) => {
  return (
    <Responsive>
      <div className="h-[calc(100dvh-12rem)] md:min-h-[calc(100dvh-5rem-12rem)] w-full flex items-center justify-center relative z-2">
        <div className="flex justify-center">
          <motion.div
            {...fadeInBottom()}
            className="flex flex-col gap-7 md:gap-10 text-white text-center max-w-3xl"
          >
            <h1 className="uppercase text-[#E3C692] font-extralight">
              About Us
            </h1>
            <p>
              Suya is a custom furniture specialist offering timeless elegance
              in every piece. Our focus on bespoke designs and premium materials
              ensures each piece is a unique expression of refined beauty.
            </p>
            <p>
              From doors and frame to complete furnishings, Suya provides
              personalized solutions that enhance your living space and
              reflecting lifestyle. Catering to both individual and large-scale
              projects, we ensure every piece is crafted with meticulous
              attention to detail and quality.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full">
        <Image src={HomeImage} alt="" fill className="object-cover" />
      </div>

      <div className="absolute inset-0 z-1 pointer-events-none bg-[#000000] opacity-40" />
    </Responsive>
  );
};

export default Hero;
