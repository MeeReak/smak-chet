import React from "react";
import Image from "next/image";
import { Typography } from "@/components";

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
      <div>
        <div className="flex items-start max-w-[800px] space-y-3 p-2 rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div>
            <Image
              src={"/assets/image/ace_volunteer.jpg"}
              alt={"ace_volunteer.jpg"}
              width={310}
              height={200}
              className="w-[160px] h-[150px] object-cover rounded-[10px]"
            />
          </div>
          <div className="space-y-1 pl-[10px] max-w-[440px]">
            <Typography
              className="line-clamp-2"
              fontSize="h3"
              fontWeight="semibold"
            >
              {"National day of Science, Technology and Innovation 2024"}
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
                {"12/12/2021"}
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
                {"Jakarta"}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEventCard;
