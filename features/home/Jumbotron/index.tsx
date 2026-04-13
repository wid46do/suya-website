"use client";

import { motion, useScroll, useTransform } from "motion/react"; // Gunakan framer-motion jika motion/react ada kendala
import Image from "next/image";
import { useRef } from "react";
import Hero from "../Hero";
import Title from "../Title";
import About from "../About";
import Services from "../Services";

const Jumbotron = () => {
  return (
    <>
      <Hero />

      <div className="h-screen w-full bg-[url('@images/white-wooden-door.png')] bg-cover bg-center bg-fixed">
        <div className="flex h-full items-center justify-center">
          <Title />
        </div>
      </div>

      <About />

      <div className="h-screen w-full bg-[url('@images/bg-section4.png')] bg-cover bg-center bg-fixed">
        <div className="flex flex-col gap-6 h-full items-center justify-center px-4 md:px-40 py-12 md:py-24 text-center bg-black/35">
          <p className="text-[60px] font-extralight text-[#E3C692]">About Us</p>
          <p className="text-white">
            Suya is a custom furniture specialist offering timeless elegance in
            every piece. Our focus on bespoke designs and premium materials
            ensures each piece is a unique expression of refined beauty.{" "}
          </p>
          <p className="text-white">
            From doors and frame to complete furnishings, Suya provides
            personalized solutions that enhance your living space and reflecting
            lifestyle. Catering to both individual and large-scale projects, we
            ensure every piece is crafted with meticulous attention to detail
            and quality.
          </p>
          <button className="cursor-pointer border-[#E3C692] border-4 text-[#E3C692] py-2 px-6">
            Learn More
          </button>
        </div>
      </div>

      <Services />
    </>
  );
};

export default Jumbotron;
