import React from 'react'
import Image from 'next/image'
import { InputData, Typography } from '@/components'
interface UserOptionProps{
  imgUrl: string
  text: string
}
const UserOption = ({imgUrl, text}) => {
  return (
    <div className='flex w-fit h-[230px] px-[35px] flex-col justify-evenly shadow-md rounded-[20px] hover:cursor-pointer hover:shadow-inner'>
      <div className=''>
      <Image
        className=" rounded-full bg-yellow-400 flex justify-center "
        width={130}
        height={130}
        src={imgUrl}
        alt="Image"
      />
      <InputData type={'radio'} placeholder={''} className={''} />
      </div>
        <Typography fontSize='h6'>{text}</Typography>
      
    </div>
  )
}

export {UserOption}

