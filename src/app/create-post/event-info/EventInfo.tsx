"use client";

import {
  FileInput,
  InputData,
  Typography,
  CustomTimePicker,
  Button,
  MapBox,
  InputDate,
} from "@/components";
import Dropdown from "@/components/molechules/Dropdown/Dropdown";
import TextEditor from "@/components/organisms/TextEdit";
import Link from "next/link";
import React, { useState } from "react";

interface EventInfoProps {
  onNext: (eventInfo: EventInfoData) => void;
}

interface EventInfoData {
  id:string;
  name:string;
  imageSrc: string;
  category: string;
  detail: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  address: any;
  age: string;
  language: string;
  skill: string;
  timeCommitment: string;
}

const EventInfo:React.FC<EventInfoProps>= ({onNext}) => {
  const options = ["education", "workshop", "sport", "charity"];
  const locations = ["Phnom Penh", "Takeo", "Kandal", "Kep"];

  const [info, setInfo] = useState<EventInfoData>({
    id: Math.random().toString(36).substring(2, 15),
    name: "",
    imageSrc: "",
    category: "",
    detail: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    location: "",
    address:"",
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
    onNext(info);
  }

  const handleSelectCategory = (selectedOption: string) => {
    setInfo({ ...info, category: selectedOption });
  };

  const handleSelectlocation = (selectedOption: string) => {
    setInfo({ ...info, location: selectedOption });
  };

  const handleFileUpload = (files: FileList) => {
    // Handle the uploaded files here
    setInfo({ ...info, imageSrc: files[0].name });
  };

  const handleTimeSelect = (time: string) => {
    setInfo({ ...info, startTime: time });
  };

  const handleStartDate = (date: string) => {
    setInfo({ ...info, startDate: date });
  };

  const handleEndDate = (date: string) => {
    setInfo({ ...info, endDate: date });
  };

  const handleSelectEndTime = (time: string) => {
    setInfo({ ...info, endTime: time });
  };

  const handleDetail = (str:string) => {
    setInfo({...info,detail:str});
  }

  const handleAddress = (markers:any) =>{
    setInfo({...info,address:markers});
  }


  return (
    <div className="lg:w-[855px] m-auto space-y-5 z-10 mt-20 w-screen mb-20">
      <Typography fontWeight="bold" fontSize="h2" className="max-[1030px]:ml-3">
        Event’s Detail
      </Typography>
      <div className="container mx-auto mt-8">
        <FileInput onChange={handleFileUpload} />
      </div>
      <div>
        <form action="" className="max-[1030px]:mx-5">
          <label htmlFor="evenname">
            <Typography fontWeight="medium" fontSize="h3">
              Event Name
            </Typography>
          </label>
          <InputData
            id=""
            onChange={handleChange}
            name="name"
            type={"text"}
            placeholder="Event Name"
            className="w-full mt-3 mb-5 py-4 pl-5 border border-gray-200"
          />
          <label htmlFor="category">
            <Typography fontWeight="medium" fontSize="h3">
              Category
            </Typography>
          </label>
          <Dropdown
            classname="mt-3 mb-5 w-full"
            options={options}
            onChange={handleSelectCategory}
            placeholder={"Select Event's category"}
          />
          <label htmlFor="detail">
            <Typography fontWeight="semibold" fontSize="h3">
              Detail
            </Typography>
          </label>
          <TextEditor onchange={handleDetail}/>
          <Typography fontWeight="bold" fontSize="h2">
            Datetime and Location
          </Typography>
          <div className="flex gap-4 mt-5">
            <div className="w-[50%]">
              <Typography fontWeight="semibold" fontSize="h3">
                Start Date
              </Typography>
              <InputDate
                className="border border-gray-200 w-[98%] mt-3 mb-5 p-4 rounded-lg outline-none text-xs text-gray-400 sm:text-base"
                onchange={handleStartDate}
              />
            </div>
            <div className="w-[50%]">
              <Typography fontWeight="semibold" fontSize="h3">
                End Date
              </Typography>
              <InputDate
                className="border border-gray-200  w-[98%] mt-3 mb-5 p-4 rounded-lg outline-none text-xs text-gray-400 sm:text-base"
                onchange={handleEndDate}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="w-[50%]">
              <Typography fontWeight="semibold" fontSize="h3">
                Start Time
              </Typography>
              <CustomTimePicker
                onSelectTime={handleTimeSelect}
                classname="w-[98%] mt-3 mb-5 border text-gray-400 border-gray-200 py-4 pl-5"
              />
            </div>
            <div className="w-[50%]">
              <Typography fontWeight="semibold" fontSize="h3">
                End Time
              </Typography>
              <CustomTimePicker
                onSelectTime={handleSelectEndTime}
                classname="w-[98%] mt-3 mb-5 border text-gray-400 border-gray-200 py-4 pl-5"
              />
            </div>
          </div>
          <label htmlFor="location">
            <Typography fontWeight="semibold" fontSize="h3">
              Location
            </Typography>
          </label>

          <Dropdown
            classname="mt-3 mb-5 w-full"
            options={locations}
            onChange={handleSelectlocation}
            placeholder={"Select Event's Location"}
          />

          {/* Address of event */}

          <Typography fontWeight="bold" fontSize="h2" className="mt-5 mb-5">
            Address
          </Typography>

          <MapBox onchange={handleAddress}/>

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
            className="w-full mt-3 mb-5 py-4 pl-5 border border-gray-200"
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
            className="w-full mt-3 mb-5 py-4 pl-5 border border-gray-200"
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
            className="w-full mt-3 mb-5 py-4 pl-5 border border-gray-200"
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
            className="w-full mt-3 mb-5 py-4 pl-5 border border-gray-200"
          />
          <div className="flex justify-end my-5">
          <Link href={"/create-post"}>
            <Button
              type="button"
              size="h3"
              round="md"
              bgColor="primary"
              colorScheme="White"
              className="py-3 px-10"
              onclick={handleSubmit}
            >
              Next
            </Button>
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default EventInfo;
