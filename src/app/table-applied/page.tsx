"use client"

import React, { useContext } from "react";
import { Button, ButtonIcon, Typography } from "@/components";
import { MyContext } from "@/contexts/CardContext";
import Image from "next/image";

const Page = () => {
  const { CardUser } = useContext(MyContext);

  return (
    <div className="bg-[#F4FBFF]">
      <div className="bg-white mx-auto">
        <div className="w-[1024px] h-[159px] flex justify-between items-center mt-10 px-12 mx-auto">
          <Typography fontWeight="bold" fontSize="h3">
            Table Of Volunteers
          </Typography>
        </div>
        <div className="flex justify-center items-center gap-28">
          {/* table total */}
          <div className="w-[350px] h-[120px] mb-14 rounded-[10px] border-[#E8E8E8]">
            <div>
              <Typography color="blue" fontSize="h3">
                Total
              </Typography>
            </div>
            <div className="flex gap-36 justify-center items-center">
              <div className="flex">
                <Typography fontWeight="medium" fontSize="h2">
                  150
                </Typography>
                <Typography fontSize="h5" color="grey" className="mt-4">
                  Candidates
                </Typography>
              </div>
              <div>
                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 57 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.3502 0C23.4414 0 19.462 4.63485 19.462 10.3522C19.462 14.3174 21.3761 17.7612 24.1868 19.5L20.9275 21.0069L12.254 25.02C11.4161 25.438 10.9979 26.1467 10.9979 27.1498V36.6793C11.0668 37.8707 11.7834 38.9812 12.9452 39H43.8022C45.1286 38.8849 45.7995 37.8191 45.8126 36.6793V27.1498C45.8126 26.1467 45.3944 25.438 44.5566 25.02L36.1971 21.0069L32.7231 19.365C35.4184 17.587 37.2385 14.2177 37.2385 10.3523C37.2384 4.63485 33.259 0 28.3502 0ZM14.0136 3.6404C11.9011 3.72043 10.2269 4.63233 8.95498 6.08534C7.54803 7.83474 6.86213 9.91178 6.84888 11.978C6.93528 15.0334 8.30566 17.9258 10.7453 19.4388L1.00524 23.9542C0.334875 24.2049 0 24.79 0 25.7095V33.3576C0.052345 34.3719 0.58026 35.2244 1.57011 35.239H8.0436V27.1498C8.15072 24.9872 9.16874 23.2391 10.9979 22.3861L17.4696 19.3146C17.9724 19.022 18.4544 18.6243 18.9152 18.1228C16.2469 14.0155 15.8763 9.09612 17.596 4.76928C16.4775 4.0864 15.2205 3.64755 14.0136 3.6404ZM42.9214 3.6404C41.54 3.66926 40.2633 4.17676 39.2146 4.89348C40.8874 9.25951 40.426 14.1819 37.9567 17.9967C38.5014 18.6236 39.0684 19.1045 39.6549 19.4389L45.8758 22.3861C47.7709 23.4229 48.7481 25.1865 48.7669 27.1499V35.239H55.4281C56.5236 35.1447 56.9905 34.273 57 33.3576V25.7096C57 24.8736 56.6651 24.2886 55.9948 23.9542L46.3793 19.3758C48.8729 17.5416 50.1251 14.7926 50.1493 11.978C50.083 9.75028 49.4009 7.68178 48.0432 6.08534C46.6246 4.55007 44.865 3.65665 42.9214 3.6404Z"
                    fill="#E0E0E0"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* table accepted */}
          <div className="w-[350px] h-[120px] mb-14 rounded-[10px] border-[#E8E8E8]">
            <div>
              <Typography color="green" fontSize="h3">
                Accepted
              </Typography>
            </div>
            <div className="flex gap-36 justify-center items-center">
              <div className="flex ">
                <Typography fontWeight="medium" fontSize="h2">
                  130
                </Typography>
                <Typography fontSize="h5" color="grey" className="mt-4">
                  Candidates
                </Typography>
              </div>
              <div>
                <svg
                  width="50"
                  height="49"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4151_2005)">
                    <path
                      d="M47 19.1C47 18.543 46.8025 18.0089 46.4508 17.6151C46.0992 17.2212 45.6223 17 45.125 17H8.875C8.37772 17 7.90081 17.2212 7.54917 17.6151C7.19754 18.0089 7 18.543 7 19.1C7 19.657 7.19754 20.1911 7.54917 20.5849C7.90081 20.9788 8.37772 21.2 8.875 21.2H45.125C45.6223 21.2 46.0992 20.9788 46.4508 20.5849C46.8025 20.1911 47 19.657 47 19.1ZM47 27.5C47 26.943 46.8025 26.4089 46.4508 26.0151C46.0992 25.6213 45.6223 25.4 45.125 25.4H8.875C8.37772 25.4 7.90081 25.6213 7.54917 26.0151C7.19754 26.4089 7 26.943 7 27.5C7 28.057 7.19754 28.5911 7.54917 28.9849C7.90081 29.3787 8.37772 29.6 8.875 29.6H32.515C34.3144 28.6765 36.2706 28.1989 38.25 28.2C40.2294 28.1989 42.1856 28.6765 43.985 29.6H45.125C45.6223 29.6 46.0992 29.3787 46.4508 28.9849C46.8025 28.5911 47 28.057 47 27.5ZM24.555 42.2C24.4439 43.6023 24.5019 45.015 24.7275 46.4H8.875C8.37772 46.4 7.90081 46.1787 7.54917 45.7849C7.19754 45.3911 7 44.857 7 44.3C7 43.743 7.19754 43.2089 7.54917 42.8151C7.90081 42.4212 8.37772 42.2 8.875 42.2H24.555ZM27.6425 33.8C26.7132 35.0601 25.9689 36.4778 25.4375 38H8.875C8.37772 38 7.90081 37.7787 7.54917 37.3849C7.19754 36.9911 7 36.457 7 35.9C7 35.343 7.19754 34.8089 7.54917 34.4151C7.90081 34.0212 8.37772 33.8 8.875 33.8H27.6425ZM49.5 43.6C49.5 40.2583 48.3147 37.0534 46.2049 34.6905C44.0952 32.3275 41.2337 31 38.25 31C35.2663 31 32.4048 32.3275 30.295 34.6905C28.1853 37.0534 27 40.2583 27 43.6C27 46.9417 28.1853 50.1466 30.295 52.5095C32.4048 54.8725 35.2663 56.2 38.25 56.2C41.2337 56.2 44.0952 54.8725 46.2049 52.5095C48.3147 50.1466 49.5 46.9417 49.5 43.6ZM43.25 38C43.4758 37.7573 43.7747 37.6182 44.0876 37.6104C44.4004 37.6025 44.7046 37.7264 44.9399 37.9576C45.1751 38.1887 45.3244 38.5103 45.3583 38.8588C45.3921 39.2072 45.308 39.5572 45.1225 39.8396L44.9725 40.03L36.1925 50.222C35.9699 50.4593 35.6771 50.5965 35.37 50.6073C35.0629 50.6182 34.763 50.5019 34.5275 50.2808L34.36 50.0932L31.01 45.4872C30.8111 45.2163 30.7102 44.8717 30.7273 44.5215C30.7444 44.1713 30.8782 43.8411 31.1023 43.5961C31.3263 43.3511 31.6244 43.2092 31.9374 43.1985C32.2503 43.1879 32.5555 43.3091 32.7925 43.5384L32.95 43.7176L35.4475 47.1532L43.25 38Z"
                      fill="#E0E0E0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4151_2005">
                      <rect width="50" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1024px] mx-auto mt-10">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-white border-[#E8E8E8] h-[50px] rounded-t-md">
              <th colSpan={5} className="text-start font ">
                Cambodia Book Fair
              </th>
            </tr>
            <tr>
              <th className="h-[50px]">Profile</th>
              <th className="h-[50px]">Name</th>
              <th className="h-[50px]">Date</th>
              <th className="h-[50px]">Gmail</th>
              <th className="h-[50px]">Action</th>
            </tr>
          </thead>
          <tbody className="text-center bg-white">
            {CardUser.map((item, index) => (
              <tr key={index}>
                <td className="">
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.profile}
                      alt=""
                      width={60}
                      height={60}
                    ></Image>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.gmail}</td>
                <td>
                  <div className="flex items-center justify-center gap-4">
                    <div>
                      <Button className="flex items-center hover:[#BDD8FF] w-[60px] h-[40px] rounded-[15px] text-center justify-center bg-[#E8E8E8] !text-[16px]">
                        View
                      </Button>
                    </div>
                    <button className="rounded-full bg-green-400 w-[23px] h-[23px]"></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
