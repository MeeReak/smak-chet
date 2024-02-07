import { Typography } from "@/components";
import React, { ReactNode } from "react";

interface TrendingProps {
  topEvent?: ReactNode;
  secondEvent?: ReactNode;
  className?: string;
}
const Trending: React.FC<TrendingProps> = ({ topEvent, secondEvent ,className }) => {
  return (
    <div>
       <Typography fontSize="h3" variant="bold">Trending in <span className="text-red-500">Smakchet</span></Typography>
      <div className={`${className}`}>
        {topEvent}
        {secondEvent}
      </div>
    </div>
  );
};

export { Trending };
