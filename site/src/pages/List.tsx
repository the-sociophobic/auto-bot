import React from 'react'

import ItemsList from '../components/ItemsList'
import useStore from '../hooks/useStore'
import { FindPartsType } from '../models'


const List: React.FC = () => {
  const items: FindPartsType[] = []//useStore(state => state.items)

  return (
    <div className='container pt-5'>
      <h2 className='h2 mb-3'>
        Список предложений
      </h2>
      <ItemsList
        title=''
        items={items}
      />
    </div>
  )
}


export default List
