import { User } from 'telegraf/typings/core/types/typegram'
import { emulateTelegramLoginURL } from './emulateTelegramCredentials'

const { REACT_APP_URL } = process.env

export const getLoginURL = (groupId: number) => `${REACT_APP_URL}?groupId=${groupId}`

export const getDevLoginURL = (groupId: number, user?: User) =>
  `http://localhost:3000/nin-js-bot-web-app?groupId=${groupId}&${emulateTelegramLoginURL(
    user
  )}`
