import { Button, ListGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import Link from './Link'
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
      <Header />
      <div className='content'>
        {children}
      </div>
    </>
  )
}


export default Layout
