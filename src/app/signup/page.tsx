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
        <Image
          src={"assets/icons/smakchet-logo.svg"}
          alt={"Smakchet logo"}
          width={140}
          height={50}
        />

        {/* create account text */}
        <Typography
          align="center"
          fontSize="h3"
          variant="bold"
          className="mt-16"
        >
          Create Your Account
        </Typography>

        {/* signup form */}
        <form>
          {/* name */}
          <InputData
            type="text"
            placeholder={"name"}
            className={"w-[350px] border border-gray-500 h-12 mb-2 mt-4"}
          />
          <br />
          {/* email input */}
          <InputData
            type="email"
            placeholder={"email"}
            className={"w-[350px] border border-gray-500 h-12 mb-2 mt-2"}
          />
          <br />
          {/* password input */}
          <InputData
            type="password"
            placeholder={"password"}
            className={"w-[350px] border border-gray-500 h-12 mt-2 mb-4"}
          />

          <br />
          {/*  continue button */}
          <Button className="!bg-blue-500 w-full align-middle justify-center text-white py-4 rounded-[10px]  hover:cursor-pointer">
            Continue
          </Button>

          {/* signup if don't have account */}
          <Typography align="center" className="mt-4">
            Already have an account?
            <Link href={"../login"} className="text-blue-500">
              {" "}
              Login
            </Link>
          </Typography>
          {/* ----- or ----- */}
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 " />
            <span className="absolute px-3 text-gray-500 -translate-x-1/2  left-1/2 bg-white">
              Or
            </span>
          </div>
          <br />
          {/* countinue with facebook */}

          <div className="hover:cursor-pointer flex flex-row justify-left w-full h-12 pl-6 items-center border border-[#828282] rounded-md mb-3">
            <ButtonIcon
              icon={
                <Image src={"facebook.svg"} alt={""} width={20} height={20} />
              }
            />
            <Typography align="center" fontSize="h6">
              Continues with Facebook
            </Typography>
          </div>

          {/* countinue with google */}

          <div className="hover:cursor-pointer flex flex-row justify-left w-full h-12 pl-6 items-center border border-[#828282] rounded-md">
            <ButtonIcon
              icon={
                <Image src={"google.svg"} alt={""} width={20} height={20} />
              }
            />
            <Typography align="center" fontSize="h6">
              Continues with Google
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
