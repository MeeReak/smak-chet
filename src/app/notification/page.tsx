import { NotificationCard, Typography } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='bg-[#f0f2f5] pt-[100px] flex justify-center'>
        <div className='w-[855px] h-[1000px] bg-white rounded-lg drop-shadow-lg p-4'>
            <Typography fontSize='h1' fontWeight='bold'>Notifications</Typography>
            <Typography fontSize='h3' fontWeight='normal' className='mt-[25px]'>Earlier</Typography>
            <div>
                <NotificationCard classname="w-[706px] h-[100px]"/>
                <NotificationCard classname="w-[706px] h-[100px]"/>
                <NotificationCard classname="w-[706px] h-[100px]"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
