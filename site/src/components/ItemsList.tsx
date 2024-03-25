import React from 'react'

import { Button, Col, Row } from 'react-bootstrap'
import { ItemInCartType, ItemType } from '../models'
import Item from './Item'
import useStore from '../hooks/useStore'


export type ItemsListProps = {
  items: ItemType[]
  title: string
}


const ItemsList: React.FC<ItemsListProps> = ({
  items,
  title
}) => {
  const items_in_cart = useStore(state => state.items_in_cart)

  return (
    <>
      <h2 className='h2 mt-4 mb-2'>
        {title}
      </h2>
      {items.map((item, index) => {
        const item_in_cart = items_in_cart
          .find(item_in_cart => item_in_cart.item_id === item.id)

        return (
          <Item
            key={item.id}
            item_in_cart={item_in_cart || { item_id: item.id, amount: 0 }}
          />
        )
      })}
    </>
  )
}


export default ItemsList
