import React from 'react'

import { ReactComponent as UserIcon } from '../assets/images/user.svg'


type AvatarProps = {
  img?: string
  className?: string
}


const Avatar: React.FC<AvatarProps> = ({
  img,
  className
}) => {
  return (
    <div className={`Avatar ${className}`}>
      {img && img.length > 0 ?
        <img alt="" src={img} className="Avatar__img" />
        :
        <UserIcon className="Avatar__icon" />
      }
    </div>
  )
}


export default Avatar
