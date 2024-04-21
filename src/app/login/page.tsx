"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonIcon, InputData, Typography, Button } from "@/components";
import Link from "next/link";
import { LoginProps } from "../@types/auth";

const Page = () => {
  const [data, setData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      {/* logo */}
      <div className="flex flex-col items-center mt-12 mb-20">
        <Link href={"/"}>
          {" "}
          <Image
            src={"assets/icons/smakchet-logo.svg"}
            alt={"Smakchet logo"}
            width={140}
            height={50}
          />
        </Link>

        {/* Welcome text */}
        <Typography
          align="center"
          fontWeight="bold"
          fontSize="h3"
          className="mt-10 mb-5"
        >
          Welcome Back
        </Typography>

        {/* login form */}
        <form>
          {/* email input */}
          <InputData
            type="email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder={"Email"}
            className={"w-[350px] text-base border border-gray-200 mb-2 mt-2"}
          />
          <br />
          {/* password input */}
          <InputData
            name="password"
            type="password"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder={"Password"}
            className={"w-[350px] border text-base  border-gray-200 my-2"}
          />
          <br />
          {/* forget password ? link */}
          <Link href={"../forget"}>
            <Typography color="blue" fontSize="h5" align="right">
              Forget password ?
            </Typography>
          </Link>
          <br />
          {/*  continue button */}
          <Button
            onclick={(e) => {
              handleSubmit(e);
            }}
            className="bg-blue-500 py-4 w-[350px] align-middle justify-center text-white rounded-[10px] hover:cursor-pointer"
          >
            Continue
          </Button>
          <br />

          {/* signup if don't have account */}
          <Typography align="center" fontSize="h4">
            Don&apos;t have an account ?
            <Link href={"/signup"} className="text-blue-500">
              {" "}
              Sign up
            </Link>
          </Typography>
          {/* ----- or ----- */}
          <div className="inline-flex items-center justify-center w-[350px] my-5">
            <hr className="w-[350px] border-gray-200" />
            <span className="absolute px-3  -translate-x-1/2  left-1/2 bg-white">
              Or
            </span>
          </div>
          <br />
          {/* countinue with facebook */}

          <div className="hover:cursor-pointer flex flex-row justify-left w-[350px]  items-center border border-gray-200 rounded-[10px] mb-3 pl-2">
            <ButtonIcon
              icon={
                <Image
                  src={"facebook.svg"}
                  alt={"facebook logo"}
                  width={24}
                  height={24}
                />
              }
            />
            <Typography align="center" fontSize="h4">
              Continues With Facebook
            </Typography>
          </div>

          {/* countinue with google */}

          <div className="hover:cursor-pointer flex flex-row justify-left w-[350px] h-[50px] items-center border border-gray-200 rounded-[10px] pl-2">
            <ButtonIcon
              icon={
                <Image
                  src={"google.svg"}
                  alt={"google logo"}
                  width={24}
                  height={24}
                />
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

export default Page;
