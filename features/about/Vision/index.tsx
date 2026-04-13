import Responsive from "@components/Responsive";
import Image from "next/image";

const Vision = () => {
  return (
    <Responsive className="justify-center flex w-full">
      <Image
        src="/images/contact.png"
        alt="Blue Wooden Background"
        fill
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-[#000000]/35" />
      <div className="flex flex-col gap-10 md:gap-20 text-left z-2 relative max-w-2xl">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <h1 className="font-extralight uppercase text-[#E3C692]">Vision</h1>
          <p className="font-[Helvetica,Arial,sans-serif] text-white">
            To always expand & use a combination of the best new knowledge &
            best experiences on TIMBER production
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <h1 className="font-extralight uppercase text-[#E3C692]">Mission</h1>
          <p className="font-[Helvetica,Arial,sans-serif] text-white">
            With an open mind to choose and train the best people to be
            competent and skillful for reaching a better high productivity &
            efficiency to compete on high demand market with the best quality
            Timber products
          </p>
        </div>
      </div>
    </Responsive>
  );
};

export default Vision;
