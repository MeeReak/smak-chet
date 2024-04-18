import React from "react";
import Image from "next/image";
import { ButtonIcon, Typography } from "@/components";

interface MyEventCardProps {
  src: string;
  alt: string;
  title: string;
  date: string;
  location: string;
}

const MyEventCard: React.FC<MyEventCardProps> = ({
  src,
  alt,
  title,
  date,
  location,
}) => {
  return (
    <>
      <div className="group flex max-[640px]:max-w-[500px] sm:w-[600px] lg:w-[800px] relative p-[10px] rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Image
            src={src}
            alt={alt}
            width={150}
            height={150}
            className="max-w-[150px] h-[150px] sm:max-w-[150px] sm:max-h-[150px] object-cover rounded-[10px]"
          />
        </div>
        <div className="space-y-1 pl-[10px] w-[250px] sm:w-[600px]">
          <Typography
            className="line-clamp-2 "
            fontSize="h3"
            fontWeight="semibold"
          >
            {title}
          </Typography>

          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <Typography fontSize="h4" color="blue" className="pl-[5px]">
              {date}
            </Typography>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6  text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <Typography fontSize="h4" color="red" className="pl-[5px]">
              {location}
            </Typography>
          </div>
        </div>
        <ButtonIcon
          className="absolute bottom-3 right-3 border-[2px] border-[#207BFF] rounded-md hidden group-hover:flex hover:border-[3px] hover:bg-[#D2E5FF] transition-all !h-10 w-[40px] "
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[#207BFF]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          }
        />
        <ButtonIcon
          className=" absolute bottom-3 right-16 border-[2px] border-[#207BFF] rounded-md hidden group-hover:flex hover:border-[3px]  hover:bg-[#D2E5FF] transition-all !h-[40px] w-[40px] "
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[#207BFF]"
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
    </>
  );
};

export default MyEventCard;
