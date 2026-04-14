"use client";

import Responsive from "@components/Responsive";
import { BsInstagram } from "react-icons/bs";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const credentials = [
  {
    icon: <FaPhoneAlt />,
    text: "+62 821 2112 1337",
  },
  {
    icon: <MdMail />,
    text: "marketing@suya-id.com",
  },
  {
    icon: <FaGlobe />,
    text: "www.suya-id.com",
  },
  {
    icon: <BsInstagram />,
    text: "suyaofficial.id",
  },
];

const ConnectUs = () => {
  return (
    <Responsive className="items-center gap-9 flex flex-col">
      <h1 className="font-extralight">Connect with Us.</h1>
      <div className="flex gap-6">
        {credentials.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-[#E3C692] text-2xl"
          >
            {item.icon}
            <span className="text-black text-lg">{item.text}</span>
          </div>
        ))}
      </div>
    </Responsive>
  );
};

export default ConnectUs;
