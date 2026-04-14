"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import swiperText from "../../../dictionaries/home/about.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import Responsive from "@components/Responsive";
import Image from "next/image";

const About = () => {
  return (
    <Responsive className="">
      <Image
        src="/images/blue-wooden.png"
        alt="Blue Wooden Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0"
      />
      <div className="relative flex flex-col gap-6 items-center justify-center h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-slate-400 !opacity-50",
            bulletActiveClass:
              "!bg-blue-600 !opacity-100 !w-6 !rounded-full transition-all",
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          className="w-full rounded-2xl overflow-hidden"
        >
          {swiperText.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="flex min-h-96 flex-col items-center justify-center gap-4 px-4 py-8 text-center text-[#E3C692] md:h-96 md:p-6">
                <p className="w-full max-w-3xl text-2xl font-bold uppercase wrap-break-word md:text-[30px]">
                  {text.title}
                </p>
                <p className="w-full max-w-4xl text-3xl font-extralight uppercase leading-tight break-words md:text-[40px]">
                  {text.description}
                </p>
                <p className="max-w-3xl text-sm leading-6 text-white md:text-base">
                  {text.paragraph}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-8">
          <button className="button-prev p-2 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors group">
            <FaChevronLeft className="w-6 h-6 text-slate-600 group-active:scale-90 transition-transform" />
          </button>

          <div className="custom-pagination flex gap-2 static! w-auto!"></div>

          <button className="button-next p-2 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm group">
            <FaChevronRight className="w-6 h-6 text-slate-600 group-active:scale-90 transition-transform" />
          </button>
        </div>
      </div>
    </Responsive>
  );
};

export default About;
