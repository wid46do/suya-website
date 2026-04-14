"use client";

import { tw } from "@functions/style";
import { useMemo } from "react";
import { TiWarningOutline } from "react-icons/ti";

interface Props {
  error?: InputError;
  className?: string;
}

const ErrorInput: React.FC<Props> = ({ error, className }) => {
  const errorMessage = useMemo(() => {
    return typeof error === "object" ? (error?.message as string) : error;
  }, [error]);

  if (!error) return null;
  return (
    <span
      className={tw(
        "flex items-center gap-1 mt-1 text-[12px] font-extralight text-red-500",
        className,
      )}
    >
      <TiWarningOutline /> {errorMessage}
    </span>
  );
};

export default ErrorInput;
