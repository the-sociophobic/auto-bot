import { Button, ListGroup } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import Header from './Header'
import Logo from './Logo'
import { authorized_routes as routes } from './ProtectedRoutes/routes'
import { setAuthHeader } from '../../hooks/auth'


export type LayoutProps = {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const { pathname } = useLocation()
  // const routesMapped = routes?.map(route =>
  //   <Link
  //     key={route.to}
  //     to={route.to}
  //   >
  //     <ListGroup.Item className='group-item mb-2'>
  //       {route.svg && <route.svg className='svg-icon mx-2' />} {route.title}
  //     </ListGroup.Item>
  //   </Link>
  // )

  // function handleLogout() {
  //   setAuthHeader(null)
  //   window.location.reload();
  // }

  return (
    <>
      {/* <div className='Layout__side px-2 border-end'>
        <div className=''>
          <Logo />
        </div>
        <div className='pt-5 d-flex flex-column justify-content-center'>
          <ListGroup activeKey={pathname} className='border-none'>
            {routesMapped.slice(0, -1)}
            <div className='p-3'>
              <div className='border-bottom' />
            </div>
            {routesMapped.slice(-1)}
            <ListGroup.Item className='group-item mb-2'>
              <Button className='logout-btn' onClick={handleLogout}>Log Out</Button>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className='Layout__content px-0 d-flex flex-column'>
    <div className='p-3 bg-gray flex-grow-1'> */}
      <div className='content'>

        <Header />
        {children}
      </div>
      {/* </div>
      </div> */}
    </>
  )
}


export default Layout
