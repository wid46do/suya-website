"use client";

import Image from "next/image";
import { headerMenu } from "@functions/headerMenu";
import Link from "next/link";
import Responsive from "@components/Responsive";
import { usePathname } from "next/navigation";
import { tw } from "@functions/style";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  lang: string;
}

const Header: React.FC<Props> = ({ lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const locale = pathName?.split("/")[1] || lang;

  const segments = pathName.split("/");

  return (
    <Responsive
      parentClassName="fixed top-0 z-[99] border-b bg-[#222133]/80 backdrop-blur-sm dark:border-b dark:bg-base-dark-background"
      className="relative h-20 py-0 md:py-0"
    >
      <div className="flex h-full items-center justify-between">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/images/logo-surya.png"
            alt="header"
            width={30}
            height={10}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-10">
          {headerMenu.map((menu) => {
            const menuLink = menu.link.replace("/", "");
            const currentActiveSegment = segments[2] || "";

            const isActive = currentActiveSegment === menuLink;

            return (
              <Link
                key={menu.name}
                href={`/${locale}/${menuLink}`}
                className={tw(
                  "cursor-pointer text-white transition-all duration-300",
                  isActive && "border-b-2 border-[#E3C692] text-[#E3C692]",
                )}
              >
                {menu.name}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <HiXMark className="h-6 w-6" />
          ) : (
            <HiBars3 className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-4 right-4 top-[calc(100%-0.25rem)] rounded-2xl border border-white/10 bg-[#1b1a2b]/95 p-4 shadow-xl backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1">
              {headerMenu.map((menu, index) => {
                const menuLink = menu.link.replace("/", "");
                const currentActiveSegment = segments[2] || "";

                const isActive = currentActiveSegment === menuLink;

                return (
                  <motion.div
                    key={menu.name}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16, delay: index * 0.04 }}
                  >
                    <Link
                      href={`/${locale}/${menuLink}`}
                      className={tw(
                        "block rounded-xl px-4 py-3 text-white transition-all duration-300",
                        isActive && "bg-white/8 text-[#E3C692]",
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {menu.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Responsive>
  );
};

export default Header;
