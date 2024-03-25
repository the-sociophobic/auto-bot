import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import { ItemInCartType, ItemType } from '../models'
import Add from './AddButton'
import useStore from '../hooks/useStore'
import Avatar from './Avatar'


export type ItemProps = {
  item_in_cart: ItemInCartType
}


const Item: React.FC<ItemProps> = ({ item_in_cart: { item_id, amount } }) => {
  const item = useStore(state => state.items)
    .find(item => item.id === item_id)
  const setItemInCart = useStore(state => state.setItemInCart)

  return !item ? <></> : (
    <div className='List__item'>
      <div className='d-flex flex-row justify-content-start pb-3'>
        <Avatar
          img={item.photo}
          className='List__item__Avatar me-4'
        />
        <div className='d-flex flex-column'>
          <div className='List__item__name'>
            {item.name}
          </div>
          <div className='List__item__brand'>
            TOYOTA
          </div>
        </div>
      </div>
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <Add
          amount={amount}
          setAmount={(_amount: number) => setItemInCart(item_id, _amount)}
          max={item.amount_available}
        />
        <div className='d-flex flex-column'>
          <div>
            Доступно {item.amount_available}
          </div>
          <div>
            Поставка {item.timing}
          </div>
        </div>

      </div>
    </div>
  )
}


export default Item
