"use client"
import { Typography } from '@/components/atoms'
import { PostAboutGroup } from '@/components/molechules'
import React, { useState } from 'react'
import { CardList } from '../CardList'

const PostAboutDisplay = () => {

    const [action, setAction] = useState<number>(0)

    const [category, setCategory] = useState<String>("Post")

  
  return (
   <>
   <PostAboutGroup
    setAction={setAction}
    action={action}
    setCategory={setCategory}
   />

   
   </>
  )
}

export default PostAboutDisplay
