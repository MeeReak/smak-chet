"use client";

import React from "react";
import { Trending, FilteredCardDisplay } from "@/components";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
     
      <div className="max-w-[1024px] m-auto space-y-5 z-10 mt-[100px] mb-20">
        <Trending
          className="flex gap-4 max-[640px]:overflow-hidden max-[640px]:overflow-x-auto"
          topEvent={
            <Image
              src="/assets/image/volunteer.svg"
              alt=""
              width={500}
              height={250}
              className="rounded-xl"
            ></Image>
          }
          secondEvent={
            <Image
              src="/assets/image/volunteer.svg"
              alt=""
              width={500}
              height={250}
              className="rounded-xl"
            ></Image>
          }
        />

        <FilteredCardDisplay />
      </div>
    </>
  );
};

export default Homepage;
