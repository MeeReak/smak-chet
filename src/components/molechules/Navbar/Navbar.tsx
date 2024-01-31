import React from 'react'
import Image from 'next/image'
import {HiArchiveBox} from  "react-icons/hi2"
import { FaUser } from 'react-icons/fa'
import { InputSearch, ButtonIcon, Button } from '@/components'
const imgurl = "assets/icons/icon.svg"
const Navbar = () => {
  return (
    <div className='bg-red-400 h-[100px] flex justify-end pr-5'>
        <ButtonIcon icon={<FaUser className='w-20 h-10 '/>} className='rounded-full w-20 h-20'/>
    </div>
  )
}

export {Navbar}
