import { User } from 'telegraf/typings/core/types/typegram'
import axios from 'axios'
import MD5 from 'crypto-js/md5'

import { emulateTelegramInitData } from './emulateTelegramCredentials'


const {
  API_HOST,
  API_USER,
  API_PASS,
} = process.env


const get = async <T>(
  path: string,
  params?: object | URLSearchParams
) => {
  const URL = `${API_HOST + path}?${new URLSearchParams(
    {
      userlogin: API_USER,
      userpsw: MD5(API_PASS).toString(),
      ...params
    } as URLSearchParams
  ).toString()}`

  console.log(URL)
  
  return (
    await axios.get<T>(URL)
  ).data
}

const post = async <T>(props: {
  path: string
  params?: object | URLSearchParams
  data: object
  user: User
}) =>
  (
    await axios.post<T>(
      `${API_HOST + props.path}?${new URLSearchParams(
        props.params as URLSearchParams
      ).toString()}`,
      props.data,
      {
        headers: {
          telegramData: encodeURIComponent(emulateTelegramInitData(props.user))
        }
      }
    )
  ).data

export { get, post }
