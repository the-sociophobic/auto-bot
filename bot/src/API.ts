import express, { Request, Responce } from 'express'
import axios from 'axios'
import cors from 'cors'

import { get } from './utils/API'
import { ArticlesInfoType, ItemInCartType, SearchBrandsKeyType, SearchBrandsType } from './models/item'
import fixStringForMarkdownV2 from './utils/fixStringForMarkdownV2'
import printUsername from './utils/printUsername'


const app = express()
app.use(cors())
app.use(express.json())

const { API_PORT, BOT_TOKEN } = process.env
const PARTS_ON_PAGE = 5


app.get('/find-parts', async (request: Request, response: Responce) => {
  const { number, page } = request.query

  if (number)
    try {
      const all_parts: { [key: string]: SearchBrandsType } = await get('/search/brands/', { number })

      const all_parts_array: SearchBrandsKeyType[] = Object.keys(all_parts)
        .map(key => ({
          ...all_parts[key],
          key
        }))

      const parts_on_page = all_parts_array.slice(
        !page ? 0 : (page - 1) * PARTS_ON_PAGE,
        !page ? PARTS_ON_PAGE : page * PARTS_ON_PAGE,
      )
      
      const parts_with_imgs = await Promise.all(
        parts_on_page.map(
          async part => ({
            ...part,
            ...(await get<ArticlesInfoType>('/articles/info', {
              number,
              brand: part.brand,
              format: 'i'
            }))
          })
        ))

      response.send(parts_with_imgs)
    } catch (err) {
      response.send([])
    }
})

app.get('/find-parts-brand', async (request, response) => {
  console.log(request)
  try {
    const res = await get('/articles/info', { number: '01089', brand: 'Febi', format: 'i' })
    console.log(res)
  } catch (err) {
    console.log(err.message)
  } finally {
    response.send('Hello world!')
  }
})

type TgNotificationPayload = {
  chat_id: number;
  text: string;
  parse_mode: string;
  reply_markup?: any;
}

app.post('/order', async (request, response) => {
  console.log(request.body)
  const { user, items_in_cart, promocode } = request.body
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
  const text = `
Пользователь:
${printUsername(user)}

Заказ:
${
  (items_in_cart as ItemInCartType[])
    .map(item => ' - \"' + item.item.key + '\" - ' + item.amount + ' шт')
}

${promocode ? ('Промокод: ' + promocode) : ''}
`
  const groupWithOrdersId = -4177786184

  try {
    const messageForUser: TgNotificationPayload = {
      chat_id: user.id,
      text: fixStringForMarkdownV2(`${text}`),
      parse_mode: 'MarkdownV2',
    }
    const messageForOrdersChat: TgNotificationPayload = {
      chat_id: groupWithOrdersId,
      text: fixStringForMarkdownV2(`${text}`),
      parse_mode: 'MarkdownV2',
    }

    if (user)
      await axios.post(url, messageForUser)
    await axios.post(url, messageForOrdersChat)
  } catch (err) {
    console.log(err.message)
  }
})


const initAPI = () => {
  app.listen(API_PORT, () => console.log(`Running on port ${API_PORT}`))
}


export {
  initAPI
}
