import { Typography } from "@/components";
import Image from "next/image";
import React from "react";
import Link from "next/link";

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
      <Link href={`/${title}`}>
        <div className="h-[375px] w-[320px] space-y-2 rounded-[10px]  shadow-lg relative">
          <Image
            className="rounded-t-[10px]"
            src={src}
            alt={alt}
            width={320}
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
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M15 23C19.4 23 23 19.4 23 15C23 10.6 19.4 7 15 7C10.6 7 7 10.6 7 15C7 19.4 10.6 23 15 23ZM15 5C20.5 5 25 9.5 25 15C25 20.5 20.5 25 15 25C9.5 25 5 20.5 5 15C5 9.5 9.5 5 15 5ZM20 14.5V16H14V10H15.5V14.5H20Z"
                  fill="#828282"
                />
              </svg>
              <Typography fontSize="h6" color="blue" className="pl-[5px]">
                {date}
              </Typography>
            </div>
            <div className="flex items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 9.5C15.7578 9.5 16.4845 9.76339 17.0203 10.2322C17.5561 10.7011 17.8571 11.337 17.8571 12C17.8571 12.3283 17.7832 12.6534 17.6397 12.9567C17.4961 13.26 17.2856 13.5356 17.0203 13.7678C16.755 13.9999 16.44 14.1841 16.0934 14.3097C15.7467 14.4353 15.3752 14.5 15 14.5C14.2422 14.5 13.5155 14.2366 12.9797 13.7678C12.4439 13.2989 12.1429 12.663 12.1429 12C12.1429 11.337 12.4439 10.7011 12.9797 10.2322C13.5155 9.76339 14.2422 9.5 15 9.5ZM15 5C17.1217 5 19.1566 5.7375 20.6569 7.05025C22.1571 8.36301 23 10.1435 23 12C23 17.25 15 25 15 25C15 25 7 17.25 7 12C7 10.1435 7.84285 8.36301 9.34315 7.05025C10.8434 5.7375 12.8783 5 15 5ZM15 7C13.4845 7 12.031 7.52678 10.9594 8.46447C9.88775 9.40215 9.28571 10.6739 9.28571 12C9.28571 13 9.28571 15 15 21.71C20.7143 15 20.7143 13 20.7143 12C20.7143 10.6739 20.1122 9.40215 19.0406 8.46447C17.969 7.52678 16.5155 7 15 7Z"
                  fill="#828282"
                />
              </svg>
              <Typography fontSize="h6" color="red" className="pl-[5px]">
                {location}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export { Card };
