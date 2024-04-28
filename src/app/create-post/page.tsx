"use client";

import {
  FileInput,
  InputData,
  Typography,
  DatePicker,
  CustomTimePicker,
  Button,
  MapBox,
  InputDate,
} from "@/components";
import Dropdown from "@/components/molechules/Dropdown/Dropdown";
import React, { useState } from "react";

const Page = () => {
  const options = ["education", "workshop", "sport", "charity"];
  const locations = ["Phnom Penh", "Takeo", "Kandal", "Kep"];

  const [info, setInfo] = useState<any>({
    imageSrc: "",
    category: "",
    detail: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    location: "",
    age: "",
    language: "",
    skill: "",
    timeCommitment: "",
  });

  function handleChange(e: any) {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(info);
  }

  const handleOptionSelect = (selectedOption: string) => {
    console.log("Selected Option:", selectedOption);
  };

  const handleFileUpload = (files: FileList) => {
    // Handle the uploaded files here
    setInfo({ ...info, imageSrc: files[0].name });
  };

  const handleTimeSelect = (time: string) => {
    console.log(`Selected time: ${time}`);
    // You can handle the selected time here (e.g., save to state, pass to another component, etc.)
  };

  return (
    <div className="lg:w-[1024px] m-auto space-y-5 z-10 mt-20 w-screen mb-20">
      <Typography fontWeight="bold" fontSize="h2" className="max-[1030px]:ml-3">
        Event’s Detail
      </Typography>
      <div className="container mx-auto mt-8">
        <FileInput onChange={handleFileUpload} />
      </div>
      <div>
        <form action="" className="max-[1030px]:mx-5">
          <label htmlFor="evenname">
            <Typography fontWeight="semibold" fontSize="h3">
              Event Name
            </Typography>
          </label>
          <InputData
            id=""
            onChange={handleChange}
            name="name"
            type={"text"}
            placeholder="Event Name"
            className="w-full mt-3 mb-5 py-3 pl-5"
          />
          <label htmlFor="category">
            <Typography fontWeight="semibold" fontSize="h3">
              Category
            </Typography>
          </label>
          <Dropdown classname="mt-3 mb-5" options={options} />
          <label htmlFor="detail">
            <Typography fontWeight="semibold" fontSize="h3">
              Detail
            </Typography>
          </label>
          <textarea
            onChange={handleChange}
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
              <InputDate className="border-[1px] border-black w-[98%] mt-3 mb-5 p-3 rounded-lg outline-none text-xs sm:text-sm" ></InputDate>
            </div>
            <div className="w-[50%]">
              <Typography fontWeight="semibold" fontSize="h3">
                End Date
              </Typography>
              <InputDate className="border-[1px] border-black w-[98%] mt-3 mb-5 p-3 rounded-lg outline-none text-xs sm:text-sm"></InputDate>
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

          <Dropdown classname="mt-3 mb-5" options={locations} />

          {/* Address of event */}

          <Typography fontWeight="bold" fontSize="h2" className="mt-5 mb-5">
            Address
          </Typography> 

          <MapBox />

          {/* Requirements */}

          <Typography fontWeight="bold" fontSize="h2" className="mt-5 mb-5">
            Requirements
          </Typography>
          <label htmlFor="age">
            <Typography fontWeight="semibold" fontSize="h3">
              Age
            </Typography>
          </label>
          <InputData
            onChange={handleChange}
            name="age"
            id="age"
            type={"text"}
            placeholder="Your Requirement"
            className="w-full mt-3 mb-5 py-3 pl-5"
          />
          <label htmlFor="Language">
            <Typography fontWeight="semibold" fontSize="h3">
              Language
            </Typography>
          </label>
          <InputData
            onChange={handleChange}
            name="language"
            id="language"
            type={"text"}
            placeholder="Your Requirement"
            className="w-full mt-3 mb-5 py-3 pl-5"
          />
          <label htmlFor="Skill">
            <Typography fontWeight="semibold" fontSize="h3">
              Skill
            </Typography>
          </label>
          <InputData
            onChange={handleChange}
            name="skill"
            id="skill"
            type={"text"}
            placeholder="Your Requirement"
            className="w-full mt-3 mb-5 py-3 pl-5"
          />
          <label htmlFor="Time Commitment">
            <Typography fontWeight="semibold" fontSize="h3">
              Time Commitment
            </Typography>
          </label>
          <InputData
            onChange={handleChange}
            name="timeCommitment"
            id="Time Commitment"
            type={"text"}
            placeholder="Your Requirement"
            className="w-full mt-3 mb-5 py-3 pl-5"
          />
        </form>
        <div className="flex justify-end my-5">
          <Button
            size="h3"
            round="md"
            bgColor="primary"
            colorScheme="White"
            className="py-3 px-10"
            onclick={handleSubmit}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
