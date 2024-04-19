
import React from "react";
import Image from "next/image";
import {
  Button,
  ButtonIcon,
  InputData,
  InputSearch,
  Typography,
} from "@/components";

const page = () => {
  return (
    <div className=" mt-[141px] xl:mx-[273px] md:mx-5 sm:mx-2"> {/* Base container */}
      {/* Profile and Button Section */}
      <div className="flex flex-col items-center gap-4 md:flex-row"> {/* Responsive row */}
        <div className="profile-image w-32 h-32 overflow-hidden md:w-48 md:h-48"> {/* Responsive image */}
          <Image
            src={"/assets/image/profile.png"}
            alt={"profile image"}
            width={160}
            height={160}
          />
        </div>
        <div className="flex flex-col items-center xl:items-start space-y-4"> {/* Responsive button section */}
    
           <Button
              className="space-x-9 py-3 border-2 border-[#4EA5FF] w-64 rounded-[10px] "
              leftIcon={
                <Image
                  src={"/assets/icons/refresh.svg"}
                  width={30}
                  height={30}
                  alt={"profile image"}
                />
              }
            >
              <Typography fontSize="h3">Change Avatar</Typography>
            </Button>
           
          <Typography fontSize="h3" className="text-gray-500">
            Upload JPG, PNG image required
          </Typography>
        </div>
      </div>

      {/* Input Section */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 "> {/* Responsive grid */}
        <div>
          <Typography>Full Name</Typography>
          <InputData placeholder="" type="text" className="w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <Typography>Address</Typography>
          <InputData placeholder="" type="address" className="w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <Typography>Email</Typography>
          <InputData placeholder="" type="email" className="w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <Typography>Phone Number</Typography>
          <InputData placeholder="" type="text" className="w-full border border-gray-300 rounded-md" />
        </div>
        <div className="col-span-full"> {/* Full-width description */}
          <Typography>Description</Typography>
          <InputData placeholder=""  type="text" className="w-full h-32 border border-gray-300 rounded-md" />
        </div>
      </div>

      {/* Upload section */}
      <div className="flex justify-center mt-8 mx-24">
       
        <Button
          bgColor="primary"
          colorScheme="White"
          size="h3"
          className="xl:px-[165px] xl:py-[16px] px-[120px] py-[16px] justify-center"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default page;
