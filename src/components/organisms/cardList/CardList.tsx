import { Card } from '@/components/molechules'
import { MyContext } from '@/contexts/CardContext'
import React, { useContext } from 'react'


const CardList = () => {

  const {CardInfo} = useContext(MyContext)

  return (
    <>
       <div className="grid grid-cols-3 gap-[22px]">
        {CardInfo.map((item, index) => (
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
    </>
  )
}

export default CardList
