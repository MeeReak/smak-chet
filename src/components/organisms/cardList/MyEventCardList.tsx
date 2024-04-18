import MyEventCard from "@/components/molechules/Card/MyEventCard";
import { MyContext } from "@/contexts/CardContext";
import React, { useContext } from "react";

const MyEventCardList = () => {
  const { CardInfo } = useContext(MyContext);

  return (
    <>
    <MyEventCard/>
      {/* <div className="max-[1030px]:px-5">
        {CardInfo.map((item, index) => (
          <MyEventCard
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            date={item.date}
            location={item.location}
          />
        ))}
      </div> */}
    </>
  );
};

export default MyEventCardList;
