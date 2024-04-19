"use client";
import React from "react";
import Image from "next/image";
import { ButtonIcon, InputData, Typography, Button } from "@/components";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* logo */}
      <div className="flex flex-col items-center mt-12">
        <Link href="/">
          <Image
            src={"assets/icons/smakchet-logo.svg"}
            alt={"Smakchet logo"}
            width={140}
            height={50}
          />
        </Link>

        {/* create account text */}
        <Typography
          align="center"
          // fontSize="h3"
          fontWeight="bold"
          className="mt-16 mb-10 text-[32px]"
        >
          Create Your Account
        </Typography>

        {/* signup form */}
        <form>
          {/* name */}
          <InputData
            type="text"
            placeholder={"Username"}
            className={"w-[350px] border border-[#E0E0E0] h-12 mb-2 mt-4"}
          />
          <br />
          {/* email input */}
          <InputData
            type="email"
            placeholder={"Email"}
            className={"w-[350px] border border-[#E0E0E0] h-12 mb-2 mt-2"}
          />
          <br />
          {/* password input */}
          <InputData
            type="password"
            placeholder={"Password"}
            className={"w-[350px] border border-[#E0E0E0] h-12 mt-2 mb-4"}
          />

          <br />
          {/*  continue button */}
          <Button className="bg-blue-500 h-[50px] my-6 w-[350px] align-middle justify-center text-white rounded-[10px]  hover:cursor-pointer">
            Continue
          </Button>

          {/* signup if don't have account */}
          <Typography align="center" >
            Already have an account?
            <Link href={"/login"} className="text-blue-500">
              {" "}
              Login
            </Link>
          </Typography>
          {/* ----- or ----- */}
          <div className="inline-flex items-center justify-center w-[350px] my-5">
            <hr className="w-[350px] border-gray-500" />
            <span className="absolute px-3  -translate-x-1/2  left-1/2 bg-white">
              Or
            </span>
          </div>
          <br />
          {/* countinue with facebook */}

          <div className="hover:cursor-pointer flex flex-row justify-left w-[350px] h-[50px] items-center border border-[#828282] rounded-[10px] mb-3">
            <ButtonIcon
              icon={
                <Image src={"facebook.svg"} alt={"facebook logo"} width={20} height={20} />
              }
            />
            <Typography align="center" fontSize="h4">
              Continues With Facebook
            </Typography>
          </div>

          {/* countinue with google */}

          <div className="hover:cursor-pointer flex flex-row justify-left w-[350px] h-[50px] items-center border border-[#828282] rounded-[10px] ">
            <ButtonIcon
              icon={
                <Image src={"google.svg"} alt={"google logo"} width={20} height={20} />
              }
            />
            <Typography align="center" fontSize="h4">
              Continues With Google
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
