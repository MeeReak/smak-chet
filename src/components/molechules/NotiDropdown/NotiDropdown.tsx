"use client";
import { ButtonIcon, Typography } from "@/components/atoms";
import { NotiCardList } from "@/components/organisms";
import { useState , useEffect } from "react";
import Link from 'next/link'

const NotiDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <ButtonIcon
        onclick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 text-black rounded-full p-2 hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out hidden sm:flex"
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
      {isOpen && (
        <div className="absolute -right-[100%] mt-2 w-[306px] bg-white rounded-md shadow-lg">
          <div className="p-2">
            <Typography fontWeight="bold" fontSize="h3">Notification</Typography>
            <div className="flex justify-between my-[10px]">
                <Typography fontSize="h5" fontWeight="semibold">Earlier</Typography>
                <Link href="/notification">
                    <Typography fontSize="h5" fontWeight="semibold" color="blue">See all</Typography>
                </Link>
            </div>
            <NotiCardList></NotiCardList>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotiDropdown;
