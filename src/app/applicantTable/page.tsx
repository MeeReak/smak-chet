"use client";
import React, { useContext } from "react";
import { Typography, Button } from "@/components";
import { MyContext } from "@/contexts/CardContext";
import Image from "next/image";
import { Table } from "@nextui-org/react";

const Page = () => {
  const { CardUser } = useContext(MyContext);

  const totalCandidate = CardUser.length;

  console.log(totalCandidate);

  return (
 
    <div className="bg-[#FAFAFA]">
      <div className="ml-[121px] mr-[128px]">
        {/* Header section */}
        <div className="mt-[30px] mb-[55px] flex flex-row items-center justify-between">
          {/* Go back */}
          <div>
            <Button
              className="!outline-none !border-none"
              leftIcon={
                <Image
                  src={"assets/icons/back.svg"}
                  alt={""}
                  width={35}
                  height={35}
                />
              }
            >
              <Typography fontSize="h2">Applied</Typography>
            </Button>
          </div>
          {/* number of Applied & Accepted */}
          <div className="flex flex-row justify-center items-end gap-x-[13px] ">
            <Button
              className="cursor-default justify-center items-center w-[141px] h-[50px] border-[0.4] border-[#BDBDBD] rounded-[10px]"
              leftIcon={
                <Image
                  src={"assets/icons/people.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              }
            >
              <Typography>{`${totalCandidate}`} Applied</Typography>
            </Button>
            <Button
              className="cursor-default items-center justify-center w-[155px] h-[50px] border-[0.4] border-[#BDBDBD] rounded-[10px]"
              leftIcon={
                <Image
                  src={"assets/icons/check-inline.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              }
            >
              <Typography>{`${totalCandidate}`} Accepted</Typography>
            </Button>
          </div>
        </div>
        {/* Table of applied volunteer */}
        <div>
          <table className="w-full table-auto rounded-t-[15px] overflow-hidden ">
            {/* table header */}
            <thead className="bg-[#D2E5FF] h-[68px] text-start">
              <tr className="text-center">
                <th className="pl-[30px]">
                  <Typography align="left"
                   fontSize="h3" color="grey">N°</Typography>
                </th>
                <th>
                  <Typography align="left" fontSize="h3" color="grey">Name</Typography>
                </th>
                <th  >
                  <Typography align="left" fontSize="h3" color="grey">Email</Typography>
                </th>
                <th >
                  <Typography align="left" fontSize="h3" color="grey">Status</Typography>
                </th>
                <th >
                  <Typography align="left" fontSize="h3" color="grey">Date</Typography>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-start bg-white">
              {CardUser.map((item, index) => (
                <tr className="h-[65px]" key={index}>
                  <td className="pl-[30px]">
                   {`0${item.id}`}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.gmail}</td>
                  <td className={`${item.status === "Accepted" ? "text-green-500": item.status === "Rejected"? "text-red-500": "text-gray-500"}`}>{item.status}</td>
                  <td>{item.date}</td>
                  <td>
                      <Button className="flex items-center hover:bg-[#207BFF] w-[50px] h-[23px] rounded-[15px] text-center justify-center bg-white hover:text-white !text-[10px] text-[#757575]">
                        View
                      </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
