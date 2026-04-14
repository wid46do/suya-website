"use client";

import { tw } from "@functions/style";

const LabelInput: React.FC<{
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}> = ({ children, className, htmlFor }) => {
  if (!children) return null;
  return (
    <label
      className={tw(
        "text-small mb-0.5 font-extralight text-secondary-400",
        className,
      )}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default LabelInput;
