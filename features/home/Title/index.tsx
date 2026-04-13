"use client";

import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import Image from "next/image";
import TextLogo from "@images/suya_blue.png";
import { motion } from "motion/react";
import { fadeInBottom, fadeInRight } from "@functions/motion";

interface Props {
  dict?: Dictionary;
}

const Title: React.FC<Props> = ({ dict }) => {
  return (
    <Responsive>
      <div className="h-dvh w-full flex items-center justify-center relative z-2">
        <div className="flex justify-center">
          <motion.div
            {...fadeInBottom()}
            className="max-w-3xl uppercase items-center font-merriweather text-6xl md:text-4xl font-bold flex flex-col gap-4 md:gap-6 text-white"
          >
            <Image src={TextLogo} alt="Surya" className="h-60 w-auto md:h-96" />
            <p className="text-[14px] md:text-[20px] font-extralight text-[#00002F]">
              By PT Kayan Jaya Tanjung
            </p>
          </motion.div>
        </div>
      </div>
    </Responsive>
  );
};

export default Title;
