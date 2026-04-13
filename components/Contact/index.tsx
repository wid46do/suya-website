import Responsive from "@components/Responsive";
import Image from "next/image";

const Contact = () => {
  return (
    <Responsive className="md:py-32">
      <Image
        src="/images/contact.png"
        alt="Blue Wooden Background"
        fill
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-[#222133]/70" />
      <div className="relative z-10">
        <div className=" flex flex-col gap-7 w-full items-center">
          <h1 className="text-[#E3C692] font-extralight uppercase">
            Contact Us
          </h1>
          <p className="text-white md:text-[30px] text-center">
            Your next great design starts with the{" "}
            <span className="font-bold">
              right partner. <br />
              Contact us today.
            </span>
          </p>
          <button className="w-fit cursor-pointer border-4 border-[#E3C692] px-6 py-2 text-[#E3C692]">
            Let’s Connect
          </button>
        </div>
      </div>
    </Responsive>
  );
};

export default Contact;
