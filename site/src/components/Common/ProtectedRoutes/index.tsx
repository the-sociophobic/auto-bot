import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// import useStore from '../../../hooks/useStore'
import TitleWrapper from '../TitleWrapper'
import Layout from '../Layout'
// import Loader from '../Loader'
import { RouteType, authorized_routes, unauthorized_routes } from './routes'
// import { useUser } from '../../../hooks/async/user'


const mapRoutes = (routes: RouteType[]) =>
  <Router>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.to}
          path={route.to}
        >
          <TitleWrapper title={route.title}>
            <Layout>
              {route.Comp}
            </Layout>
          </TitleWrapper>
        </Route>
      ))}
    </Switch>
  </Router>


const ProtectedRoutes: React.FC = () => {
  // const { data: user, isLoading: loadingUser } = useUser()

  // if (loadingUser)
  //   return <Loader />

  // useStore.setState({
  //   user,
  // })

  return mapRoutes(authorized_routes)
}


export default ProtectedRoutes
