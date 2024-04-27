import React from "react";
import Image from "next/image";
import { Button, ButtonIcon, InputData, Typography } from "@/components";

const page = () => {
  return (
    <>
      <div className="w-[885px] mt-20 mx-auto ">
        <Typography fontSize="h3" fontWeight="semibold" className="p-5">
          User Infomation
        </Typography>
        <div className=" flex gap-x-14">
          {/* Profile Picture */}
          <div className="relative w-[200px] h-[200px]  ">
            <Image
              className=" object-cover w-[200px] h-[200px] rounded-[10px]"
              src="/assets/image/leap.jpg"
              alt="logo"
              width={200}
              height={150}
            />
            <ButtonIcon
              className="absolute -bottom-2 -right-2 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              }
            />
          </div>
          {/* Information User */}
          <div className=" grid grid-cols-2 gap-5">
            <div>
              <Typography className="text-gray-500 pb-2" fontSize="h4">
                {/* Name */}
                Full Name
              </Typography>
              <InputData
                type="text"
                defaultValue="Peng Maleap"
                placeholder={"Enter your fullname"}
                className="py-4 pl-4 pr-[70px] border text-base border-gray-200 bg-gray-100  mb-2 font-semibold"
              />
            </div>
            <div>
              {/* Email */}
              <Typography className="text-gray-500 pb-2" fontSize="h4">
                Email
              </Typography>
              <InputData
                type="text"
                defaultValue="pengmaleap456@gmail.com"
                placeholder={"Enter yout email"}
                className="py-4 pl-4 pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
              />
            </div>
            <div>
              {/* Phone Number */}
              <Typography className="text-gray-500 pb-2" fontSize="h4">
                Phone Number
              </Typography>
              <InputData
                type="text"
                defaultValue="012 345 678"
                placeholder={"Enter yout phone number"}
                className="py-4 pl-4 pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
              />
            </div>
            <div>
              {/* Address */}
              <Typography className="text-gray-500 pb-2" fontSize="h4">
                Address
              </Typography>
              <InputData
                type="text"
                defaultValue="Phnom Penh"
                placeholder={"Enter your address"}
                className="py-4 pl-4 pr-[70px] border text-base bg-gray-100 border-gray-200 mb-2 font-semibold"
              />
            </div>
          </div>
        </div>
        <div>
          {/* About user */}
          <Typography className="text-gray-500 py-2" fontSize="h4">
            About me
          </Typography>
          <textarea
            name="about-user"
            defaultValue={"This is me"}
            className=" outline-none p-4 resize-none border border-gray-200 bg-gray-100 rounded-lg font-semibold"
            cols={90}
            rows={5}
          />
        </div>
        <div className="flex gap-3 justify-end mt-10">
          <Button className="px-8 py-3" round="xl" colorScheme="primary">
            Cancel
          </Button>
          <Button className="px-10 py-3" round="xl" bgColor="primary" colorScheme="White">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
