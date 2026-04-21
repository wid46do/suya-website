"use client";

import Responsive from "@components/Responsive";

const Portos = [
  {
    title: "36ASatu",
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
    photo: [
      "/images/JK_House/1.jpg",
      "/images/JK_House/2.jpg",
      "/images/JK_House/3.jpg",
      "/images/JK_House/4.jpg",
      "/images/JK_House/5.jpg",
      "/images/JK_House/6.jpg",
    ],
  },
];

const Sections = () => {
  return (
    <Responsive>
      <div className="flex flex-col gap-24">
        {Portos.map((porto, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <h1 className="font-extralight uppercase text-[#222133]">
              {porto.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {porto.photo.map((photo, index) => (
                <img key={index} src={photo} alt="portfolio" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Responsive>
  );
};

export default Sections;
