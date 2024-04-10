"use client";

import React, { useState } from "react";
import Image from "next/image";
import { InputSearch, Button, ButtonIcon } from "@/components";
import Link from "next/link";

const Navbar = () => {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <header>
      <div className="fixed top-0 left-0 right-0  m-auto z-50 bg-opacity-50 backdrop-blur-md bg-white">
        {" "}
        <div className=" h-[80px] flex flex-row justify-between aligns-center w-[1024px] m-auto ">
          <div className="flex flex-row justify-right items-center">
            <Link href="/">
              <Image
                className="pb-2"
                src={"assets/icons/smakchet-logo.svg"}
                alt="smakchet-logo"
                width={140}
                height={50}
              />
            </Link>
            <InputSearch />
          </div>
          <div className=" flex flex-row space-x-[10px] items-center">
            {login ? (
              <>
                <Link href="/login">
                  <Button
                    round="lg"
                    size="h4"
                    className="py-[13px] px-5  border-[1px] hover:bg-[#bdd8ff] hover:border-[#207BFF] hover:text-[#207BFF]"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    round="lg"
                    size="h4"
                    bgColor="primary"
                    colorScheme="White"
                    className="py-[13px] px-5 border-[1px] rounded-[10px]"
                  >
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <ButtonIcon
                  className="bg-gray-100 text-black rounded-full p-2 hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  }
                />
                <ButtonIcon
                  className="bg-gray-100 text-black rounded-full p-2 hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.44784 8.96942C6.76219 6.14032 9.15349 4 12 4V4C14.8465 4 17.2378 6.14032 17.5522 8.96942L17.804 11.2356C17.8072 11.2645 17.8088 11.279 17.8104 11.2933C17.9394 12.4169 18.3051 13.5005 18.8836 14.4725C18.8909 14.4849 18.8984 14.4973 18.9133 14.5222L19.4914 15.4856C20.0159 16.3599 20.2782 16.797 20.2216 17.1559C20.1839 17.3946 20.061 17.6117 19.8757 17.7668C19.5971 18 19.0873 18 18.0678 18H5.93223C4.91268 18 4.40291 18 4.12434 17.7668C3.93897 17.6117 3.81609 17.3946 3.77841 17.1559C3.72179 16.797 3.98407 16.3599 4.50862 15.4856L5.08665 14.5222C5.10161 14.4973 5.10909 14.4849 5.11644 14.4725C5.69488 13.5005 6.06064 12.4169 6.18959 11.2933C6.19123 11.279 6.19283 11.2645 6.19604 11.2356L6.44784 8.96942Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9.10222 18.4059C9.27315 19.1501 9.64978 19.8077 10.1737 20.2767C10.6976 20.7458 11.3396 21 12 21C12.6604 21 13.3024 20.7458 13.8263 20.2767C14.3502 19.8077 14.7269 19.1501 14.8978 18.4059"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                />

                <ButtonIcon
                  className="bg-[#bdd8ff] text-white rounded-full p-2"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.6496 19.4054C20.2024 19.2902 20.5316 18.7117 20.2569 18.2183C19.6513 17.1307 18.6973 16.1749 17.4769 15.4465C15.9051 14.5085 13.9792 14 11.998 14C10.0168 14 8.09097 14.5085 6.51917 15.4465C5.29873 16.1749 4.34471 17.1307 3.73913 18.2183C3.46443 18.7117 3.79367 19.2902 4.34648 19.4054V19.4054C9.39329 20.4572 14.6027 20.4572 19.6496 19.4054V19.4054Z"
                        fill="#207BFF"
                      />
                      <circle cx="12" cy="8" r="5" fill="#207BFF" />
                    </svg>
                  }
                />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
