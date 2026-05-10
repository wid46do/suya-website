"use client";

import Responsive from "@components/Responsive";
import { useEffect } from "react";

const Portos = [
  {
    title: "36ASatu",
    verticalImg: null,
    horizontalImg: null,
    photo: [
      "/images/36ASatu/1.jpg",
      "/images/36ASatu/2.jpg",
      "/images/36ASatu/3.jpg",
      "/images/36ASatu/4.jpg",
      "/images/36ASatu/5.jpg",
    ],
  },
  {
    title: "ES House",
    verticalImg: null,
    horizontalImg: null,
    photo: [
      "/images/ES_House/1.jpg",
      "/images/ES_House/2.jpg",
      "/images/ES_House/3.jpg",
      "/images/ES_House/4.jpg",
      "/images/ES_House/5.jpg",
      "/images/ES_House/6.jpg",
      "/images/ES_House/7.jpg",
      "/images/ES_House/8.jpg",
      "/images/ES_House/9.jpg",
    ],
  },
  {
    title: "JK House",
    verticalImg: null,
    horizontalImg: null,
    photo: [
      "/images/JK_House/1.jpg",
      "/images/JK_House/2.jpg",
      "/images/JK_House/3.jpg",
      "/images/JK_House/4.jpg",
      "/images/JK_House/5.jpg",
      "/images/JK_House/6.jpg",
    ],
  },
  {
    title: "Office",
    verticalImg: null,
    horizontalImg: "/images/Office/7.png",
    photo: [
      "/images/Office/1.jpg",
      "/images/Office/2.jpg",
      "/images/Office/3.jpg",
      "/images/Office/4.jpg",
      "/images/Office/5.jpg",
      "/images/Office/6.jpg",
    ],
  },
  {
    title: "Paviliun Taman Dayu",
    verticalImg: "/images/Paviliun_Taman_Dayu/5.png",
    horizontalImg: null,
    photo: [
      "/images/Paviliun_Taman_Dayu/1.jpg",
      "/images/Paviliun_Taman_Dayu/2.jpg",
      "/images/Paviliun_Taman_Dayu/3.jpg",
      "/images/Paviliun_Taman_Dayu/4.jpg",
    ],
  },
  {
    title: "T House",
    verticalImg: null,
    horizontalImg: null,
    photo: [
      "/images/T_House/1.jpg",
      "/images/T_House/2.jpg",
      "/images/T_House/3.jpg",
    ],
  },
  {
    title: "Villa Bromo Taman Dayu",
    verticalImg: "/images/Villa_Bromo_Taman_Dayu/5.png",
    horizontalImg: null,
    photo: [
      "/images/Villa_Bromo_Taman_Dayu/1.jpg",
      "/images/Villa_Bromo_Taman_Dayu/2.jpg",
      "/images/Villa_Bromo_Taman_Dayu/3.jpg",
      "/images/Villa_Bromo_Taman_Dayu/4.jpg",
    ],
  },
  {
    title: "Villa Trawas",
    verticalImg: null,
    horizontalImg: null,
    photo: [
      "/images/Villa_Trawas/1.jpg",
      "/images/Villa_Trawas/2.jpg",
      "/images/Villa_Trawas/3.jpg",
      "/images/Villa_Trawas/4.jpg",
      "/images/Villa_Trawas/5.jpg",
      "/images/Villa_Trawas/6.jpg",
    ],
  },
  {
    title: "W House",
    verticalImg: null,
    horizontalImg: "/images/W_House/1.png",
    photo: [
      "/images/W_House/2.png",
      "/images/W_House/3.png",
      "/images/W_House/4.png",
      "/images/W_House/5.png",
      "/images/W_House/6.png",
      "/images/W_House/7.png",
    ],
  },
  {
    title: "WV House",
    verticalImg: "/images/WV_House/5.png",
    horizontalImg: null,
    photo: [
      "/images/WV_House/1.jpg",
      "/images/WV_House/2.jpg",
      "/images/WV_House/3.jpg",
      "/images/WV_House/4.jpg",
    ],
  },
];

const getPortfolioId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

interface Props {
  targetPortfolioId?: string;
}

const Sections: React.FC<Props> = ({ targetPortfolioId }) => {
  useEffect(() => {
    if (!targetPortfolioId) return;

    window.scrollTo({ top: 0, behavior: "auto" });

    const scrollTimer = window.setTimeout(() => {
      document
        .getElementById(targetPortfolioId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);

    return () => window.clearTimeout(scrollTimer);
  }, [targetPortfolioId]);

  return (
    <Responsive>
      <div className="flex flex-col gap-24">
        {Portos.map((porto, index) => (
          <div
            key={index}
            id={getPortfolioId(porto.title)}
            className="scroll-mt-28 flex flex-col items-center gap-5"
          >
            <h1 className="font-extralight uppercase text-[#222133]">
              {porto.title}
            </h1>
            <div className="flex w-full flex-col gap-5 md:flex-row">
              {porto.verticalImg && (
                <div className="w-full md:w-1/3">
                  <img
                    src={porto.verticalImg}
                    alt="portfolio"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-5">
                {porto.horizontalImg && (
                  <img
                    src={porto.horizontalImg}
                    alt="portfolio"
                    className="w-full object-cover"
                  />
                )}
                <div
                  className={`grid grid-cols-2 gap-5 h-full ${
                    porto.verticalImg ? "md:grid-cols-2" : "md:grid-cols-3"
                  }`}
                >
                  {porto.photo.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt="portfolio"
                      className="w-full object-cover h-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Responsive>
  );
};

export default Sections;
