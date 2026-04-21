"use client";

import Responsive from "@components/Responsive";
import { BsInstagram } from "react-icons/bs";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const credentials = [
  {
    icon: <FaPhoneAlt />,
    text: "+62 821 2112 1337",
    href: "https://wa.me/6282121121337",
  },
  {
    icon: <MdMail />,
    text: "marketing@suya-id.com",
    href: "mailto:marketing@suya-id.com",
  },
  {
    icon: <FaGlobe />,
    text: "www.suya-id.com",
    href: "https://www.suya-id.com",
  },
  {
    icon: <BsInstagram />,
    text: "suyaofficial.id",
    href: "https://www.instagram.com/suyaofficial.id/",
  },
];

const ConnectUs = () => {
  return (
    <Responsive className="flex flex-col items-center gap-8 md:gap-10">
      <h1 className="text-center text-2xl font-extralight sm:text-3xl md:text-4xl">
        Connect with Us.
      </h1>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {credentials.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="flex min-h-20 items-center gap-3 rounded-2xl border border-[#E3C692]/30 px-4 py-4 text-xl text-[#E3C692] sm:text-2xl"
          >
            {item.icon}
            <span className="warp-break-words text-sm text-black sm:text-base md:text-lg">
              {item.text}
            </span>
          </a>
        ))}
      </div>
    </Responsive>
  );
};

export default ConnectUs;
