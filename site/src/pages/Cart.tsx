import React from 'react'

import ItemsList from '../components/ItemsList'
import useStore from '../hooks/useStore'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const Cart: React.FC = () => {
  const items = useStore(state => state.items)

  return (
    <div className='container'>
      <div className='Cart'>
        Корзина
      </div>
      <ItemsList
        items={items}
        showButtons={false}
      />
      <Link to='/done'>
        <Button
          className='mt-2 w-100'
        >
          Оформить
        </Button>
      </Link>
    </div>
  )
}


export default Cart
