import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

import BuyPartsList from '../components/BuyPartsList'
import useStore from '../hooks/useStore'
import { PartInfoType } from '../models'
import { useQuery } from 'react-query'
import { getPartInfo } from '../queries'


const ItemPage: React.FC = () => {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const number = searchParams.get('number') || ''
  const brand = searchParams.get('brand') || ''

  const { getImg } = useStore(state => state)
  const img = searchParams.get('img') || getImg(brand + number) || undefined

  const {
    data: offers,
    isLoading: partLoading
  } = useQuery<PartInfoType[]>(
    ['part-info', number, brand],
    () => getPartInfo(number, brand)
  )
  console.log(offers)

  return (
    <div className='container pt-5'>
      <h4 className='h4 mb-4'>
        {number} {brand}
      </h4>
      {partLoading ?
        <>Загружаем информацию...</>
        :
        !offers || offers.length === 0 ?
          <>Ничего не найдено</>
          :
          <>
            {offers[0].brand !== brand && <>Найдены только аналоги <br /></>}
            <BuyPartsList
              title='Предложения'
              items={offers}
              img={img}
            />
          </>
      }
    </div>
  )
}


export default ItemPage
