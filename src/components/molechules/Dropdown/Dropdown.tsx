"use client";
import { Button, ButtonIcon, Typography } from "@/components/atoms";
import React, { useState } from "react";
import  NotificationCard  from "../Card/NotificationCard";
import Link from "next/link"


interface DropdownProp{
    children : React.ReactNode;
}
const Dropdown:React.FC <DropdownProp> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative inline-block" onClick={toggleDropdown}>
        {children}

        {isOpen && (
          <div className="origin-top-right absolute -right-14 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-auto h-auto py-8 px-5">
            <Typography className="p-2 text-[20px]" fontWeight="bold">Notifications</Typography>
            <div className="flex justify-between">
                <Typography className="p-2">Earlier</Typography>
                <Link href={'/notification'}>   
                    <Typography className="p-2" color="blue">See all</Typography>
                </Link>
            </div>
              <NotificationCard classname="w-[305px] h-[75px]"/>
              <NotificationCard classname="w-[305px] h-[75px]"/>
              <NotificationCard classname="w-[305px] h-[75px]"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
