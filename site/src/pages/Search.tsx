import React from 'react'

import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Link from '../components/Common/Link'
import useStore from '../hooks/useStore'
import { items as items_fake } from '../utils/data'
import ItemsList from '../components/ItemsList'
import Input from '../components/Common/Input'
import { FindPartsType } from '../models'
import { useQuery } from 'react-query'
import { getPartsByNumber } from '../queries'


const Search: React.FC = () => {
  const [searchText, setSearchText] = React.useState('')
  const [submittedText, setSubmittedText] = React.useState('')
  const [page, setPage] = React.useState(1)
  const [validated, setValidated] = React.useState(false)
  // const history = useHistory()

  const {
    data: items,
    isLoading: itemsLoading
  } = useQuery<FindPartsType[]>(
    ['parts-by-number', submittedText, page],
    () => getPartsByNumber(submittedText, page)
  )

  return (
    <div className='container pt-5'>
      <Input
        label='Введите номер детали'
        value={searchText}
        onChange={setSearchText}
        placeholder='7J3ZZ56T7834500003'
      />
      <Button
        disabled={searchText.length === 0}
        onClick={() => setSubmittedText(searchText)}
        type='submit'
        className='mt-2 w-100 Button Button--green'
      >
        {itemsLoading ? 'Ищем варианты...' : 'Найти'}
      </Button>

      {(items && items.length > 0) &&
        <ItemsList
          title={`Найдено ${items.length}`}
          items={items}
        />
      }

      {submittedText && (items && items.length === 0) &&
        <p className='mt-3'>
          По вашему запросу ничего не найдено
        </p>
      }
    </div>
  )
}


export default Search
