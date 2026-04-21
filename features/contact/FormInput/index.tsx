"use client";

import { FormEvent, useState } from "react";
import Responsive from "@components/Responsive";
import TextField from "@components/TextField";

const FormInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const textFieldClass =
    "border-b-2 border-t-0 border-x-0 border-[#222133] rounded-none border-black w-full";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailSubject = subject.trim() || `Contact from ${name.trim() || "Website Visitor"}`;
    const mailBody = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim()}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");

    window.location.href = `mailto:marketing@suya-id.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value.replace(/\D/g, ""));
  };

  return (
    <Responsive>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-7 md:gap-10"
      >
      <h1 className="text-center text-2xl font-extralight sm:text-3xl md:text-4xl">
        Get in Touch with Us.
      </h1>

      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-8 font-[Helvetica,Arial,sans-serif] md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:gap-x-20">
        <TextField
          label="Your Name*"
          value={name}
          onChange={setName}
          placeholder="How should we address you?"
          className={textFieldClass}
        />
        <TextField
          label="Your Email*"
          value={email}
          onChange={setEmail}
          placeholder="Write your email here"
          className={textFieldClass}
        />
        <TextField
          label="Subject"
          value={subject}
          onChange={setSubject}
          placeholder="What is this about?"
          className={textFieldClass}
        />
        <TextField
          label="Your Contact Number*"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Write your number here"
          inputMode="numeric"
          pattern="[0-9]*"
          className={textFieldClass}
        />
        <TextField
          label="Message"
          value={message}
          onChange={setMessage}
          placeholder="How can we help you?"
          parentClassName="md:col-span-2"
          className={textFieldClass}
        />
      </div>

      <button
        type="submit"
        className="w-full max-w-xs cursor-pointer bg-[#A29162] px-6 py-3.5 text-white sm:w-fit"
      >
        Contact Us
      </button>
      </form>
    </Responsive>
  );
};

export default FormInput;
