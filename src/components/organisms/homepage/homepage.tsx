"use client";

import { Buttontaps, Trending, Card } from "@/components";
import React, { useState } from "react";
import Image from "next/image";

const FirstPage = () => {
  const [infoCard, setCardInfo] = useState([
    {
      src: "/assets/image/cambodiaBookFair.svg",
      alt: "Cambodia Book Fair",
      title: "National day of Science, Technology and Innovation",
      date: "Dec 12 2024",
      location: "Phnom Penh",
    },
    {
      src: "/assets/image/volunteeer.svg",
      alt: "Cambodia Book Fair",
      title: "National day of Science, Technology and Innovation",
      date: "Dec 12 2024",
      location: "Phnom Penh",
    },
    {
      src: "/assets/image/international-camp.svg",
      alt: "Cambodia Book Fair",
      title: "National day of Science, Technology and Innovation",
      date: "Dec 12 2024",
      location: "Phnom Penh",
    },
    {
      src: "/assets/image/cambodiaBookFair.svg",
      alt: "Cambodia Book Fair",
      title: "National day of Science, Technology and Innovation",
      date: "Dec 12 2024",
      location: "Phnom Penh",
    },
    {
      src: "/assets/image/volunteeer.svg",
      alt: "Cambodia Book Fair",
      title: "National day of Science, Technology and Innovation",
      date: "Dec 12 2024",
      location: "Phnom Penh",
    },
    {
      src: "/assets/image/international-camp.svg",
      alt: "Cambodia Book Fair",
      title: "National day of Science, Technology and Innovation",
      date: "Dec 12 2024",
      location: "Phnom Penh",
    },
  ]);

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
        {infoCard.map((item, index) => (
          <Card
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            date={item.date}
            location={item.location}
          />
        ))}
    </div>
  );
};

export default FirstPage;
