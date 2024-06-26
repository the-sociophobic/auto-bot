import React from 'react'

import Link from './Link'
import useStore from '../../hooks/useStore'
import { getWebAppAuthObject } from '../../auth'
import Avatar from './Avatar'
import printUsername from '../../utils/printUsername'
import Button from './Button'


const Header: React.FC = () => {
  const items_in_cart = useStore(state => state.items_in_cart)
  const user = getWebAppAuthObject()

  return (
    <>
      <div className='Header Header--relative' />
      <div className='Header Header--fixed'>
        <div className='container h-100 d-flex flex-row justify-content-between align-items-center'>
          {user &&
            <div className="d-flex flex-row align-items-center font-inherit">
              <Avatar img={user.photo_url} className="me-10 my-5" />
              <div>
                {printUsername(user)}
              </div>
            </div>
          }
          {items_in_cart.length > 0 &&
            <div className='d-flex flex-row justify-content-end'>
              <Link to='/cart'>
                <Button green>
                  Корзина {items_in_cart.length}
                </Button>
              </Link>
            </div>
          }
        </div>
      </div>
    </>
  )
}


export default Header
