import React, { useState } from 'react'

import ItemsList from '../components/ItemsList'
import useStore from '../hooks/useStore'
import { post } from '../queries/utils'
import { getWebAppAuthObject } from '../auth'
import Input from '../components/Common/Input'
import Button from '../components/Common/Button'


const Cart: React.FC = () => {
  const items_in_cart = useStore(state => state.items_in_cart)
  const [promocode, setPromocode] = useState('')
  console.log(items_in_cart)

  const user = getWebAppAuthObject()

  const onSubmit = async () => {
    console.log(items_in_cart)
    try {
      await post('/order', {
        user,
        items_in_cart: items_in_cart.map(item_in_cart => ({
          amount: item_in_cart.amount,
          item: {
            key: item_in_cart.item.key,
            price: item_in_cart.item.price,
            number: item_in_cart.item.number,
            brand: item_in_cart.item.brand,
          }
        })),
        promocode
      })
    } catch (err) {
      console.log(err)
    } finally {
      window?.Telegram?.WebApp?.close?.()
    }
  }

  return (
    <div className='container'>
      {/* <h2 className='h2 mb-3'>
        Корзина
      </h2> */}
      {items_in_cart.length === 0 ?
        <div>
          Вы ничего не добавили
        </div>
        :
        <>
          <ItemsList
            isCart={true}
            title='Корзина'
            items={items_in_cart.map(item_in_cart => item_in_cart.item)}
          />
          <Input
            className='mt-3 mb-4'
            value={promocode}
            onChange={setPromocode}
            label='Есть промокод?'
          />
          {/* <Link to='/done'> */}
          <Button
            green
            // className='mt-2 w-100'
            onClick={onSubmit}
          >
            Оформить
          </Button>
          {/* </Link> */}
        </>
      }
    </div>
  )
}


export default Cart
