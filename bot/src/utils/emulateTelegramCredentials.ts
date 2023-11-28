import { User } from 'telegraf/typings/core/types/typegram'
import { createHmac, createHash } from 'crypto'
import { pick } from 'lodash'

function getDataCheckString(telegramData: object): string {
  return Object.keys(telegramData)
    .filter((key) => key !== 'hash')
    .sort()
    .map((key) => `${key}=${telegramData[key]}`)
    .join('\n')
}

function joinParams(params: object) {
  return Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')
}

const emulateTelegramInitData = (
  user: Pick<User, 'id' | 'first_name' | 'last_name' | 'username'>
) => {
  const initDataWithoutHash = {
    user: JSON.stringify(pick(user, ['id', 'first_name', 'last_name', 'username']))
  }
  const dataCheckString = getDataCheckString(initDataWithoutHash)
  const secret = createHmac('sha256', 'WebAppData')
    .update(process.env.BOT_TOKEN)
    .digest()
  const hash = createHmac('sha256', secret).update(dataCheckString).digest('hex')

  return joinParams({ ...initDataWithoutHash, hash })
}

const emulateTelegramLoginURL = (
  user: Pick<User, 'id' | 'first_name' | 'last_name' | 'username'>
) => {
  const initDataWithoutHash = pick(user, ['id', 'first_name', 'last_name', 'username'])
  const dataCheckString = getDataCheckString(initDataWithoutHash)
  const secret = createHash('sha256').update(process.env.BOT_TOKEN).digest()
  const hash = createHmac('sha256', secret).update(dataCheckString).digest('hex')

  return joinParams({ ...initDataWithoutHash, hash })
}

export { emulateTelegramInitData, emulateTelegramLoginURL }
