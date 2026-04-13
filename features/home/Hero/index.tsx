"use client";

import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import Image from "next/image";
import HomeImage from "@images/banner.png";
import TextLogo from "@images/surya-text.png";
import { motion } from "motion/react";
import { fadeInRight } from "@functions/motion";

interface Props {
  dict?: Dictionary;
}

const Hero: React.FC<Props> = ({ dict }) => {
  return (
    <Responsive>
      <div className="h-[calc(100dvh-12rem)] md:min-h-[calc(100dvh-5rem-12rem)] w-full flex items-center justify-center md:justify-end relative z-2">
        <div className="flex justify-center md:justify-end">
          <motion.div
            {...fadeInRight()}
            className="max-w-3xl uppercase font-merriweather md:text-4xl font-bold flex flex-col gap-4 md:gap-6 text-white"
          >
            <p className="text-center md:text-left">Welcome to,</p>
            <div className="h-8 md:h-10">
              <Image
                src={TextLogo}
                alt=""
                className="h-14 w-auto md:h-28"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full">
        <Image src={HomeImage} alt="" fill className="object-cover" />
      </div>

      <div className="absolute inset-0 z-1 pointer-events-none bg-linear-to-l from-[#00002F]/25 from-5% via-[#00002F]/10 to-transparent sm:from-[#00002F]/50 sm:via-[#00002F]/20 md:from-[#00002F] md:via-transparent" />
    </Responsive>
  );
};

export default Hero;
