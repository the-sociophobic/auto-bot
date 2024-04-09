import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import { ItemInCartType, ItemType } from '../models'
import Add from './AddButton'
import useStore from '../hooks/useStore'
import ItemImg from './ItemImg'
import LinkWrapper from './Common/Link'


export type ItemProps = {
  item_in_cart: ItemInCartType
  isCart: boolean
}


const Item: React.FC<ItemProps> = ({
  item_in_cart: { item, amount },
  isCart
}) => {
  const setItemInCart = useStore(state => state.setItemInCart)
  const linkWrapper = (children: React.ReactNode) => isCart ?
    <>{children}</>
    :
    <LinkWrapper to={`/item?number=${item.number}&brand=${item.brand}`}>
      {children}
    </LinkWrapper>

  return !item ? <></> : linkWrapper(
    <div className='List__item'>
      <div className='d-flex flex-row justify-content-start pb-3'>
        <ItemImg
          array={item.images}
          className='List__item__Avatar me-4'
        />
        <div className='d-flex flex-column flex-grow-1'>
          <div className='List__item__name'>
            {item.description}
          </div>
          <div className='List__item__brand'>
            {item.brand}
          </div>
        </div>
        {isCart &&
          <div className='d-flex flex-column justify-content-between align-items-center'>
            <Add
              amount={amount}
              setAmount={(_amount: number) => setItemInCart(item, _amount)}
              max={item.availability}
            />
            <div className='d-flex flex-column'>
              <div>
                Доступно {item.availability}
              </div>
              {/* <div>
                Поставка {item.availability}
              </div> */}
            </div>
          </div>
        }
      </div>


    </div>
  )
}


export default Item
