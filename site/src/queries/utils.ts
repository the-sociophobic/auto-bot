import axios from 'axios'
import { getAuthHeader } from '../hooks/auth'


const REACT_APP_SERVER_URL = 'https://shark-app-p76lu.ondigitalocean.app/api'
//const REACT_APP_SERVER_URL = 'http://localhost:8000/api'


export const generateURL = (path: string, params?: object): string =>
  REACT_APP_SERVER_URL +
  path +
  (params && Object.keys(params).length > 0 ?
    `?${new URLSearchParams(params as URLSearchParams).toString()}`
    :
    ''
  )

const getAxiosConfig = () => ({
  headers: ['undefined', 'null'].includes(getAuthHeader() + '') ? {} : {
    Authorization: `Bearer ${getAuthHeader()}`,
    'Access-Control-Allow-Origin': '*',
  }
})

export const get = async (path: string, params?: any) => {
  let res

  res = (await axios.get(generateURL(path, params), getAxiosConfig())).data

  return res
}

export const put = async (path: string, data: object, params?: any) => {
  let res

  res = (await axios.put(generateURL(path, params), data, getAxiosConfig())).data

  return res
}

export const post = async (path: string, data: object, params?: any) => {
  let res

  res = (await axios.post(
    generateURL(path, params),
    data,
    path.includes('/auth/') ? {} : getAxiosConfig()
  )).data

  return res
}

export const _delete = async (path: string, params?: any) => {
  let res

  res = (await axios.delete(generateURL(path, params), getAxiosConfig())).data

  return res
}