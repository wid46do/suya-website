"use client";

import { useMemo } from "react";
import { tw } from "@functions/style";
import LabelInput from "@components/LableInput";
import ErrorInput from "@components/ErrorInput";

export interface TextFieldProps extends BasicInput {
  value?: string;
  onChange?: (value: string) => void;
  type?: "text" | "number";
  controller?: object;
  inputClassName?: string;
  maxLength?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  controller,
  inputClassName,
  prefix,
  suffix,
  label,
  autoFocus,
  disabled,
  className,
  parentClassName,
  error,
  type,
  placeholder,
  maxLength,
}) => {
  const inputProps = {
    value,
    placeholder,
    type,
    disabled,
    autoFocus,
    maxLength,
    id: label,
  };

  const classNameFinal = useMemo(() => {
    return tw(
      `h-12 border bg-white border-grayscale-300 w-full flex gap-3 justify-between items-center p-3 rounded-md text-medium`,
      disabled && "bg-grayscale-100",
      error && "border-error",
      className,
    );
  }, [disabled, error, className]);

  return (
    <div className={tw("flex flex-col", parentClassName)}>
      <LabelInput htmlFor={label}>{label}</LabelInput>
      <div className={classNameFinal}>
        {prefix}
        <input
          className={tw(
            "flex w-full focus:outline-none placeholder:text-grayscale-400 text-medium",
            disabled && "bg-white",
            inputClassName,
          )}
          onChange={(e) => {
            if (onChange) onChange(e.target.value);
          }}
          {...controller}
          {...inputProps}
        />
        {suffix}
      </div>
      <ErrorInput error={error} />
    </div>
  );
};

export default TextField;
