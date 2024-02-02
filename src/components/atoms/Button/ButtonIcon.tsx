import React, { ReactNode } from "react";

interface ButtonIconProps {
  icon: ReactNode;
  className?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, className }) => {
  return (
    <button
      className={` flex items-center justify-center cursor-pointer rounded-full ${className}`}
    >
      {icon}
    </button>
  );
};

export { ButtonIcon };
