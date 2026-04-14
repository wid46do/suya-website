interface BasicInput {
  label?: string;
  className?: string;
  parentClassName?: string;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  error?: InputError;
}

type InputError =
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<FieldValues>>
  | string;
