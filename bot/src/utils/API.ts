import { User } from 'telegraf/typings/core/types/typegram'
import axios from 'axios'

import { emulateTelegramInitData } from './emulateTelegramCredentials'

const { API_HOST } = process.env

const get = async <T>(props: {
  path: string
  params?: object | URLSearchParams
  user: User
}) =>
  (
    await axios.get<T>(
      `${API_HOST + props.path}?${new URLSearchParams(
        props.params as URLSearchParams
      ).toString()}`,
      {
        headers: {
          telegramData: encodeURIComponent(emulateTelegramInitData(props.user))
        }
      }
    )
  ).data

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
