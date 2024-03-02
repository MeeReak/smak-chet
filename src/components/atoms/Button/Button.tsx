import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary" | "Success" | "Error" | "Warning";
  size?: "h1" | "h2" | "h3" | "h4" | "h5";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onclick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  colorScheme = "",
  size = "h4",
  leftIcon,
  rightIcon,
  onclick,
}) => {
  const getColorSchemeClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "text-[#207BFF]";
      case "secondary":
        return "text-[#FF2020]";
      case "Success":
        return "text-[#27AE60]";
      case "Error":
        return "text-[#EB5757]";
      case "Warning":
        return "text-[#E2B93B]";
      default:
        return "bg-[#1F1F1F]";
    }
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case "h1":
        return "text-4xl"; 
      case "h2":
        return "text-2xl";
      case "h3":
        return "text-xl";
      case "h4":
        return "text-base";
      case "h5":
        return "text-sm"; 
      default:
        return "text-base"; 
    }
  };

  const sizeClass = getSizeClass(size);
  const colorSchemeClass = getColorSchemeClass(colorScheme);

  const combinedClassName = `flex items-center justify-start ${colorSchemeClass} ${sizeClass} ${className}`;

  return (
    <button className={combinedClassName} onClick={onclick}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
