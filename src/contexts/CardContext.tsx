"use client";

import React, { createContext, useState, ReactNode } from "react";

export interface CardModal {
  id: string;
  src: string;
  alt: string;
  title: string;
  date: string;
  location: string;
  isFavorite: boolean;
}

interface CardContextProp {
  children: ReactNode;
}

interface ContextProps {
  CardInfo: CardModal[];
  setCardInfo: React.Dispatch<React.SetStateAction<CardModal[]>>;
  toggleFavorite: (id: string) => void;
}

export const MyContext = createContext<ContextProps>({
  CardInfo: [],
  setCardInfo: () => {},
  toggleFavorite: () => {},
});

const CardContext: React.FC<CardContextProp> = ({ children }) => {
  
  const [CardInfo, setCardInfo] = useState([
    {
      id: "1",
      src: "/assets/image/National_day_of_Science,Technology_and_Innovation.png",
      alt: "National day of Science, Technology and Innovation 2024",
      title: "National day of Science, Technology and Innovation 2024",
      date: "Mar 03 2024",
      location: "Phnom Penh",
      isFavorite: false,
    },
    {
      id: "2",
      src: "/assets/image/cambodia_book_fair.png",
      alt: "Cambodia Book Fair",
      title: "Cambodia Book Fair",
      date: "Oct 25 2024",
      location: "Phnom Penh",
      isFavorite: false,
    },
    {
      id: "3",
      src: "/assets/image/ace_volunteer.png",
      alt: "ACE Graduation Ceremony",
      title: "ACE Graduation Ceremony",
      date: "May 18 2024",
      location: "Phnom Penh",
      isFavorite: false,
    },
    {
      id: "4",
      src: "/assets/image/National_day_of_Science,Technology_and_Innovation.png",
      alt: "National day of Science, Technology and Innovation 2024",
      title: "National day of Science, Technology and Innovation 2024",
      date: "Mar 03 2024",
      location: "Phnom Penh",
      isFavorite: false,
    },
    {
      id: "5",
      src: "/assets/image/cambodia_book_fair.png",
      alt: "Cambodia Book Fair",
      title: "Cambodia Book Fair",
      date: "Oct 25 2024",
      location: "Phnom Penh",
      isFavorite: false,
    },
    {
      id: "6",
      src: "/assets/image/ace_volunteer.png",
      alt: "ACE Graduation Ceremony",
      title: "ACE Graduation Ceremony",
      date: "May 18 2024",
      location: "Phnom Penh",
      isFavorite: false,
    },
  ]);

  function toggleFavorite(id: string) {
    const updatedCard = CardInfo.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isFavorite: !card.isFavorite,
        };
      }
      return card;
    });
    setCardInfo(updatedCard);
  }

  const Contextvalue = {
    toggleFavorite,
    CardInfo,
    setCardInfo,
  };
  return (
    <MyContext.Provider value={Contextvalue}>{children}</MyContext.Provider>
  );
};

export default CardContext;
