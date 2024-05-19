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
    // <div className="bg-[#F4FBFF]">
    //   <div className="bg-white mx-auto">
    //     <div className="w-[1024px] h-[159px] flex justify-between items-center mt-16 px-12 mx-auto">
    //       <Typography fontWeight="semibold" fontSize="h2">
    //         Table Of Volunteers
    //       </Typography>
    //       <div className="flex justify-center items-center gap-6 mt-12">
    //         {/* table total */}
    //         <div className="w-[220px] h-[70px] mb-14 rounded-[10px] border-[#E8E8E8] border-[0.5px] flex justify-center items-center gap-2 shadow-md">
    //           <Typography color="blue" fontSize="h3" fontWeight="medium">
    //             Total :
    //           </Typography>
    //           <div className="flex justify-center items-center">
    //             <Typography fontWeight="medium" fontSize="h3">
    //               {`${totalCondidate}`}
    //               {/* Dynamically display the count of CardUser */}
    //             </Typography>
    //             <Typography fontSize="h5" color="grey" className="mt-1">
    //               Candidates
    //             </Typography>
    //           </div>
    //         </div>
    //         {/* table accepted */}
    //         <div className="w-[250px] h-[70px] mb-14 rounded-[10px] border-[#E8E8E8] border-[0.5px] flex justify-center items-center gap-2 shadow-md ">
    //           <Typography color="green" fontSize="h3" fontWeight="medium">
    //             Accepted :
    //           </Typography>
    //           <div className="flex justify-center items-center">
    //             <Typography fontWeight="medium" fontSize="h3">
    //               130
    //             </Typography>
    //             <Typography fontSize="h5" color="grey" className="mt-1">
    //               Candidates
    //             </Typography>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="w-[1024px] mx-auto mt-10">
    //     <table className="table-auto w-full">
    //   <thead>
    //     <tr className="bg-white border-[#E8E8E8] h-[50px]">
    //       <th
    //         colSpan={5}
    //         className="text-start font pl-7 rounded-t-lg border-[#E8E8E8]"
    //       >
    //         Cambodia Book Fair
    //       </th>
    //     </tr>
    //     <tr>
    //       <th className="h-[50px] border-[#E8E8E8]"></th>
    //       <th className="h-[50px] border-[#E8E8E8]">Name</th>
    //       <th className="h-[50px] border-[#E8E8E8]">Date</th>
    //       <th className="h-[50px] border-[#E8E8E8]">Email</th>
    //       <th className="h-[50px] border-[#E8E8E8]"></th>
    //     </tr>
    //   </thead>
    //   <tbody className="text-center bg-white">
    //     {CardUser.map((item, index) => (
    //       <tr key={index}>
    //         <td>
    //           <div className="flex justify-center items-center">
    //             <Image
    //               src={item.profile}
    //               alt=""
    //               width={60}
    //               height={60}
    //             ></Image>
    //           </div>
    //         </td>
    //         <td>{item.name}</td>
    //         <td>{item.date}</td>
    //         <td>{item.gmail}</td>
    //         <td>
    //           <div className="flex items-center justify-center gap-4">
    //             <Button className="flex items-center hover:[#BDD8FF] w-[60px] h-[40px] rounded-[15px] text-center justify-center bg-[#E8E8E8] !text-[16px]">
    //               View
    //             </Button>
    //             <div>
    //               <button className="rounded-full w-[23px] h-[23px] bg-green-500 flex justify-center items-center"></button>
    //             </div>
    //           </div>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    //   </div>
    // </div>
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
                  <td className="text-gray-500">{item.status}</td>
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
