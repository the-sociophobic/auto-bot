import React from 'react'

import FindPartsList from '../components/FindPartsList'
import Input from '../components/Common/Input'
import { FindPartsType } from '../models'
import { useQuery } from 'react-query'
import { getPartsByNumber } from '../queries'
import Button from '../components/Common/Button'


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
        green
        disabled={searchText.length === 0}
        onClick={() => setSubmittedText(searchText)}
        className='mt-2 w-100 Button Button--green'
      >
        {itemsLoading ? 'Ищем варианты...' : 'Найти'}
      </Button>

      {(items && items.length > 0) &&
        <>
          <FindPartsList
            title={`Найдено ${items.length}`}
            items={items}
          />
          <div className='d-flex flex-row mb-5'>
            <Button
              green
              className='me-5'
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Назад
            </Button>
            <Button
              green
              disabled={items.length < 5}
              onClick={() => setPage(page + 1)}
            >
              Вперёд
            </Button>
          </div>
        </>
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
