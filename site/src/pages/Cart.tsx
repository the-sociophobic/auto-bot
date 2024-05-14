import React, { useState } from 'react'
import axios from 'axios'

import BuyPartsList from '../components/BuyPartsList'
import useStore from '../hooks/useStore'
import { post } from '../queries/utils'
import { getWebAppAuthObject } from '../auth'
import Input from '../components/Common/Input'
import Button from '../components/Common/Button'
import { useHistory } from 'react-router'


const Cart: React.FC = () => {
  const items_in_cart = useStore(state => state.items_in_cart)
  const [promocode, setPromocode] = useState('')
  const [phone, setPhone] = useState('')

  const [address, setAddress] = useState('')

  const user = getWebAppAuthObject()
  const requestPhone = user && !user.username

  const checkPrice = items_in_cart
    .map(({ item, amount }) => item.price * amount)
    .reduce((a, b) => a + b, 0)

  const history = useHistory()
  const onSubmit = async () => {
    console.log(items_in_cart)
    try {
      await post('/order', {
        user,
        ip: (await axios.get<{ ip: string }>('https://api.ipify.org?format=json')).data.ip,
        address,
        items_in_cart: items_in_cart.map(item_in_cart => ({
          amount: item_in_cart.amount,
          item: {
            key: item_in_cart.item.key,
            price: item_in_cart.item.price,
            number: item_in_cart.item.number,
            brand: item_in_cart.item.brand,
          }
        })),
        phone: requestPhone ? phone : undefined,
        promocode,
        checkPrice
      })
    } catch (err) {
      console.log(err)
    } finally {
      window.Telegram.WebApp.close()
      history.push('/done')
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
          <BuyPartsList
            title='Корзина'
            items={items_in_cart.map(item_in_cart => item_in_cart.item)}
          />
          <div className='my-5'>
            Ваш заказ будет доставлен в наш пункт выдачи по адресу Поселковая улица 23а. График работы работы склада, пн-пт 9:00-17:00
          </div>
          {requestPhone &&
            <Input
              number
              className='mt-3 mb-4'
              value={phone}
              onChange={setPhone}
              label='Номер телефона'
            />
          }
          <Input
            className='mt-3 mb-4'
            value={promocode}
            onChange={setPromocode}
            label='Есть промокод?'
          />
          {/* <Link to='/done'> */}
          <h4 className='h4 mb-3'>
            Итого: {checkPrice}₽
          </h4>
          <Button
            green
            className='mb-3'
            disabled={requestPhone && phone.length < 10}
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
