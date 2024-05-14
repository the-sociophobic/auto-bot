import React, { useState } from 'react'

import { ItemInCartType, PartInfoType } from '../models'
import ItemInCart from './ItemInCart'
import useStore from '../hooks/useStore'

import {ReactComponent as DropdownSvg} from '../assets/images/dropdown.svg'


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
  const { brand } = items[0]
  const [sortBy, setSortBy] = useState<'deliveryPeriod' | 'price'>('deliveryPeriod')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const clickSort = (sortName: 'deliveryPeriod' | 'price') => {
    if (sortName === sortBy)
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    else {
      setSortOrder('asc')
      setSortBy(sortName)
    }
  }

  const currentSort = (a: PartInfoType, b: PartInfoType) => {
    if (a[sortBy] === 0 && b[sortBy] !== 0) {
      return 1
    }
    if (b[sortBy] === 0 && a[sortBy] !== 0) {
      return -1
    }

    if (sortOrder === 'asc')
      return a[sortBy] - b[sortBy]

    return b[sortBy] - a[sortBy]
  }
  const sortBrandFirst = (a: PartInfoType, b: PartInfoType) => {
    if (a.brand === brand) {
      if (b.brand === brand)
        return currentSort(a, b)
      return -1
    }
    if (b.brand === brand)
      return 1
    return currentSort(a, b)
  }

  return (
    <>
      <h4 className='h4 mt-4 mb-3'>
        {title} ({items.length})
      </h4>
      <div className='d-flex flex-row mb-3'>
        <div
          className={`Sort ${sortBy === 'deliveryPeriod' && `Sort--${sortOrder}`}`}
          onClick={() => clickSort('deliveryPeriod')}
        >
          Срок поставки
          <DropdownSvg />
        </div>
        <div
          className={`Sort ${sortBy === 'price' && `Sort--${sortOrder}`}`}
          onClick={() => clickSort('price')}
        >
          Цена
          <DropdownSvg />
        </div>
      </div>
      {items
        .sort(sortBrandFirst)
        .map((item, index) => {
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
