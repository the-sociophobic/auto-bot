import { _delete, get, post, put } from './utils'


export const getUser = async () => {
  return await get(`/user/`)
}
