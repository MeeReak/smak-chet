import { InputData, Typography } from "@/components/atoms";
import React from "react";

const SubmitForm = () => {

    return (
      <>
        <div className="w-[981px] h-[190px] bg-[#F8F8F8] rounded-[10px]">
          <div className="w-[981px] h-[31px] bg-blue-600 rounded-t-lg"></div>
          <div className="mt-7 pl-5 space-y-4">
            <Typography fontSize="h2" fontWeight="semibold">
              Apply Form
            </Typography>
            <Typography fontSize="h4" color="grey">
              Fill in this form so we can get your information
            </Typography>
          </div>
        </div>
        <div className="w-[981px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
          <div className="space-y-3 py-[28px]">
            <Typography className="pl-4" fontSize="h4">
              Full Name<span className="text-[16px] text-red-500">*</span>
            </Typography>
            <input
              type="text"
              className=" w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
              placeholder="Short Answer"
            />
          </div>
        </div>
        <div className="w-[981px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
          <div className="space-y-3 py-[28px]">
            <Typography className="pl-4" fontSize="h4">
              Address<span className="text-[16px] text-red-500">*</span>
            </Typography>
            <input
              type="text"
              className=" w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
              placeholder="Short Answer"
            />
          </div>
        </div>
        <div className="w-[981px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
          <div className="space-y-3 py-[28px]">
            <Typography className="pl-4" fontSize="h4">
              Email<span className="text-[16px] text-red-500">*</span>
            </Typography>
            <input
              type="text"
              className=" w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
              placeholder="Short Answer"
            />
          </div>
        </div>
        <div className="w-[981px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
          <div className="space-y-3 py-[28px]">
            <Typography className="pl-4" fontSize="h4">
              Phone number<span className="text-[16px] text-red-500">*</span>
            </Typography>
            <input
              type="text"
              className=" w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
              placeholder="Short Answer"
            />
          </div>
        </div>
        <div className="w-[981px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
          <div className="space-y-3 py-[28px]">
            <Typography className="pl-4" fontSize="h4">
              Why do you want to join Volunteer?
              <span className="text-[16px] text-red-500">*</span>
            </Typography>
            <input
              type="text"
              className=" w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
              placeholder="Short Answer"
            />
          </div>
            </div>
            <div className="bg-blue-600 w-[140px] h-[50px] rounded-[10px] flex justify-center items-center">
                <Typography fontSize="h3" color="white">Submit</Typography>
            </div>
      </>
    );
};

export default SubmitForm;
