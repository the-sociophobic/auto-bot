import React from 'react'

import { ItemInCartType, PartInfoType } from '../models'
import ItemInCart from './ItemInCart'
import useStore from '../hooks/useStore'


export type BuyPartsListProps = {
  items: PartInfoType[]
  title: string,
  img?: string
}


const BuyPartsList: React.FC<BuyPartsListProps> = ({
  items,
  title,
  img
}) => {
  const { findItemInCart } = useStore(state => state)

  return (
    <>
      <h4 className='h4 mt-4 mb-3'>
        {title}
      </h4>
      {items.map((item, index) => {
        const { item_in_cart } = findItemInCart(item)
        const item_with_img = {
          ...item,
          images: img ? [{ name: img, order: 0 }] : []
        }
        const item_in_cart_with_img: ItemInCartType = item_in_cart ? ({
          ...item_in_cart,
          item: item_with_img
        })
        :
        ({
          item: item_with_img,
          amount: 0
        })

        return (
          <ItemInCart
            key={item.key}
            item_in_cart={item_in_cart_with_img}
          />
        )
      })}
    </>
  )
}


export default BuyPartsList
