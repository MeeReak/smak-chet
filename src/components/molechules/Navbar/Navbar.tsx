import React from "react";
import Image from "next/image";
import { InputSearch, ButtonIcon, Button, Typography } from "@/components";

const Navbar = () => {
  return (
    <div className=" h-[100px] flex flex-row justify-between aligns-center w-[1024px] m-auto ">
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
      <div className=" flex flex-row justify-center items-center">
        <Button
          leftIcon={
            <Image
              alt="cambodia-flag"
              src={"assets/icons/cambodia-flag.svg"}
              width={30}
              height={30}
            />
          }
          className="border-[#cccccc] border-r-2"
        >
          <Typography className=" px-[5px]" variant="normal" fontSize="h6">
            KH
          </Typography>
        </Button>

        <ButtonIcon
          className=" bg-[bdd8ff] rounded-full  flex align-middle justify-center items-center ml-[17px]"
          icon={
            <Image
              src={"assets/icons/user-profile.svg"}
              alt="user profile"
              width={50}
              height={50}
            />
          }
        />
      </div>
    </div>
  );
};

export { Navbar };
