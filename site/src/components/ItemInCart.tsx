import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import { ItemInCartType, ItemType } from '../models'
import Add from './AddButton'
import useStore from '../hooks/useStore'
import ItemImg from './ItemImg'
import hours from '../utils/countable/hours'


export type ItemInCartProps = {
  item_in_cart: ItemInCartType
}


const ItemInCart: React.FC<ItemInCartProps> = ({
  item_in_cart: { item, amount },
}) => {
  const setItemInCart = useStore(state => state.setItemInCart)

  return !item ? <></> :
    <div className='List__item'>
      <div className='d-flex flex-row justify-content-start pb-1'>
        {/* <ItemImg
          array={item.images}
          className='List__item__Avatar me-4'
        /> */}
        <div className='d-flex flex-column flex-grow-1'>
          <div className='List__item__name'>
            {item.brand}<br />
            {item.description}
          </div>
        </div>
      </div>

      <div className='d-flex flex-row justify-content-between align-items-center'>
        <div className='d-flex flex-column justify-content-between align-items-left'>
          <div className='mb-1'>
            {item.price}₽ (доступно {item.availability})
          </div>
          <div className='List__item__deliveryPeriod'>
            {/* Поставка: {
              item.deliveryPeriod === 0 ?
                'неизвестно'
                :
                `${item.deliveryPeriod} ${item.deliveryPeriodMax.length > 0 ?
                  `- ${item.deliveryPeriodMax}`
                  :
                  ''
                } ${days(item.deliveryPeriodMax.length > 0 ? parseInt(item.deliveryPeriodMax) || item.deliveryPeriod)}`
            } */}
            Поставка: {
              item.deliveryPeriod === 0 ?
                'неизвестно'
                :
                `${item.deliveryPeriod} ${hours(item.deliveryPeriod)}`
            }
          </div>
        </div>
        <Add
          amount={amount}
          setAmount={(_amount: number) => setItemInCart(item, _amount)}
          max={item.availability}
        />
      </div>
    </div>
}


export default ItemInCart
