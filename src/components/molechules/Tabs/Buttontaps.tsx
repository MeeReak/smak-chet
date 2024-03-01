import React from "react";
import { Button, FilterButton } from "@/components";
import { ButtonIcon } from "@/components";

export const Buttontaps = () => {
  return (
    <div className="flex items-center space-x-[15px] w-[1024px] m-auto">
      <div className="w-[880px] flex items-center space-x-[15px] overflow-hidden">
        <Button
          colorScheme="primary"
          className="text-black-900 rounded-full px-[24px]"
        >
          All
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Recently
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Education
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Workshop
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Exhibition
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Charity
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[1px] text-black-900 rounded-full"
        >
          Environmental
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Sport
        </Button>
      </div>

      <ButtonIcon
        className=" rounded-full w-[20px] h-[20px] border-[1px] border-[#cccccc]"
        icon={
          <svg
            width="12"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10.58L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.58Z"
              fill="black"
            />
          </svg>
        }
      />
      <FilterButton></FilterButton>
    </div>
  );
};
