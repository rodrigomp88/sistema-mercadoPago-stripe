import clsx from "clsx";

export function FieldTitle({ className, ...props }) {
  return <span className={clsx("text-gray-700", className)} {...props} />;
}
