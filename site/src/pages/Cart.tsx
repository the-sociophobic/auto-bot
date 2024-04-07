import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

import ItemsList from '../components/ItemsList'
import useStore from '../hooks/useStore'
import Link from '../components/Common/Link'
import { FindPartsType, ItemType } from '../models'


const Cart: React.FC = () => {
  const items_in_cart = useStore(state => state.items_in_cart)
  const items = items_in_cart.map(items_in_cart => items_in_cart.item)
  console.log(items_in_cart)
  
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
            title='Корзина'
            items={items}
          />
          <Form.Group className='mt-3 mb-4'>
            <Form.Label>
              Есть промокод?
            </Form.Label>
            <Form.Control placeholder='PROMOKODE'/>
          </Form.Group>          
          <Link to='/done'>
            <Button
              className='mt-2 w-100'
            >
              Оформить
            </Button>
          </Link>
        </>
      }
    </div>
  )
}


export default Cart
