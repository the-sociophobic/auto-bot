import React from 'react'

import clamp from '../utils/clamp'
import EnterThreshold from './Common/EnterThreshold'
import { ReactComponent as CartIcon } from '../assets/images/cart.svg'
import Button from './Common/Button'


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
            green
            onClick={() => setAmount(1)}
          >
            <CartIcon className="cart-icon" />
          </Button>
          :
          <EnterThreshold
            value={amount}
            onChange={setAmount}
            min={0}
            max={max}
          />
      }
    </div>
  )
}


export default Add
