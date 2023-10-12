import { useQuery } from 'react-query'

import { getUser } from '../../queries'
import { UserType } from '../../models'


export const useUser = () => {
  return useQuery<UserType>('user', getUser)
}
