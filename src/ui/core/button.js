import clsx from "clsx";

export function Button({ className, ...props }) {
  return (
    <button
      className={clsx(
        "rounded-md h-14 px-6 text-lg font-bold text-white",
        className
      )}
      {...props}
    />
  );
}
