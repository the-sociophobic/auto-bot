import React from 'react'

import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Link from '../components/Common/Link'
import useStore from '../hooks/useStore'
import { items as items_fake } from '../utils/data'
import ItemsList from '../components/ItemsList'


const Search: React.FC = () => {
  const [text, setText] = React.useState('')
  const [validated, setValidated] = React.useState(false)
  // const history = useHistory()
  const items = useStore(state => state.items)
  const setItems = useStore(state => state.setItems)
  const onSubmit = (text: string) => {
    setItems(items_fake)
  }

  return (
    <div className='container pt-5'>
      <Form
        onSubmit={e => {
          e.preventDefault()
          if (e.currentTarget.checkValidity() === false)
            e.preventDefault()
          else
            onSubmit(text)
          setValidated(true)

        }}
      >
        <Form.Group>
          <Form.Label>
            Введите номер детали
          </Form.Label>
          <Form.Control
            // required
            type='text'
            placeholder='7J3ZZ56T7834500003'
            onChange={e => setText(e.target.value)}
          />
        </Form.Group>
        {/* <Link to='/list'> */}
          <Button
            disabled={text.length === 0}
            type='submit'
            className='mt-2 w-100'
          >
            Поиск
          </Button>
        {/* </Link> */}
      </Form>

      {items.length > 0 &&
        <ItemsList
          title='Список предложений'
          items={items}
        />
      }
    </div>
  )
}


export default Search
