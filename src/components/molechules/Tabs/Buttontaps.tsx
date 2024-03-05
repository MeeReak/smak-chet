"use client";

import React, { useState } from "react";
import { Button, FilterButton } from "@/components";

interface ButtontapsProps {
  setFiltered: (index: number) => void;
  filtered: number;
}

export const Buttontaps: React.FC<ButtontapsProps> = ({
  setFiltered,
  filtered,
}) => {
  const [type, setType] = useState([
    "All",
    "Recently",
    "Education",
    "Exhibition",
    "Workshop",
    "Environmental",
    "Charity",
    "Sport",
  ]);

  return (
    <>
      <div className="flex items-center space-x-[15px] w-[1024px] m-auto">
        <div className="w-[880px] flex items-center space-x-[15px] overflow-x-auto overflow-hidden scrollbar-hide">
          {type.map((item, index) => (
            <Button
              onclick={() => setFiltered(index)}
              round="full"
              className={`rounded-full border-[1px] px-6 py-3 ${
                filtered === index
                  ? "bg-[#207bff] text-white"
                  : "hover:bg-[#bdd8ff] hover:text-[#207BFF] hover:border-[#207BFF]"
              } transition-all duration-150 ease-in-out`}
              key={index}
            >
              {item}
            </Button>
          ))}
        </div>

        <FilterButton />
      </div>
    </>
  );
};
