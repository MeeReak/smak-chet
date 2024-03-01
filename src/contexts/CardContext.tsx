"use client"

import React , {createContext , useState ,ReactNode} from 'react'

interface CardModal{
    src: string,
    alt: string,
    title : string,
    description : string,
    date : string,
    location : string
}

interface CardContextProp{
    children : ReactNode
}

interface ContextProps{
    CardInfo : CardModal[]
}

export const MyContext = createContext<ContextProps>(
    {
        CardInfo : []
    }
);


const CardContext:React.FC<CardContextProp> = ({children}) => {

    const [CardInfo , setCardInfo] = useState([
        {
          src: "/assets/image/cambodiaBookFair.svg",
          alt: "Cambodia Book Fair",
          title: "Cambodia Book Fair",
          description:
            "Grab a chance to be this special National Event's Volunteer...",
          date: "Dec 12 2024",
          location: "Phnom Penh",
        },
        {
          src: "/assets/image/volunteeer.svg",
          alt: "Cambodia Book Fair",
          title: "Cambodia Book Fair",
          description:
            "Grab a chance to be this special National Event's Volunteer...",
          date: "Dec 12 2024",
          location: "Phnom Penh",
        },
        {
          src: "/assets/image/international-camp.svg",
          alt: "Cambodia Book Fair",
          title: "Cambodia Book Fair",
          description:
            "Grab a chance to be this special National Event's Volunteer...",
          date: "Dec 12 2024",
          location: "Phnom Penh",
        },
        {
          src: "/assets/image/cambodiaBookFair.svg",
          alt: "Cambodia Book Fair",
          title: "Cambodia Book Fair",
          description:
            "Grab a chance to be this special National Event's Volunteer...",
          date: "Dec 12 2024",
          location: "Phnom Penh",
        },
        {
          src: "/assets/image/volunteeer.svg",
          alt: "Cambodia Book Fair",
          title: "Cambodia Book Fair",
          description:
            "Grab a chance to be this special National Event's Volunteer...",
          date: "Dec 12 2024",
          location: "Phnom Penh",
        },
        {
          src: "/assets/image/international-camp.svg",
          alt: "Cambodia Book Fair",
          title: "Cambodia Book Fair",
          description:
            "Grab a chance to be this special National Event's Volunteer...",
          date: "Dec 12 2024",
          location: "Phnom Penh",
        },
      ]);

      const Contextvalue = {
        CardInfo,
        setCardInfo
      }
  return (
    <MyContext.Provider value={Contextvalue}>
        {children}
    </MyContext.Provider> 
  )
}

export default CardContext
