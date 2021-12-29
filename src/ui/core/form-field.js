import clsx from "clsx";
import { FieldTitle } from "./field-title";
import { Input } from "./input";

export function FormField({ className, children, title, inputProps }) {
  return (
    <label className={clsx("flex flex-col", className)}>
      <FieldTitle className="mb-1">{title}</FieldTitle>
      {children || <Input {...inputProps} />}
    </label>
  );
}
