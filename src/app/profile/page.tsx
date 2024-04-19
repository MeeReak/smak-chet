import React from "react";
import Image from "next/image";
import {
  Button,
  ButtonIcon,
  InputData,
  InputSearch,
  Typography,
} from "@/components";
// mx-[273px]
const page = () => {
  return (
    <div className=" mx-[273px] w-fit">
      {/* Profile and Button Section */}
      <div className="mt-[141px]">
        <div className="flex flex-row items-center">
          {/* Profile image */}
          <Image
            src={"/assets/image/profile.png"}
            width={160}
            height={160}
            alt={"profile image"}
          />
          {/* Change Avatar button */}
          <div className="ml-[37px] flex-col space-y-9 ">
            <Button
              className="space-x-9 py-3 border-2 border-[#4EA5FF] w-64 rounded-[10px]"
              leftIcon={
                <Image
                  src={"/assets/icons/refresh.svg"}
                  width={30}
                  height={30}
                  alt={"profile image"}
                />
              }
            >
              <Typography fontSize="h3">Change Avatar</Typography>
            </Button>
            <Typography fontSize="h3">
              Upload JPG, PNG image required{" "}
            </Typography>
          </div>
        </div>
      </div>
      {/* Input Section */}
      <div className="mt-[72px] mb-12">
        {/* Name and Address Input section */}
        <div className="flex space-x-36 mb-6">
          <div>
            <Typography>Full Name</Typography>
            <InputData
              placeholder={""}
              type={"text"}
              className={"w-[350px] border border-gray-500"}
            />
          </div>
          <div>
            <Typography>Address</Typography>
            <InputData
              placeholder={""}
              type={"address"}
              className={"w-[350px] border-gray-500"}
            />
          </div>
        </div>
        {/* Email and Address Input section */}
        <div className="flex space-x-36 my-6">
          <div>
            <Typography>Email</Typography>
            <InputData
              placeholder={""}
              type={"email"}
              className={"w-[350px] border-gray-500"}
            />
          </div>
          <div>
            <Typography>Phone Number</Typography>
            <InputData
              placeholder={""}
              type={"text"}
              className={"w-[350px] border-gray-500"}
            />
          </div>
        </div>
        {/* Description section */}
        <div className="flex mt-6">
          <div className="w-full">
            <Typography>Description</Typography>
            <InputData
              placeholder={""}
              type={"text"}
              className={"w-full h-[120px] border-gray-500"}
            />
          </div>
        </div>
      </div>

      {/* Upload section */}
      <div className="flex justify-center ">
        <Button
          bgColor="primary"
          colorScheme="White"
          className="px-[175px] py-[23px]"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default page;
