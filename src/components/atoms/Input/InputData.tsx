"use client";

import React from "react";

interface InputDataProps {
  placeholder?: string;
  type?: string;
  onChange?: (event: any) => void;
  className?: string;
  id?: string;
  name?: string;
  defaultValue?: string;
}

const InputData: React.FC<InputDataProps> = ({
  placeholder,
  type,
  className,
  onChange,
  id,
  name,
  defaultValue,
}) => {
  const combinedClassName = `border border-black rounded-[10px] outline-none ${className}`;

  return (
    <input
      className={combinedClassName}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      id={id}
      name={name}
      defaultValue={defaultValue}
    />
  );
};

export { InputData };
