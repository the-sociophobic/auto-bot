import React from 'react'

import { Button, Col, Form, Row } from 'react-bootstrap'


const Search: React.FC = () => {
  const [text, setText] = React.useState('')
  const [validated, setValidated] = React.useState(false)
  const onSubmit = (text: string) => { }

  return (
    <div className='Search'>
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
          <Form.Control
            required
            type='text'
            placeholder='12345'
            onChange={e => setText(e.target.value)}
          />
        </Form.Group>
        <Button type='submit'>
          Поиск
        </Button>
      </Form>
    </div>
  )
}


export default Search
