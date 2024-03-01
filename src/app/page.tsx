"use client";

import React, { useContext } from "react";
import { Button, Trending } from "@/components";
import Image from "next/image";
import { MyContext } from "@/contexts/CardContext";
import { Buttontaps } from "@/components";
import { Card } from "@/components";

const Homepage = () => {
  const { CardInfo } = useContext(MyContext);
  return (
    <div className="w-[1024px] m-auto space-y-5">
      <Trending
        className="flex gap-4"
        topEvent={
          <Image
            src="/assets/image/cambodiaBookFair.svg"
            alt=""
            width={500}
            height={250}
            className="rounded-xl"
          ></Image>
        }
        secondEvent={
          <Image
            src="./volunteer.svg"
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
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
            date={item.date}
            location={item.location}
          />
        ))}
      </div>
      <Button colorScheme="primary" className="ml-[45%]">
        See More
      </Button>
    </div>
  );
};

export default Homepage;
