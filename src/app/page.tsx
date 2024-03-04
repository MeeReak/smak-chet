"use client";

import React, { useState } from "react";
import { Buttontaps, CardList, Trending } from "@/components";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
      {" "}
      <div className="w-[1024px] m-auto space-y-5">
        <Trending
          className="flex gap-4"
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
        ></Trending>

        {/* button of filter feature */}
        <Buttontaps />

        {/* display cards */}
        <CardList />
      </div>
    </>
  );
};

export default Homepage;
