"use client";
import React, { useState } from "react";

interface DropdownProps {
  classname?: string;
  options: string[];
  onChange?: (value: string) => void; // Add the onChange prop
}

const Dropdown: React.FC<DropdownProps> = ({ classname, options , onChange}) => {
  const [isOpen, setisOpen] = useState(false);
  const [selectedOption, setselectedOption] = useState(null);

  const toggling = () => {
    setisOpen(!isOpen);
  };

  const onOptionClicked = (value: any) => () => {
    setselectedOption(value);
    setisOpen(false);
    onChange?.(value);
  };

  return (
    <div className={`inline-flex w-full ${classname}`}>
      <div className="w-full h-[50px] relative flex items-center justify-between border border-gray-200 py-4 pl-5 rounded-[10px] outline-none">
        <a
          onClick={toggling}
          href="javascript:void(0)"
          className={`w-[100%] rounded-l-md py-2 ${
            selectedOption ? "text-black" : "text-gray-400"
          }`}
        >
          {selectedOption || "Select Option"}
        </a>
        <div className="relative">
          <button
            type="button"
            className="border-1 border-gray-100 inline-flex h-full items-center justify-center rounded-r-md px-2 text-gray-600 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="w-full absolute top-6 right-0 z-10 mt-4 min-w-[200px] origin-top-right rounded-md border-gray-200 bg-white shadow-lg grid">
            {options.map((option, index) => (
              <button
                type="button"
                onClick={onOptionClicked(option)}
                key={index}
              >
                <div className="block rounded-lg px-4 py-4 text-sm text-gray-500 no-underline hover:bg-gray-100">
                  {option}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
