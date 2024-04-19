
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
    <div className=" mt-[141px] xl:mx-[271px] md:mx-5 mx-[10px]"> {/* Base container */}
      {/* Profile and Button Section */}
      <div className="flex flex-col items-center gap-x-4 md:flex-row"> {/* Responsive row */}
        <div className=" w-32 h-32 overflow-hidden md:w-48 md:h-48"> {/* Responsive image */}
          <Image
            src={"/assets/image/cambodia_book_fair.png"}
            alt={"profile image"}
            className="rounded-full"
            width={160}
            height={160}
          />
        </div>
        <div className="flex flex-col items-center xl:items-start space-y-4"> {/* Responsive button section */}
    
           <Button
              className="space-x-9 py-3 border-2 justify-center border-[#4EA5FF] w-64 rounded-[10px] "
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
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[91px] md:gap-y-12 "> {/* Responsive grid */}
        <div>
          <Typography>Company Name</Typography>
          <InputData placeholder="" type="text" className="w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <Typography>Facebook Link</Typography>
          <InputData placeholder="" type="address" className="w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <Typography>Email</Typography>
          <InputData placeholder="" type="text" className="w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <Typography>Phone Number</Typography>
          <InputData placeholder="" type="address" className="w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <Typography>Address</Typography>
          <InputData placeholder="" type="email" className="w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <Typography>Link Address</Typography>
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
