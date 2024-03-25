import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import clamp from '../utils/clamp'


export type AddProps = {
  amount: number
  setAmount: (amount: number) => void
  max: number
}


const Add: React.FC<AddProps> = ({
  amount,
  setAmount,
  max
}) => {
  return (
    <div className='Add'>
      {
        amount === 0 ?
          <Button
            className='Add__Button'
            onClick={() => setAmount(1)}
          >
            В корзину
          </Button>
          :
          <div className='Add__Amount'>
            {/* <InputGroup className="mb-3"> */}
              <Button
                variant="outline-secondary"
                id="button-addon1"
                disabled={amount <= 0}
                className='Add__Amount__Button'
                onClick={() => setAmount(amount - 1)}
              >
                -
              </Button>
              {/* <Form.Control
                type='number'
                onChange={e => setAmount(clamp(parseInt(e.target.value), 0, max))}
              /> */}
              <div className='Add__Amount__number'>
                {amount}
              </div>
              <Button
                variant="outline-secondary"
                id="button-addon1"
                disabled={amount >= max}
                className='Add__Amount__Button'
                onClick={() => setAmount(amount + 1)}
              >
                +
              </Button>
            {/* </InputGroup> */}
          </div>
      }
    </div>
  )
}


export default Add
