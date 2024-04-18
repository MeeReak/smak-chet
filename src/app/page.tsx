"use client";

import React, { useState } from "react";
import { Buttontaps, CardList, NotificationCard, Trending } from "@/components";
import Image from "next/image";
import SecondNarbar from "@/components/molechules/SecondNarbar";
import Dropdown from "@/components/molechules/Dropdown/Dropdown";

const Homepage = () => {
  const [filtered, setFiltered] = useState<number>(0);

  return (
    <>
      {" "}
      <div className="max-w-[1024px] m-auto space-y-5 z-10 mt-[100px] ">
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
        ></Trending>
        {/* button of filter feature */}
        <Buttontaps setFiltered={setFiltered} filtered={filtered} />

        {/* display cards */}
        <CardList />

        {/* Second Narbar */}
        <SecondNarbar />
      </div>
    </>
  );
};

export default Homepage;
