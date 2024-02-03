import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary";
  size?: "small" | "medium" | "large"
  isDisabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  colorScheme = "",
  size = "", // default size set to medium
  isDisabled = false,
  leftIcon,
  rightIcon,
}) => {
  const getColorSchemeClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "bg-[#207BFF] text-white";
      case "secondary":
        return "bg-white hover:bg-[#bdd8ff] hover:text-[#207BFF] hover:border-[#207BFF]";
      default:
        return "bg-white";
    }
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case "small":
        return "text-sm px-3 py-1"; // Adjust these values as needed
      case "medium":
        return "text-md px-4 py-2"; // Adjust these values as needed
      case "large":
        return "text-lg px-5 py-3"; // Adjust these values as needed
      default:
        return "text-md px-4 py-2"; // Default to medium size
    }
  };

  const colorSchemeClass = getColorSchemeClass(colorScheme);

  const disableStyle = isDisabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";

  const combinedClassName = `flex items-center justify-start ${disableStyle} ${colorSchemeClass} ${sizeClass} ${className}`;


  return (
    <button disabled={isDisabled} className={combinedClassName}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
