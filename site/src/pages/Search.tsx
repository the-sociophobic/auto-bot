import React from 'react'

import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Search: React.FC = () => {
  const [text, setText] = React.useState('')
  const [validated, setValidated] = React.useState(false)
  const onSubmit = (text: string) => { }

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
        <Link to='/list'>
          <Button
            type='submit'
            className='mt-2 w-100'
          >
            Поиск
          </Button>
        </Link>
      </Form>
    </div>
  )
}


export default Search
