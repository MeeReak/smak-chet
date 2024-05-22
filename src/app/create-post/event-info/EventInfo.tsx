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
import { eventValidationSchema } from "@/utils/eventValidationSchema";
import Image from "next/image";
import Link from "next/link";
import { Input } from "postcss";
import React, { useState } from "react";

interface EventInfoProps {
  onNext: (eventInfo: EventInfoData) => void;
}

interface EventInfoData {
  id?: string;
  name: string;
  imageSrc: string;
  category: string;
  detail: string;
  startDate: null;
  endDate: null;
  startTime: string;
  endTime: string;
  location: string;
  age: string;
  language: string;
  skill: string;
  timeCommitment: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ onNext }) => {
  const options = ["education", "workshop", "sport", "charity"];
  const locations = ["Phnom Penh", "Takeo", "Kandal", "Kep"];

  const [isEnddateValidate, setisEnddateValidate] = useState(true);

  const [info, setInfo] = useState<EventInfoData>({
    id: Math.random().toString(36).substring(2, 15),
    name: "",
    imageSrc: "",
    category: "",
    detail: "",
    startDate: null,
    endDate: null,
    startTime: "",
    endTime: "",
    location: "",
    age: "",
    language: "",
    skill: "",
    timeCommitment: "",
  });

  const [errors, setErrors] = useState<any>({});

  function handleChange(e: any) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const start = new Date(info.startDate);
    const end = new Date(info.endDate);
    console.log(info.detail);
    // Check date validity
    if (end < start) {
      setisEnddateValidate(false); // Reflect invalid end date
      console.error("End date is before start date.");
      return; // Prevent further execution
    } else {
      setisEnddateValidate(true); // Reset date validation state if valid
    }

    // Validate the form using Yup schema
    eventValidationSchema
      .validate(info, { abortEarly: false })
      .then((validData: any) => {
        console.log("Validation successful:", validData);
        setErrors({}); // Clear any previous errors
        onNext(validData); // Only proceed if valid, with validData
      })
      .catch((err) => {
        // Log the error
        console.error("Validation errors:", err);
        // Reduce the array of validation errors into a single errors object
        const newErrors = err.inner.reduce((acc: any, error: any) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(newErrors); // Update state to reflect new errors
      });
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

  const handleStartDate = (date: null) => {
    setInfo({ ...info, startDate: date });
  };

  const handleEndDate = (date: null) => {
    setInfo({ ...info, endDate: date });
  };

  const handleSelectEndTime = (time: string) => {
    setInfo({ ...info, endTime: time });
  };

  const handleChangeContent = (content: string) => {
    setInfo({ ...info, detail: content });
  };
  return (
    <div className="h-full bg-[#FAFAFA] w-full">
      <div className="py-[113px] px-[255px]">
       
        <Button
          className="!border-none"
          leftIcon={
            <Image
              src={"/assets/icons/back.svg"}
              alt={"go back icon"}
              width={19}
              height={10}
            />
          }
        >
          <Typography fontSize="h2" fontWeight="bold">
            Create post
          </Typography>
        </Button>

        <form action={""} className="mt-[33px] flex flex-col gap-y-[25px]">
          {/* Event name, category, detail section */}
          <div className="py-[25px] px-[25px] bg-white rounded-[10px]">
            {/* event name and category */}
            <div className="flex flex-row justify-between gap-x-[35px] ">
              <div className="flex flex-col w-full gap-y-5">
                <label htmlFor="eventname">
                  <Typography fontSize="h3">
                    Event Name <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id=""
                  onChange={handleChange}
                  name="name"
                  type={"text"}
                  placeholder="Event Name"
                  className=" h-[50px] pl-6 border-1 border-gray-300"
                />
                {errors.name && (
                  <p className="text-red-500 mb-2">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col w-full gap-y-5">
                <label htmlFor="category">
                  <Typography fontSize="h3">
                    Category <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <Dropdown
                  classname=" h-[50px] !border-1 border-gray-300 rounded-[10px]"
                  options={options}
                  onChange={handleSelectCategory}
                  placeholder={"Category"}
                />
                {/* <Image className="absolute right-0" src={"assets/icons/dropdown.svg"} width={24} height={24} alt={""}/> */}
                {errors.category && (
                  <p className="text-red-500 mb-2">{errors.category}</p>
                )}
              </div>
            </div>

            {/* Event detail */}
            <div className="mt-5 w-full flex flex-col ">
              <label htmlFor="detail">
                <Typography fontSize="h3">
                  Event&apos;s Detail <span className="text-red-500">*</span>
                </Typography>
              </label>
              <TextEditor onchange={handleChangeContent} />
              {errors.detail && (
                <p className="text-red-500 mb-3">{errors.detail}</p>
              )}
            </div>
          </div>

          {/* Datetime and location */}
          <div className="py-[25px] px-[25px] bg-white rounded-[10px]">
            <Typography fontSize="h2" fontWeight="bold">
              Datetime and Location
            </Typography>
            {/* start and end date */}
            <div className="mt-[35px] flex flex-row justify-between gap-x-[35px] ">
              <div className="flex flex-col gap-y-5 w-full">
                <label htmlFor="startDate">
                  <Typography fontSize="h3">
                    Start Date <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputDate
                  placeholder="start Date"
                  className="h-[50px] !w-full rounded-[10px] pl-6 border-1 border-gray-300"
                  onchange={handleStartDate}
                />
                {errors.startDate && (
                  <p className="text-red-500 mb-2">{errors.startDate}</p>
                )}
              </div>
              <div className="flex flex-col w-full gap-y-5">
                <label htmlFor="endDate">
                  <Typography fontSize="h3">
                    End Date <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputDate
                  className={`h-[50px] !w-full rounded-[10px] pl-6 border-1 border-gray-300 ${
                    isEnddateValidate ? "border-gray-200" : "border-red-500"
                  }`}
                  onchange={handleEndDate}
                  
                />
                {errors.endDate && (
                  <p className="text-red-500 mb-2">{errors.endDate}</p>
                )}
                {!isEnddateValidate && (
                  <p className="text-red-500 text-xs sm:text-sm">
                    Please check the dates: The end date cannot be earlier than
                    the start date.
                  </p>
                )}
              </div>
            </div>

            {/* start and end time */}
            <div className="mt-[35px] flex flex-row justify-between gap-x-[35px] ">
              <div className="flex flex-col gap-y-5 w-full">
                <label htmlFor="startDate">
                  <Typography fontSize="h3">
                    Start Time <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <CustomTimePicker
                  classname="h-[50px] !w-full rounded-[10px] pl-6 border-1 border-gray-300"
                  onSelectTime={handleTimeSelect}
                />
                {errors.startTime && (
                  <p className="text-red-500 mb-2 ">{errors.startTime}</p>
                )}
              </div>
              <div className="flex flex-col w-full gap-y-5">
                <label htmlFor="endTime">
                  <Typography fontSize="h3">
                    End Time <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <CustomTimePicker
                  classname={`h-[50px] !w-full rounded-[10px] pl-6 border-1 border-gray-300`}
                  onSelectTime={handleSelectEndTime}
                />
                {errors.endTime && (
                  <p className="text-red-500 mb-2">{errors.endTime}</p>
                )}
               
              </div>
            </div>

            {/* location */}
            <div className="mt-[35px] flex flex-row justify-between gap-x-[35px] w-1/2">
              <div className="flex flex-col gap-y-5 w-full">
                <label htmlFor="startDate">
                  <Typography fontSize="h3">
                    Location <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <Dropdown
                  classname=""
                  options={locations}
                  onChange={handleSelectlocation}
                  placeholder={"Select Event's Location"}
                />
                {errors.location && (
                  <p className="text-red-500 mb-2">{errors.location}</p>
                )}
              </div>
            </div>
          </div>

          {/* requirement */}
          <div className="py-[25px] px-[25px] bg-white rounded-[10px]">
            <Typography fontSize="h2" fontWeight="bold">
              Requirements
            </Typography>
            {/* age and skill*/}
            <div className="mt-[35px] flex flex-row justify-between gap-x-[35px] ">
              <div className="flex flex-col gap-y-5 w-full">
                <label htmlFor="age">
                  <Typography fontSize="h3">
                    Age <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  placeholder="Your requirement"
                  name="age"
                  id="age"
                  type="text"
                  className="h-[50px] !w-full rounded-[10px] pl-6 border-1 border-gray-300"
                  onChange={handleChange}
                />
                {errors.age && (
                  <p className="text-red-500 mb-2">{errors.age}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-5 w-full">
                <label htmlFor="skill">
                  <Typography fontSize="h3">
                    Skill <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  placeholder="Your requirement"
                  name="skill"
                  id="skill"
                  type="text"
                  className="h-[50px] !w-full rounded-[10px] pl-6 border-1 border-gray-300"
                  onChange={handleChange}
                />
                {errors.skill && (
                  <p className="text-red-500 mb-2">{errors.skill}</p>
                )}
              </div>
            </div>

            {/* language and commitment */}
            <div className="mt-[35px] flex flex-row justify-between gap-x-[35px] ">
              <div className="flex flex-col gap-y-5 w-full">
                <label htmlFor="language">
                  <Typography fontSize="h3">Language</Typography>
                </label>
                <InputData
                  placeholder="Your requirement"
                  name="language"
                  id="language"
                  type="text"
                  className="h-[50px] !w-full rounded-[10px] pl-6 border-1 border-gray-300"
                  onChange={handleChange}
                />
                {errors.language && (
                  <p className="text-red-500 mb-2">{errors.language}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-5 w-full">
                <label htmlFor="Time commitment">
                  <Typography fontSize="h3">Time Commitment</Typography>
                </label>
                <InputData
                  placeholder="Your requirement"
                  id="timecommitment"
                  name="timeCommitment"
                  type="text"
                  className="h-[50px] !w-full rounded-[10px] pl-6 border-1 border-gray-300"
                  onChange={handleChange}
                />
                {errors.timeCommitment && (
                  <p className="text-red-500 mb-2">{errors.timeCommitment}</p>
                )}
              </div>
            </div>
          </div>

          {/* upload photo */}
          <div className="flex flex-col gap-y-5">
            <Typography fontSize="h2" fontWeight="bold">
              Upload Photo <span className="text-red-500">*</span>
            </Typography>
            <FileInput onChange={handleFileUpload} />
            {errors.imageSrc && (
              <p className="text-red-500 mb-2">{errors.imageSrc}</p>
            )}
          </div>

          {/* Map */}
          <div className="flex flex-col gap-y-5">

          <Typography fontWeight="bold" fontSize="h2">
            Map
          </Typography>
          <MapBox />
          </div>
        </form>

        <div>
          <div className="flex justify-end mt-[63px]">
            <Link href={"/create-post"}>
              <Button
                type="button"
                size="h4"
                round="md"
                bgColor="primary"
                colorScheme="White"
                className="py-2 px-[19px]"
                onclick={handleSubmit}
              >
                Next
              </Button>
             
            </Link>
           
          </div>
          <div className="flex justify-end">

          {errors && (
                <p className="text-red-500">There might be unanswered question. <br /> Please go back and check it</p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
