import clsx from "clsx";

export function Select({ className, ...props }) {
  return (
    <select
      className={clsx(
        "w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:z-[1]",
        className
      )}
      {...props}
    />
  );
}
