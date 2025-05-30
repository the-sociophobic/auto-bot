import express, { Request, Responce } from 'express'
import axios from 'axios'
import cors from 'cors'

import { get, post } from './utils/API'
import {
  // ArticlesInfoType,
  ItemInCartType,
  PartInfoType,
  SearchBrandsKeyType,
  SearchBrandsType
} from './models/item'
import fixStringForMarkdownV2 from './utils/fixStringForMarkdownV2'
import printUsername from './utils/printUsername'


const app = express()
app.use(cors({
  credentials: true,
  origin: [
    'https://maytry.ru',
    'https://the-sociophobic.github.io',
    'https://the-sociophobic.online',
  ]
}))
// const my_cors = (req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Methods', '*')
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   next()
// }
// app.use(my_cors)
app.use(express.json())

const { API_PORT, BOT_TOKEN } = process.env
const PARTS_ON_PAGE = 100
const groupWithOrdersId = -1002318545165
const groupWithOrdersIdTest = -4133485421


app.get('/find-parts', async (request: Request, response: Responce) => {
  const { number, page } = request.query

  if (!number)
    response.send([])

  let items = []

  try {
    const all_parts: { [key: string]: SearchBrandsType } = await get('/search/brands/', { number })
    // console.log(all_parts)

    const all_parts_array: SearchBrandsKeyType[] = Object.keys(all_parts)
      .map(key => ({
        ...all_parts[key],
        key
      }))

    const parts_on_page = all_parts_array.slice(
      !page ? 0 : (page - 1) * PARTS_ON_PAGE,
      !page ? PARTS_ON_PAGE : page * PARTS_ON_PAGE,
    )

    items = parts_on_page
      .filter(item => item.availability > 0)

    // const parts_with_imgs = await Promise.all(
    //   parts_on_page.map(
    //     async part => ({
    //       ...part,
    //       ...(await get<ArticlesInfoType>('/articles/info', {
    //         number,
    //         brand: part.brand,
    //         format: 'i'
    //       }))
    //     })
    //   ))

    // items = parts_with_imgs

  } catch (err) {
    console.log(err)
  } finally {
    response.send(items)
  }
})

app.get('/part-info', async (request, response) => {
  const { number, brand } = request.query
  let res: PartInfoType[] = []

  try {
    res = (await get<PartInfoType[]>('/search/articles/', {
      number,
      brand,
      format: 'i',
      withOutAnalogs: 1,
      limit: 20
    }))
  } catch (err) {
    console.log(err)
  }

  try {
    if (res.length === 0 || res.findIndex(item => item.brand === brand) === -1)
      res = (await get<PartInfoType[]>('/search/articles/', {
        number,
        brand,
        format: 'i',
        useOnlineStocks: 1,
        withOutAnalogs: 1,
        limit: 30
      }))
  } catch (err) {
    console.log(err)
  }

  try {
    if (res.length === 0)
      res = (await get<PartInfoType[]>('/search/articles/', {
        number,
        brand,
        format: 'i',
        useOnlineStocks: 1,
        limit: 100
      }))
  } catch (err) {
    console.log(err)
  }

  response.send(
    res
      .sort((a, b) => {
        if (a.brand === brand)
          return -1
        if (b.brand === brand)
          return 1
        return 0
      })
      .map(item => ({
        ...item,
        price: Math.ceil(item.price * 1.1),
        key: item.itemKey
      }))
  )
})

type TgNotificationPayload = {
  chat_id: number;
  text: string;
  parse_mode: string;
  reply_markup?: any;
}

app.post('/order', async (request, response) => {
  console.log(request.body)
  const {
    user,
    ip,
    phone,
    items_in_cart,
    promocode,
    checkPrice
  } = request.body
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
  const text = `
Пользователь:
${printUsername(user)}
${phone ? `Телефон ${phone}` : ''}

Заказ:
${(items_in_cart as ItemInCartType[])
      .map(item => ` - ${item.item.brand} ${item.item.number} - ${item.amount} шт - ${item.item.price} ₽
`).join('')
    }

${checkPrice ? ('Итого: ' + checkPrice + ' ₽') : ''}

${promocode ? ('Промокод: ' + promocode) : ''}

`
  try {
    const messageForUser: TgNotificationPayload = {
      chat_id: user.id,
      text: fixStringForMarkdownV2(`${text}

Ваш заказ будет доставлен в наш пункт выдачи по адресу Поселковая улица 23а. График работы работы склада, пн-пт 9:00-17:00`),
      parse_mode: 'MarkdownV2',
    }
    const messageForOrdersChat: TgNotificationPayload = {
      // chat_id: groupWithOrdersIdTest,
      chat_id: groupWithOrdersId,
      text: fixStringForMarkdownV2(`${text}`),
      parse_mode: 'MarkdownV2',
    }

    if (user)
      await axios.post(url, messageForUser)
    await axios.post(url, messageForOrdersChat)
  } catch (err) {
    console.log(err.message)
  } finally {
    response.send('')
  }
})

// Maytry
app.get('/maytry/:url', async (request, response) => {
  const { url } = request.params
  const maytryRes = (await axios.get(`http://localhost:5010/${url}`)).data

  response.send(maytryRes)
})

app.post('/maytry/:url', async (request, response) => {
  const { url } = request.params
  const { body } = request
  const maytryRes = (await axios.post(`http://localhost:5010/${url}`, body)).data

  response.send(maytryRes)
})


// Исследование Марсиан 367
app.get('/martian-research-367/answers', async (request, response) => {
  const res = (await axios.get('http://localhost:5025/answers')).data

  response.send(res)
})
app.post('/martian-research-367/answer', async (request, response) => {
  const { body } = request
  const res = (await axios.post('http://localhost:5025/answer', body)).data

  response.send(res)
})


// Art Plenus
app.get('/art-plenus/:url', async (request, response) => {
  const { url } = request.params
  const maytryRes = (await axios.get(`http://localhost:5015/${url}`)).data

  response.send(maytryRes)
})

app.post('/art-plenus/:url', async (request, response) => {
  const { url } = request.params
  const { body } = request
  const maytryRes = (await axios.post(`http://localhost:5015/${url}`, body)).data

  response.send(maytryRes)
})


const initAPI = () => {
  app.listen(API_PORT, () => console.log(`Running on port ${API_PORT}`))
}


export {
  initAPI
}
