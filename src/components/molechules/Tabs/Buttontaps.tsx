import React from "react";
import { Button } from "@/components";
import { ButtonIcon } from "@/components";

export const Buttontaps = () => {
  return (
    <div className="flex items-center space-x-[15px] rounded-full">
      <Button
        colorScheme="primary"
        className=" border-black text-black-900 rounded-full "
      >
        All
      </Button>
      <Button
        colorScheme="secondary"
        className=" border-black border-[1px] text-black-900 rounded-full"
      >
        Recently
      </Button>
      <Button
        colorScheme="secondary"
        className=" border-black border-[1px] text-black-900 rounded-full"
      >
        Education
      </Button>
      <Button
        colorScheme="secondary"
        className=" border-black border-[1px] text-black-900 rounded-full"
      >
        Workshop
      </Button>
      <Button
        colorScheme="secondary"
        className=" border-black border-[1px] text-black-900 rounded-full"
      >
        Exhibition
      </Button>
      <Button
        colorScheme="secondary"
        className=" border-black border-[1px] text-black-900 rounded-full"
      >
        Charity
      </Button>
      <Button
        colorScheme="secondary"
        className=" border-black border-[1px] text-black-900 rounded-full"
      >
        Sport
      </Button>
      <ButtonIcon
        className=" rounded-full bg-white w-6 h-6 border-[1px] border-black"
        icon={
          <svg
            width="8"
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
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2173_360)">
              <path
                d="M7.0026 10.0013H5.33594M7.0026 10.0013C7.0026 10.4433 7.1782 10.8673 7.49076 11.1798C7.80332 11.4924 8.22724 11.668 8.66927 11.668C9.1113 11.668 9.53522 11.4924 9.84778 11.1798C10.1603 10.8673 10.3359 10.4433 10.3359 10.0013M7.0026 10.0013C7.0026 9.55927 7.1782 9.13535 7.49076 8.82279C7.80332 8.51023 8.22724 8.33464 8.66927 8.33464C9.1113 8.33464 9.53522 8.51023 9.84778 8.82279C10.1603 9.13535 10.3359 9.55927 10.3359 10.0013M10.3359 10.0013H18.6693M17.0026 15.0013C17.0026 14.5593 16.827 14.1354 16.5144 13.8228C16.2019 13.5102 15.778 13.3346 15.3359 13.3346C14.8939 13.3346 14.47 13.5102 14.1574 13.8228C13.8449 14.1354 13.6693 14.5593 13.6693 15.0013M17.0026 15.0013C17.0026 15.4433 16.827 15.8673 16.5144 16.1798C16.2019 16.4924 15.778 16.668 15.3359 16.668C14.8939 16.668 14.47 16.4924 14.1574 16.1798C13.8449 15.8673 13.6693 15.4433 13.6693 15.0013M17.0026 15.0013H18.6693M13.6693 15.0013H5.33594M17.0026 5.0013C17.0026 4.55927 16.827 4.13535 16.5144 3.82279C16.2019 3.51023 15.778 3.33464 15.3359 3.33464C14.8939 3.33464 14.47 3.51023 14.1574 3.82279C13.8449 4.13535 13.6693 4.55927 13.6693 5.0013M17.0026 5.0013C17.0026 5.44333 16.827 5.86725 16.5144 6.17981C16.2019 6.49237 15.778 6.66797 15.3359 6.66797C14.8939 6.66797 14.47 6.49237 14.1574 6.17981C13.8449 5.86725 13.6693 5.44333 13.6693 5.0013M17.0026 5.0013L18.6693 5.0013M13.6693 5.0013H5.33594"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2173_360"
                x="-2"
                y="0"
                width="28"
                height="28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2173_360"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2173_360"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        }
        colorScheme="secondary"
        className=" border-black border-[1px] text-black-900 rounded-full"
      >
        Filter
      </Button>
    </div>
  );
};
