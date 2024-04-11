import React from 'react'
import Image from 'next/image';
import { Typography } from '@/components/atoms';

interface NotificationCardProp{
  classname ?: string;
}
const NotificationCard:React.FC<NotificationCardProp> = ({classname}) => {
  return (
    <div>
      <div className={`${classname} m-auto rounded-[5px] p-2 flex justify-between items-center hover:bg-gray-100`}>
        <div className='w-[20%] h-[90%]'>
            <Image 
              src={'/assets/image/cambodia_book_fair.png'} 
              alt={'event Image'}
              width= {55}
              height={55}
              className='w-full h-full object-cover rounded-[5px]'
              >
            </Image>
        </div>
        <div className='w-[70%] h-[100%]'>
          <div className=''>
            <Typography fontWeight='bold' className='text-[11px] line-clamp-2'>
                National day of Science, Technology and Innovation <span className='font-normal'>is about to end</span> 
            </Typography>
          </div>
          <div className=''>
            <Typography fontWeight='normal' className='text-[11px]' color='blue'>
                11 hours ago
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationCard;
