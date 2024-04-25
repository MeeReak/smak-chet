"use client";
import React, { useState } from "react";

import { Button, ButtonIcon, Typography } from "@/components/atoms";
import Link from "next/link";

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <ButtonIcon
        onclick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 text-black rounded-full p-2 ml-[10px] hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out hidden sm:flex"
        icon={
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#D2E5FF"/>
<path d="M29.6515 29.4054C30.2043 29.2902 30.5336 28.7117 30.2589 28.2183C29.6533 27.1307 28.6993 26.1749 27.4788 25.4465C25.907 24.5085 23.9812 24 22 24C20.0188 24 18.0929 24.5085 16.5211 25.4465C15.3007 26.1749 14.3467 27.1307 13.7411 28.2183C13.4664 28.7117 13.7956 29.2902 14.3484 29.4054C19.3952 30.4572 24.6047 30.4572 29.6515 29.4054Z" fill="#207BFF"/>
<circle cx="22" cy="18" r="5" fill="#207BFF"/>
</svg>

        }
      />
      {isOpen && (
        <div className="pl-4 absolute -right-[20%] mt-2 bg-white w-[270px] h-[162px] shadow-lg rounded-[10px] box-shadow: 1px -1px 5px 0px #00000040;">
          <Link
            className="flex justify-between items-center"
            href={"/user-profile"}
          >
            My Profile
            <ButtonIcon
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6036 18.5832C19.6058 18.5871 19.6069 18.5897 19.6074 18.5912C19.607 18.593 19.6059 18.5967 19.603 18.6022C19.5911 18.6246 19.558 18.6587 19.4985 18.6712C14.5526 19.7019 9.44733 19.7019 4.50145 18.6712C4.4419 18.6587 4.40887 18.6246 4.39699 18.6022C4.39409 18.5967 4.39296 18.593 4.39254 18.5912C4.39308 18.5897 4.39419 18.5871 4.39636 18.5832C4.93 17.6247 5.78379 16.76 6.90548 16.0905C8.35155 15.2275 10.1426 14.75 12 14.75C13.8574 14.75 15.6484 15.2275 17.0945 16.0906C18.2162 16.76 19.07 17.6247 19.6036 18.5832ZM19.6079 18.5929C19.6078 18.5928 19.6078 18.5926 19.6077 18.5921L19.6079 18.5929ZM4.39209 18.5929C4.39207 18.5929 4.3921 18.5926 4.39225 18.5921L4.39209 18.5929Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="12"
                    cy="8"
                    r="4.25"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              }
            />
          </Link>

          <Link className="flex justify-between items-center" href={""}>
            Languages
            <ButtonIcon
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 21L15.75 9.75L21 21M12 18H19.5M3 5.621C4.9904 5.37332 6.99425 5.24941 9 5.25M9 5.25C10.12 5.25 11.233 5.288 12.334 5.364M9 5.25V3M12.334 5.364C11.176 10.658 7.69 15.08 3 17.502M12.334 5.364C13.23 5.425 14.119 5.511 15 5.621M10.411 14.116C8.77097 12.4486 7.47113 10.478 6.584 8.314"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </Link>

          <Link className="flex justify-between items-center" href={""}>
            Log out
            <ButtonIcon
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12L1.41435 11.5315L1.03953 12L1.41435 12.4685L2 12ZM11 12.75C11.4142 12.75 11.75 12.4142 11.75 12C11.75 11.5858 11.4142 11.25 11 11.25V12.75ZM5.41435 6.53148L1.41435 11.5315L2.58565 12.4685L6.58565 7.46852L5.41435 6.53148ZM1.41435 12.4685L5.41435 17.4685L6.58565 16.5315L2.58565 11.5315L1.41435 12.4685ZM2 12.75H11V11.25H2V12.75Z"
                    fill="black"
                  />
                  <path
                    d="M10 8.13193V7.38851C10 5.77017 10 4.961 10.474 4.4015C10.9479 3.84201 11.7461 3.70899 13.3424 3.44293L15.0136 3.1644C18.2567 2.62388 19.8782 2.35363 20.9391 3.25232C22 4.15102 22 5.79493 22 9.08276V14.9172C22 18.2051 22 19.849 20.9391 20.7477C19.8782 21.6464 18.2567 21.3761 15.0136 20.8356L13.3424 20.5571C11.7461 20.291 10.9479 20.158 10.474 19.5985C10 19.039 10 18.2298 10 16.6115V16.066"
                    stroke="black"
                    stroke-width="1.5"
                  />
                </svg>
              }
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export { UserProfileDropdown };
