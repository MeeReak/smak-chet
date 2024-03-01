"use client"
import { Typography } from "@/components";
import React, { ReactNode } from "react";
import { useState , useEffect } from "react";

interface TrendingProps {
  topEvent?: ReactNode;
  secondEvent?: ReactNode;
  className?: string;
}
const Trending: React.FC<TrendingProps> = ({
  topEvent,
  secondEvent,
  className,
}) => {
  const [ScreenSize, setScreenSize] = useState("sm");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleScreenChange = (mq: MediaQueryListEvent) => {
      setScreenSize(mq.matches ? "xl" : "sm");
    };

    handleScreenChange(mediaQuery);

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);
  return (
    <div>
      <Typography fontSize="h3" variant="bold" className="my-5" screensize={ScreenSize}>
        Trending in <span className="text-red-500">Smakchet</span>
      </Typography>
      <div className={`${className}`}>
        {topEvent}
        {secondEvent}
      </div>
    </div>
  );
};

export { Trending };
