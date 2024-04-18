"use client";

import Image from "next/image";
import React from "react";

interface InputDataProps {
  placeholder?: string;
  type: string;
  className?: string;
}

const InputData: React.FC<InputDataProps> = ({
  placeholder,
  type,
  className,
}) => {
  const combinedClassName = `border border-black py-[15px] pl-[20px] rounded-[10px] outline-none ${className}`;

  return (
    <input
      className={combinedClassName}
      type={type}
      placeholder={placeholder}
    />
  );
};

export { InputData };
