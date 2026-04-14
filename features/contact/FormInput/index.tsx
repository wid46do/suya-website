"use client";

import Responsive from "@components/Responsive";
import TextField from "@components/TextField";

const FormInput = () => {
  const textFieldClass =
    "border-b-2 border-t-0 border-x-0 border-[#222133] rounded-none border-black w-full";
  return (
    <Responsive className="flex flex-col items-center gap-7">
      <h1 className="font-extralight">Get in Touch with Us.</h1>

      <div className="grid grid-cols-2 gap-x-20 gap-y-10 w-full font-[Helvetica,Arial,sans-serif]">
        <TextField
          label="Your Name*"
          onChange={(value) => console.log(value)}
          placeholder="How should we address you?"
          className={textFieldClass}
        />
        <TextField
          label="Your Email*"
          onChange={(value) => console.log(value)}
          placeholder="Write your number here"
          className={textFieldClass}
        />
        <TextField
          label="Subject"
          onChange={(value) => console.log(value)}
          placeholder="Write your email here"
          className={textFieldClass}
        />
        <TextField
          label="Your Contact Number*"
          onChange={(value) => console.log(value)}
          placeholder="What is your company name?"
          className={textFieldClass}
        />
        <TextField
          label="Message"
          onChange={(value) => console.log(value)}
          placeholder="How can we help you?"
          className={textFieldClass}
        />
      </div>

      <button className="cursor-pointer bg-[#A29162] py-3.5 px-6 text-white">
        Contact Us
      </button>
    </Responsive>
  );
};

export default FormInput;
