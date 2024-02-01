"use client";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary";
}
const Button: FC<ButtonProps> = ({
  children,
  rightIcon,
  leftIcon,
  className = "",
  colorScheme = "primary",
}) => {
  const getColorSchemeClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "bg-[#207BFF] hover:bg-[#BCD7FF]";
      case "secondary":
        return "bg-[#FF2020]";
      default:
        return "bg-[#207BFF] hover:bg-[rgba(32, 123, 255, 0.30)]";
    }
  };
  const colorSchemeClass = getColorSchemeClass(colorScheme);
  const combinedClassName = `text-center ${colorSchemeClass} ${className}`;

  return (
    <button className={combinedClassName}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
