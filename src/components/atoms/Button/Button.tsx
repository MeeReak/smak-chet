import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary";
  isDisabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  colorScheme = "",
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

  const colorSchemeClass = getColorSchemeClass(colorScheme);

  const disableStyle = isDisabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";
  const combinedClassName = `flex items-center justify-center rounded-lg ${disableStyle} ${colorSchemeClass} ${className}`;

  return (
    <button className={combinedClassName}>
      {leftIcon}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
