import React from 'react'

import useStore from '../hooks/useStore'
import { ItemType } from '../models'
import ItemsList from '../components/ItemsList'


const array: ItemType[] = [
  {
    name: 'деталь А',
    price: 1000,
  },
  {
    name: 'деталь Б',
    price: 2000,
  },
  {
    name: 'деталь В',
    price: 3000,
  },
  {
    name: 'деталь Г',
    price: 4000,
  },
  {
    name: 'деталь Д',
    price: 5000,
  },
]
const List: React.FC = () => {
  const addItem = useStore(state => state.addItem)

  return (
    <div className='container pt-5'>
      <h3 className='h3'>
        Список предложений
      </h3>
      <ItemsList
        items={array}
        showButtons
        onButtonClick={addItem}
      />
    </div>
  )
}


export default List
