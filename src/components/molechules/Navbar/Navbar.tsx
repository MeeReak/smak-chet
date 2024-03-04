import React from "react";
import Image from "next/image";
import { InputSearch, ButtonIcon, Button, Typography } from "@/components";

const Navbar = () => {
  return (
    <header>
        <div className="shadow-md">
      {" "}
      <div className=" h-[80px] flex flex-row justify-between aligns-center w-[1024px] m-auto ">
        <div className="flex flex-row justify-right items-center">
          <Image
            className="pb-2"
            src={"assets/icons/smakchet-logo.svg"}
            alt="smakchet-logo"
            width={140}
            height={50}
          />
          <InputSearch />
        </div>
        <div className=" flex flex-row space-x-[10px] items-center">
          <Button className="py-[13px] px-5  border-[1px] text-base border-gray-400 rounded-[10px] hover:bg-[#bdd8ff] hover:border-[#207BFF] hover:text-[#207BFF]">
            Login
          </Button>
          <Button
            colorScheme="primary"
            className="py-[13px] px-5 text-base border-[1px] rounded-[10px] "
          >
            Register
          </Button>
        </div>
      </div>
    </div>
    </header>
  );
};

export { Navbar };
