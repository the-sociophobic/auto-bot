import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useStore from '../../hooks/useStore'
import { getWebAppAuthObject } from '../../auth'
import Avatar from './Avatar'

const Header: React.FC = () => {
  const items = useStore(state => state.items)
  const user = getWebAppAuthObject()

  return (
    <>
      <div className='Header Header--relative' />
      <div className='Header Header--fixed'>
        <div className='container d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row align-items-center font-inherit'>
            {user && <Avatar img={user.photo_url} className='me-2' />}
            {user && user.username} {user && user.last_name}
          </div>
          <div className='d-flex flex-row justify-content-end'>
            <Link to='/cart'>
              <Button>
                Корзина {items.length}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


export default Header
