import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}