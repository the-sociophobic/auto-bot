import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

import ItemsList from '../components/ItemsList'
import useStore from '../hooks/useStore'
import Link from '../components/Common/Link'
import { ItemType } from '../models'


const Cart: React.FC = () => {
  const items = useStore(state => state.items)
  const items_added: ItemType[] = useStore(state => state.items_in_cart)
    .map(item_in_cart => items.find(item => item.id === item_in_cart.item_id))
    .filter(item_added => item_added !== undefined) as ItemType[]

  return (
    <div className='container'>
      {/* <h2 className='h2 mb-3'>
        Корзина
      </h2> */}
      {items_added.length === 0 ?
        <div>
          Вы ничего не добавили
        </div>
        :
        <>
          <ItemsList
            title='Корзина'
            items={items_added}
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
