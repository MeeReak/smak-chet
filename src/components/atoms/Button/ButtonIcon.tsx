import React, { ReactNode } from "react";

interface ButtonIconProps {
  icon: ReactNode;
  className?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, className }) => {
  return (
    <button
      className={`rounded-full flex items-center justify-center cursor-pointer ${className}`}
    >
      {icon}
    </button>
  );
};

export { ButtonIcon };
