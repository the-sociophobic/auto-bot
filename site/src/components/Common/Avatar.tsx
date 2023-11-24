import React from 'react'

import { ReactComponent as UserIcon } from '../../assets/images/user.svg'


type AvatarProps = {
  img?: string
  number?: number
  className?: string
}


function getFormattedNumber(n: number) {
  if (n === 0) return '0'
  if (n > 10) return '10+'
  return n
}

const Avatar: React.FC<AvatarProps> = ({ img, number, className }) => {
  const formattedNumber = getFormattedNumber(number!)
  return (
    <div className={`Avatar ${className}`}>
      {img ? (
        <img alt="" src={img} className="Avatar__img" />
      ) : (
        formattedNumber || <UserIcon className="Avatar__icon" />
      )}
    </div>
  )
}

export default Avatar
