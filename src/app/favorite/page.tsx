import { Typography, ButtonIcon } from "@/components";
import { Delete } from "@/components/molechules/Delete/delete";
import FavPage from "@/components/molechules/Favoritepage/favPage";
import React from "react";

const page = () => {
  return (
    <>
      <div className="xl:w-[1024px] w-screen m-auto space-y-5 z-10 mt-[100px] ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ButtonIcon
              className="xl:hidden block"
              icon={
                <svg
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6003 0.322594C11.701 0.424747 11.7809 0.546059 11.8354 0.679586C11.8899 0.813116 11.918 0.956244 11.918 1.10079C11.918 1.24534 11.8899 1.38847 11.8354 1.522C11.7809 1.65553 11.701 1.77684 11.6003 1.87899L3.69896 9.9002H24.9167C25.204 9.9002 25.4796 10.0161 25.6827 10.2224C25.8859 10.4286 26 10.7084 26 11.0001C26 11.2918 25.8859 11.5716 25.6827 11.7779C25.4796 11.9842 25.204 12.1001 24.9167 12.1001H3.69896L11.6003 20.1213C11.8035 20.3277 11.9177 20.6076 11.9177 20.8995C11.9177 21.1913 11.8035 21.4713 11.6003 21.6777C11.397 21.8841 11.1213 22 10.8338 22C10.5464 22 10.2707 21.8841 10.0674 21.6777L0.317717 11.7783C0.216996 11.6762 0.137093 11.5549 0.0825765 11.4213C0.0280603 11.2878 0 11.1447 0 11.0001C0 10.8556 0.0280603 10.7125 0.0825765 10.5789C0.137093 10.4454 0.216996 10.3241 0.317717 10.2219L10.0674 0.322594C10.168 0.220325 10.2875 0.139196 10.419 0.0838432C10.5505 0.0284901 10.6915 0 10.8338 0C10.9762 0 11.1172 0.0284901 11.2487 0.0838432C11.3802 0.139196 11.4997 0.220325 11.6003 0.322594Z"
                    fill="black"
                  />
                </svg>
              }
            ></ButtonIcon>
            <Typography fontSize="h2" fontWeight="bold">
              Favorite
            </Typography>
          </div>
          <div className="w-[83px] h-[36px] rounded-lg border-[2px] border-gray text-center flex justify-center items-center ">
            <Typography fontSize="h4" color="blue">
              3 Events
            </Typography>
          </div>
        </div>
        <FavPage />
        <Delete/>
      </div>
    </>
  );
};

export default page;
