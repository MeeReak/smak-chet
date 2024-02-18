import React from "react";
import { Button } from "@/components";
import { ButtonIcon } from "@/components";

export const Buttontaps = () => {
  return (
    <div className="flex items-center space-x-[15px] w-[1024px] m-auto">
      <div className="w-[880px] flex items-center space-x-[15px] overflow-hidden">
        <Button
          colorScheme="primary"
          className="text-black-900 rounded-full px-[24px]"
        >
          All
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Recently
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Education
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Workshop
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Exhibition
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Charity
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[1px] text-black-900 rounded-full"
        >
          Environmental
        </Button>
        <Button
          colorScheme="secondary"
          className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
        >
          Sport
        </Button>
      </div>

      <ButtonIcon
        className=" rounded-full w-[20px] h-[20px] border-[1px] border-[#cccccc]"
        icon={
          <svg
            width="12"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10.58L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.58Z"
              fill="black"
            />
          </svg>
        }
      />
      <Button
        leftIcon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.0026 10.0013H3.33594M5.0026 10.0013C5.0026 10.4433 5.1782 10.8673 5.49076 11.1798C5.80332 11.4924 6.22724 11.668 6.66927 11.668C7.1113 11.668 7.53522 11.4924 7.84778 11.1798C8.16034 10.8673 8.33594 10.4433 8.33594 10.0013M5.0026 10.0013C5.0026 9.55927 5.1782 9.13535 5.49076 8.82279C5.80332 8.51023 6.22724 8.33464 6.66927 8.33464C7.1113 8.33464 7.53522 8.51023 7.84778 8.82279C8.16034 9.13535 8.33594 9.55927 8.33594 10.0013M8.33594 10.0013H16.6693M15.0026 15.0013C15.0026 14.5593 14.827 14.1354 14.5144 13.8228C14.2019 13.5102 13.778 13.3346 13.3359 13.3346C12.8939 13.3346 12.47 13.5102 12.1574 13.8228C11.8449 14.1354 11.6693 14.5593 11.6693 15.0013M15.0026 15.0013C15.0026 15.4433 14.827 15.8673 14.5144 16.1798C14.2019 16.4924 13.778 16.668 13.3359 16.668C12.8939 16.668 12.47 16.4924 12.1574 16.1798C11.8449 15.8673 11.6693 15.4433 11.6693 15.0013M15.0026 15.0013H16.6693M11.6693 15.0013H3.33594M15.0026 5.0013C15.0026 4.55927 14.827 4.13535 14.5144 3.82279C14.2019 3.51023 13.778 3.33464 13.3359 3.33464C12.8939 3.33464 12.47 3.51023 12.1574 3.82279C11.8449 4.13535 11.6693 4.55927 11.6693 5.0013M15.0026 5.0013C15.0026 5.44333 14.827 5.86725 14.5144 6.17981C14.2019 6.49237 13.778 6.66797 13.3359 6.66797C12.8939 6.66797 12.47 6.49237 12.1574 6.17981C11.8449 5.86725 11.6693 5.44333 11.6693 5.0013M15.0026 5.0013L16.6693 5.0013M11.6693 5.0013H3.33594"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        className=" border-[#cccccc] border-[1px] text-black-900 rounded-full"
      >
        Filter
      </Button>
    </div>
  );
};
