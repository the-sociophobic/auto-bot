import Cart from '../../../pages/Cart'
import Done from '../../../pages/Done'
import List from '../../../pages/List'
import Search from '../../../pages/Search'


export type RouteType = {
  to: string
  title?: string
  Comp: any
  exact?: boolean
  unauthorized?: boolean
  svg?: any
}


const authorized_routes: RouteType[] = [
  {
    to: '/cart',
    title: 'Корзина',
    Comp: <Cart />,
  },
  {
    to: '/done',
    title: 'Заявка отправлена',
    Comp: <Done />,
  },
  // {
  //   to: '/list',
  //   title: 'Список предложений',
  //   Comp: <List />,
  // },
  {
    to: '/',
    title: 'Поиск',
    Comp: <Search />,
  },
]

const unauthorized_routes: RouteType[] = [
  // {
  //   to: '/login',
  //   title: 'Login',
  //   Comp: <Login />,
  // },
  // {
  //   to: '/register',
  //   title: 'Register',
  //   Comp: <Register />,
  // },
]


export {
  authorized_routes,
  unauthorized_routes
}
