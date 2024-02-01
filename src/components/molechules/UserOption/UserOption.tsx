import React, { ReactNode,FC } from 'react'
interface UserOptionProps{
    children: ReactNode;
    width?: string
    height?: string
}
const UserOption: FC<UserOptionProps> = ({children, width, }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export {UserOption}
