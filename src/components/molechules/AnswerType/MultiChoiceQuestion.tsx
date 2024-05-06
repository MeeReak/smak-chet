"use client";
import React, { useState } from "react";
import { Button, ButtonIcon, Typography } from "@/components/atoms";

interface MultiChoiceQuestionProp {
  onchange: (option: any) => void;
}
const MultiChoiceQuestion: React.FC<MultiChoiceQuestionProp> = ({
  onchange,
}) => {
  const [options, setOptions] = useState([""]);

  const handleOptionChange = (index: any, value: any) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
    onchange(updatedOptions);
  };

  const handleAddOption = () => {
    const newOption = "";
    const updatedOptions = [...options, newOption];
    setOptions(updatedOptions);
  };

  const handleRemoveOption = (index: number) => {
    if (index >= 0 && index < options.length) {
      const updatedOptions = [...options];
      updatedOptions.splice(index, 1);
      setOptions(updatedOptions);
      onchange(updatedOptions);
      console.log(updatedOptions);
    }
  };

  console.log(options);

  return (
    <div className="w-[60%]">
      {options.map((option, index) => (
        <div key={index} className="mb-2 flex">
          <input
            type="text"
            value={options[index]}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
            className="w-full px-4 py-2 border-b border-dashed border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <ButtonIcon
            onclick={() => handleRemoveOption(index)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            }
          ></ButtonIcon>
        </div>
      ))}
      <Button
        type="button"
        onclick={handleAddOption}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Typography color="white">+ Add More Options</Typography>
      </Button>
    </div>
  );
};

export default MultiChoiceQuestion;
