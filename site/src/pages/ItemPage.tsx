import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

import ItemsList from '../components/ItemsList'
import useStore from '../hooks/useStore'
import { FindPartType, FindPartsType } from '../models'
import { useQuery } from 'react-query'
import { getPartInfo, getPartsByNumber } from '../queries'


const ItemPage: React.FC = () => {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const number = searchParams.get('number') || ''
  const brand = searchParams.get('brand') || ''

  const {
    data: part,
    isLoading: partLoading
  } = useQuery<FindPartType[]>(
    ['part-info', number, brand],
    () => getPartInfo(number, brand)
  )
  console.log(part)

  return !part ? <></> : (
    <div className='container pt-5'>
      <ItemsList
        isCart={true}
        title='Предложения'
        items={part}
      />
    </div>
  )
}


export default ItemPage
