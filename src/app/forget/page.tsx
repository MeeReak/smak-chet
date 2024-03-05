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

        {/* Forget Password text */}
        <Typography
          align="center"
          fontSize="h3"
          variant="bold"
          className="mt-16 mb-4"
        >
          Forget Your Password
        </Typography>

        {/* forget password form*/}
        <form>
          {/* label */}
          <label htmlFor="email">
            <Typography color="grey">Enter your email address</Typography>
          </label>

          {/* email input */}
          <InputData
            type="email"
            placeholder={"email"}
            className={"w-[350px] border border-gray-500 h-12 my-4 "}
          />
          <br />
          {/*  continue button */}
          <Button className="!bg-blue-500 w-full align-middle justify-center text-white py-4 rounded-[10px]  hover:cursor-pointer">
            Continue
          </Button>
          <Typography align="center" className="mt-4">
            <Link href={"../login"} className="text-blue-500">
              Back to Login
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default page;
