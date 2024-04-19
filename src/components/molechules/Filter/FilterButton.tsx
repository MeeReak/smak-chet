"use client";
import React, { useState } from "react";
import { Button } from "@/components/atoms";
import Popup from "./Popup";

export interface FilterButtonProps {
  className: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ className }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <div>
      <Button
        onclick={() => setModalState(true)}
        leftIcon={
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
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        }
        className={`px-6 py-3 border-[1px] text-black-900 rounded-full h-[44px] ${className}`}
      >
        Filter
      </Button>
      <div>{modalState && <Popup setModalState={setModalState} />}</div>
    </div>
  );
};

export default FilterButton;
