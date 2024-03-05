"use client";

import { Buttontaps, Trending, Card } from "@/components";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { MyContext } from "@/contexts/CardContext";

const FirstPage = () => {
  const { CardInfo } = useContext(MyContext);

  return (
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
      <Buttontaps />
      <div className="grid grid-cols-3 gap-[22px]">
        {CardInfo.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            src={item.src}
            alt={item.alt}
            title={item.title}
            date={item.date}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default FirstPage;
