"use client";

import React, { useState } from "react";
import { Button, FilterButton } from "@/components";
import { ButtonIcon } from "@/components";

export const Buttontaps = () => {
  const [type, setType] = useState([
    "All",
    "Recently",
    "Education",
    "Exhibition",
    "Workshop",
    "Exhibition",
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
              colorScheme={item == "All" ? "primary" : "secondary"}
              className="text-black-900 rounded-full border-[1px] px-6 py-3 whitespace-nowrap"
              key={index}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* <ButtonIcon
          className=" rounded-full h-[10px] w-[10]  border-[1px] border-[#cccccc]"
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          }
        /> */}
        <FilterButton></FilterButton>
      </div>
    </>
  );
};
