"use client";

import React, { useState } from "react";
import { Button, FilterButton } from "@/components";

export const Buttontaps = () => {
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
              round="full"
              colorScheme={item == "All" ? "White" : ""}
              bgColor={item == "All" ? "primary" : ""}
              className="text-black-900 rounded-full border-[1px] px-6 py-3 hover:bg-[#bdd8ff] hover:text-[#207BFF] hover:border-[#207BFF] transition-all duration-300 ease-in-out"
              key={index}
            >
              {item}
            </Button>
          ))}
        </div>

        <FilterButton></FilterButton>
      </div>
    </>
  );
};
