"use client";

import Responsive from "@components/Responsive";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const menus = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About Us",
    link: "/about",
  },
  {
    text: "Products",
    link: "/products",
  },
  {
    text: "Projects",
    link: "/projects",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

interface Props {
  lang: string;
}

const Footer = ({ lang }: Props) => {
  const pathName = usePathname();
  const locale = pathName?.split("/")[1] || lang;
  return (
    <>
      <Responsive parentClassName="bg-[#222133]">
        <div className="flex flex-col md:flex-row justify-between gap-10 py-10">
          <div className="flex flex-col">
            <div className="relative h-14 w-28 md:h-28 md:w-56">
              <Image
                src="/images/suya-gold.png"
                alt="Surya Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#E3C692] font-extralight uppercase text-sm md:text-base">
              Beyond Craftsmanship,
              <br /> a Persevering & Experiences <br /> of Carpentry
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-[#E3C692] uppercase">PT Kayan Jaya Tanjung</p>
            <div className="flex flex-col gap-3">
              {credentials.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="flex items-center gap-3 text-[#E3C692]"
                >
                  {item.icon}
                  <span className="text-white">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-[#E3C692] uppercase">Quick Links</p>
            <div className="flex flex-col">
              {menus.map((menu, index) => {
                const menuLink = menu.link.replace("/", "");
                return (
                  <Link
                    key={index}
                    href={`/${locale}/${menuLink}`}
                    className="text-white hover:text-[#E3C692] transition-colors"
                  >
                    {menu.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Responsive>
    </>
  );
};

export default Footer;
