import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
      rounded-full
      bg-gradient-to-r
      from-violet-600
      to-blue-600
      px-6
      py-3
      text-white
      font-medium
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(139,92,246,.5)]
      active:scale-95
      "
    >
      {children}
    </button>
  );
}