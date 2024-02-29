import { Typography } from "@/components";
import Image from "next/image";
import React from "react";

interface CardProps {
  src: string;
  alt: string;
  title: string;
  date: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ src, alt, title, date, location }) => {
  return (
    <>
      <div className="h-[340px] w-[320px] space-y-2 p-3 rounded-[10px] relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Image
            className="rounded-[10px]"
            src={src}
            alt={alt}
            width={300}
            height={200}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-4 right-4 fill-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>

        <div className=" space-y-2">
          <Typography fontSize="h5" variant="bold">
            {title}
          </Typography>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <Typography fontSize="h6" color="blue" className="pl-[5px]">
              {date}
            </Typography>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <Typography fontSize="h6" color="red" className="pl-[5px]">
              {location}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
