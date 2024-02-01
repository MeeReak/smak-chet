import { Button, ButtonIcon, InputData, InputSearch , Typography ,Icons } from "@/components";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Button
        className="w-[100px] h-[50] rounded-2xl border-[1px] border-black flex justify-around items-center"
        rightIcon={
            <Icons label="User" background="white" size="lg"></Icons>
        }
      >
        Login
      </Button>
      <ButtonIcon
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
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        }
      ></ButtonIcon>
      <InputSearch></InputSearch>
      <InputData placeholder="Password" type="password" className={""}></InputData>
      <Typography fontSize='h3' variant='bold'>Top Trending in <span className='text-red-500'>SmakChet</span></Typography>
      <div className="flex space-x-[20px]">
          <Image src='./volunteer.svg' alt='' width={500} height={250}></Image>
          <Image src='./volunteer.svg' alt='' width={500} height={250}></Image>
      </div>
      <Icons label="User" size="lg" />
    </div>
  );
};

export default Homepage;
