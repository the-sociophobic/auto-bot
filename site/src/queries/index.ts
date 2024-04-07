import { _delete, get, post, put } from './utils'


export const getUser = async () => {
  return await get(`/user/`)
}

export const getPartsByNumber = async (number: string, page: number = 1) => {
  if (number.length === 0)
    return []
  
  return await get(`/find-parts`, {
    number, page
  })
}

