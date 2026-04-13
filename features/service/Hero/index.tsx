"use client";

import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import Image from "next/image";
import HomeImage from "@images/bg-services.png";
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
              Our Services
            </h1>
            <p>
              Discover how our craftsmanship and premium timber come together to
              create timeless designs. From doors and windows to furniture,
              decking, and architectural Glulam structures, our design service
              brings your vision to life with precision and artistry. Using only
              the finest materials—Merbau, Mahogany, Ulin, Nyatoh, and more—we
              craft solutions that balance beauty, durability, and functionality
              for every space.
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
