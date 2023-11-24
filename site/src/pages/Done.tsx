import React from 'react'

import { getWebAppAuthObject } from '../auth'


const Done: React.FC = () => {
  const user = getWebAppAuthObject()

  return (
    <div className='container'>
      {user && user.first_name} {user && user.last_name}, Ваша заявка оформлена! Мы с вами свяжемся
    </div>
  )
}


export default Done
