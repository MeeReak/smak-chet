"use client";

import React, { useState } from "react";
import { Buttontaps, CardList, Trending } from "@/components";
import Image from "next/image";

const Homepage = () => {
  const [filtered, setFiltered] = useState<number>(0);

  return (
    <>
      {" "}
      <div className="w-[1024px] m-auto space-y-5 z-10 mt-[100px] ">
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
        <Buttontaps setFiltered={setFiltered} filtered={filtered} />

        {/* display cards */}
        <CardList />
      </div>
    </>
  );
};

export default Homepage;
