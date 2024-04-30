import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import { FindPartsType } from '../models'
import Add from './AddButton'
import useStore from '../hooks/useStore'
import ItemImg from './ItemImg'
import LinkWrapper from './Common/Link'


export type ItemProps = {
  item: FindPartsType
}


const Item: React.FC<ItemProps> = ({
  item,
}) => {
  const { storeImage } = useStore(state => state)
  const linkWrapper = (children: React.ReactNode) => {
    const img = item.images?.[0]?.name

    return (
      <LinkWrapper
        to={`/item?number=${item.number}&brand=${item.brand}&img=${img}`}
        onClick={() => {
          console.log(img)
          if (img)
            storeImage(img, item.key)
        }}
      >
        {children}
      </LinkWrapper>
    )
  }

  return !item ? <></> : linkWrapper(
    <div className='List__item'>
      <div className='d-flex flex-row justify-content-start pb-3'>
        <ItemImg
          array={item.images}
          className='List__item__Avatar me-4'
        />
        <div className='d-flex flex-column flex-grow-1 me-3'>
          <div className='List__item__name'>
            {item.description}
          </div>
          <div className='List__item__brand'>
            Бренд: {item.brand}
          </div>
        </div>
      </div>


    </div>
  )
}


export default Item
