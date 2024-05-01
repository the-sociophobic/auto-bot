import React from 'react'

import { getWebAppAuthObject } from '../auth'
import printUsername from '../utils/printUsername'


const Done: React.FC = () => {
  const user = getWebAppAuthObject()

  return (
    <div className='container'>
      {user && printUsername(user)}, Ваша заявка оформлена! Мы с вами свяжемся. (Окно можно закрыть)
    </div>
  )
}


export default Done
