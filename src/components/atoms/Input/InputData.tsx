"use client";

import React from "react";

interface InputDataProps {
  placeholder?: string;
  type: string;
  onChange?: (event: any) => void;
  className?: string;
}

const InputData: React.FC<InputDataProps> = ({
  placeholder,
  type,
  className,
  onChange,
}) => {
  const combinedClassName = `border border-black py-[15px] pl-[20px] rounded-[10px] outline-none ${className}`;

  return (
    <input
      className={combinedClassName}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export { InputData };
