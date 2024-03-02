import React from "react";

interface InputDateProp {
  placeholder?: string;
  id?: string;
  className: string;
}

const InputDate: React.FC<InputDateProp> = ({ placeholder, id, className }) => {
  return (
    <div>
      <input
        type="date"
        placeholder={placeholder}
        id={id}
        className={className}
      />
    </div>
  );
};

export { InputDate };
