import { Button, Typography } from "@/components";
import { InputRegister } from "@/components/molechules/InputRegister";
import React from "react";

const page = () => {
  return (
    <div className=" md:bg-[#F0F2F5] flex justify-center">
      <div className=" mt-[110px] w-[783px] bg-white flex flex-col md:items-start items-center">
        <Typography className=" md:ml-[33px] md:mt-5" fontWeight="bold" fontSize="h2">Fill in your information</Typography>
        <InputRegister
          label="Full Name"
          placeholder="Your Answers"
          type={"string"}
        />
        <InputRegister
          label="Positions"
          placeholder="Your Answers"
          type={"string"}
        />
        <InputRegister
          label="Instistute/Organizations"
          placeholder="Your Answers"
          type={"string"}
        />
        <InputRegister
          label="Email"
          placeholder="Your Answers"
          type={"email"}
        />
        <InputRegister label="Age" placeholder="Your Answers" type={"number"} />
        <InputRegister
          label="Why do you apply this volunteer ?"
          placeholder="Your Answers"
          type={"string"}
        />

        <Button bgColor="primary" className="self-center md:px-[321px] py-4 px-[100px] outline-none md:mt-16 mt-4" colorScheme="White">Continue</Button>
      </div>
    </div>
  );
};

export default page;
