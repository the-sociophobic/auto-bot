import React from 'react'

import { ReactComponent as CogIcon } from '../assets/images/cog.svg'
import { ABCB_ImagType } from '../models'


type ItemImgProps = {
  img?: string
  array?: ABCB_ImagType[]
  className?: string
}


const ABCB_IMG_HOSTING = 'https://pubimg.4mycar.ru/images/'


const ItemImg: React.FC<ItemImgProps> = ({
  img,
  array,
  className
}) => {
  return (
    <div className={`ItemImg ${className}`}>
      {/* {img && img.length > 0 ?
        <img alt='' src={img} className='ItemImg__img' />
        :
        <CogIcon className='ItemImg__icon' />
      } */}
      {array && array.length > 0 ?
        <img
          alt=''
          src={ABCB_IMG_HOSTING + array[0].name}
          className='ItemImg__img'
        />
        :
        <CogIcon className='ItemImg__icon' />
      }
    </div>
  )
}


export default ItemImg
