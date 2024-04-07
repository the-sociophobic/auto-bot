import React from 'react'

import { Button, Col, Row } from 'react-bootstrap'
import { FindPartsType, ItemInCartType, ItemType } from '../models'
import Item from './Item'
import useStore from '../hooks/useStore'


export type ItemsListProps = {
  // items: ItemType[]
  items: FindPartsType[]
  title: string
}


const ItemsList: React.FC<ItemsListProps> = ({
  items,
  title
}) => {
  const { findItemInCart } = useStore(state => state)

  return (
    <>
      <h4 className='h4 mt-4 mb-3'>
        {title}
      </h4>
      {items.map((item, index) => {
        const { item_in_cart } = findItemInCart(item)

        return (
          <Item
            key={item.key}
            item_in_cart={item_in_cart || { item, amount: 0 }}
          />
        )
      })}
    </>
  )
}


export default ItemsList
