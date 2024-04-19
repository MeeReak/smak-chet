"use client";
import { CardModal, MyContext } from "@/contexts/CardContext";
import React, { useContext, useState } from "react";
import { Card } from "../Card";

const FavPage = () => {
  const { CardInfo } = useContext(MyContext);
  return (
    <>
      <div className="grid xl:grid-cols-3 gap-[22px] justify-items-center">
        {CardInfo.filter((item) => item.isFavorite).map((item, index) => (
          <Card
            key={item.id} // Assuming `item.id` is unique; otherwise, you can fallback to index
            id={item.id}
            src={item.src}
            alt={item.alt}
            title={item.title}
            date={item.date}
            location={item.location}
            isFavorite={item.isFavorite}
          />
        ))}
      </div>
    </>
  );
};

export default FavPage;
