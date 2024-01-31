import { Button } from "@/components";
import { ButtonIcon } from "@/components/atoms/Button/ButtonIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-around items-center w-screen h-screen">
      <Button colorScheme="primary" className="h-10 w-40 text-xl">
        Login
      </Button>
      <Button colorScheme="secondary" className="h-10 w-40 text-xl rounded-lg">
        Logout
      </Button>
      <Button
        colorScheme="secondary"
        className="h-10 w-40 text-xl rounded-lg bg-white border-black border-[2px]
       text-black flex justify-evenly items-center"
        Icon="./filter.svg"
      >
        Filter
      </Button>
      <ButtonIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        }
        className="w-10 h-10 bg-[#BCD7FF] rounded-full flex justify-center items-center"
      />
    </div>
  );
}
