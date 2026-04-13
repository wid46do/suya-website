"use client";
import Image from "next/image";
import ServicesImage from "@images/bg-services.png";

const Services = () => {
  return (
    <>
      <div className="w-full bg-white md:hidden">
        <div className="relative h-72 w-full">
          <Image
            src={ServicesImage}
            alt="Our Services"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 px-4 py-12 text-center">
          <p className="text-4xl font-extralight text-[#E3C692]">
            Our Services
          </p>
          <p className="text-base">
            Discover how our craftsmanship and premium timber come together to
            create timeless designs. From doors and windows to furniture,
            decking, and architectural Glulam structures, our design service
            brings your vision to life with precision and artistry. Using only
            the finest materials - Merbau, Mahogany, Ulin, Nyatoh, and more - we
            craft solutions that balance beauty, durability, and functionality
            for every space.
          </p>
          <button className="w-fit cursor-pointer self-center border-4 border-[#E3C692] px-6 py-2 text-[#E3C692]">
            Explore Our Services
          </button>
        </div>
      </div>

      <div className="hidden h-screen w-full bg-[url('/images/bg-services.png')] bg-cover bg-center md:block">
        <div className="flex h-full w-4xl flex-col justify-center gap-12 bg-linear-to-r from-white from-90% to-transparent p-10 pl-40">
          <p className="text-[60px] font-extralight text-[#E3C692]">
            Our Services
          </p>
          <p className="max-w-xl text-lg">
            Discover how our craftsmanship and premium timber come together to
            create timeless designs. From doors and windows to furniture,
            decking, and architectural Glulam structures, our design service
            brings your vision to life with precision and artistry. Using only
            the finest materials - Merbau, Mahogany, Ulin, Nyatoh, and more - we
            craft solutions that balance beauty, durability, and functionality
            for every space.
          </p>
          <button className="w-fit cursor-pointer border-4 border-[#E3C692] px-6 py-2 text-[#E3C692]">
            Explore Our Services
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
