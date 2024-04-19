"use client";
import {
  FileInput,
  InputData,
  Typography,
  DatePicker,
  CustomTimePicker,
} from "@/components";
import Dropdown from "@/components/molechules/Dropdown/Dropdown";
import React, { useState } from "react";

const page = () => {
  const options = ["education", "workshop", "sport", "charity"];
  const locations = ["Phnom Penh", "Takeo", "Kandal", "Kep"];

  const handleOptionSelect = (selectedOption: string) => {
    console.log("Selected Option:", selectedOption);
  };

  const handleFileUpload = (files: FileList) => {
    // Handle the uploaded files here
    console.log("Selected files:", files);
    // You can perform further actions with the selected files
  };

  const handleTimeSelect = (time: string) => {
    console.log(`Selected time: ${time}`);
    // You can handle the selected time here (e.g., save to state, pass to another component, etc.)
  };

  return (
    <div className="xl:w-[1024px] m-auto space-y-5 z-10 xl:mt-[100px] w-screen">
      <Typography fontWeight="bold" fontSize="h2">
        Event’s Detail
      </Typography>
      <div className="container mx-auto mt-8">
        <FileInput onChange={handleFileUpload} />
      </div>
      <div>
        <form action="">
          <label htmlFor="evenname">
            <Typography fontWeight="semibold" fontSize="h3">
              Event Name
            </Typography>
          </label>
          <InputData
            id=""
            type={"text"}
            placeholder="Event Name"
            className="w-full mt-3 mb-5"
          ></InputData>
          <label htmlFor="category">
            <Typography fontWeight="semibold" fontSize="h3">
              Category
            </Typography>
          </label>
          <Dropdown classname="mt-3 mb-5" options={options}/>
          <label htmlFor="detail">
            <Typography fontWeight="semibold" fontSize="h3">
              Detail
            </Typography>
          </label>
          <textarea
            name="detail"
            id="detail"
            className="w-full mt-3 mb-5 border border-black py-[15px] pl-[20px] rounded-[10px] outline-none h-[150px]"
            placeholder="Event Detail"
          ></textarea>
        <Typography fontWeight="bold" fontSize="h2">
          Datetime and Location
        </Typography>
        <div className="flex gap-4 mt-5">
          <div className="w-[50%]">
            <Typography fontWeight="semibold" fontSize="h3">
              Start Date
            </Typography>
            <DatePicker classname="w-[500px] mt-3 mb-5"></DatePicker>
          </div>
          <div className="w-[50%]">
            <Typography fontWeight="semibold" fontSize="h3">
              End Date
            </Typography>
            <DatePicker classname="w-[500px] mt-3 mb-5"></DatePicker>
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="w-[50%]">
            <Typography fontWeight="semibold" fontSize="h3">
              Start Time
            </Typography>
            <CustomTimePicker
              onSelectTime={handleTimeSelect}
              classname="w-[98%] mt-3 mb-5"
            />
          </div>
          <div className="w-[50%]">
            <Typography fontWeight="semibold" fontSize="h3">
              End Time
            </Typography>
            <CustomTimePicker
              onSelectTime={handleTimeSelect}
              classname="w-[98%] mt-3 mb-5"
            />
          </div>
        </div>
        <label htmlFor="location">
          <Typography fontWeight="semibold" fontSize="h3">
            Location
          </Typography>
        </label>
        <Dropdown classname="mt-3 mb-5" options={locations}/>
        <Typography fontWeight="bold" fontSize="h2" className="mt-5 mb-5">
          Requirements
        </Typography>
        <label htmlFor="age">
            <Typography fontWeight="semibold" fontSize="h3">
              Age
            </Typography>
          </label>
          <InputData
            id="age"
            type={"text"}
            placeholder="Your Requirement"
            className="w-full mt-3 mb-5"
          ></InputData>
          <label htmlFor="Language">
            <Typography fontWeight="semibold" fontSize="h3">
              Language
            </Typography>
          </label>
          <InputData
            id="language"
            type={"text"}
            placeholder="Your Requirement"
            className="w-full mt-3 mb-5"
          ></InputData>
          <label htmlFor="Skill">
            <Typography fontWeight="semibold" fontSize="h3">
              Skill
            </Typography>
          </label>
          <InputData
            id="Skill"
            type={"text"}
            placeholder="Your Requirement"
            className="w-full mt-3 mb-5"
          ></InputData>
          <label htmlFor="Time Commitment">
            <Typography fontWeight="semibold" fontSize="h3">
              Time Commitment
            </Typography>
          </label>
          <InputData
            id="Time Commitment"
            type={"text"}
            placeholder="Your Requirement"
            className="w-full mt-3 mb-5"
          ></InputData>
        </form>
      </div>
    </div>
  );
};

export default page;
