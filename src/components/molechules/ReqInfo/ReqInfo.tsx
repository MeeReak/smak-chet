import { Button, Typography } from "@/components";
import React, { FC, ReactNode } from "react";
import Image from "next/image";

interface ReqInfoProps {
  title?: string;
  description?: string;
}

const ReqInfo: FC<ReqInfoProps> = ({ title, description }) => {
  return (
    <div>
      <Button
        leftIcon={
          <Image
            src="assets/icons/age.svg"
            alt={"age"}
            height={25}
            width={25}
          />
        }
        className="w-[435px]  h-[70px] bg-yellow-500 rounded-xl border-[1px] border-black "
      >
        <div className="bg-red-500">
          <Typography className="font-weight-200" fontSize="h5" align="left">
            Age
          </Typography>
          <Typography className="text-gray-400 " fontSize="h6">
            18 - 51+
          </Typography>
        </div>
      </Button>
    </div>
  );
};
export { ReqInfo };
