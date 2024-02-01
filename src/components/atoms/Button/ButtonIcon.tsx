"use client";
import React, { ReactNode } from "react";

interface ButtonProps {
  icon: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary";
}
const ButtonIcon: React.FC<ButtonProps> = ({
  icon,
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

  return <button className={combinedClassName}>{icon}</button>;
};

export { ButtonIcon };
