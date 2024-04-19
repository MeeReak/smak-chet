import { Card } from "@/components/molechules";
import { MyContext } from "@/contexts/CardContext";
import React, { useContext } from "react";

interface CardListProps {
  cate: string;
}

const CardList: React.FC<CardListProps> = ({ cate }) => {
  const { CardInfo } = useContext(MyContext);

  return (
    <>
      <div className="max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {cate === "All"
          ? CardInfo.map((item, index) => (
              <Card
                id={item.id}
                key={index}
                src={item.src}
                alt={item.alt}
                title={item.title}
                date={item.date}
                location={item.location}
              />
            ))
          : CardInfo.filter((item) => item.cate === cate).map((item, index) => (
              <Card
                id={item.id}
                key={index}
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

export default CardList;
