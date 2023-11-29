import express from 'express'

import { get } from './utils/API'


const app = express()
const { API_PORT } = process.env

app.get('/', async (request, response) => {
  try {
    const res = await get('/search/articles', { number: '01089', brand: 'Febi' })
    console.log(Object.keys(res))
  } catch(err) {
    console.log(err.message)
  } finally {
    response.send('Hello world!')
  }
})

const initAPI = () => {
  app.listen(API_PORT, () => console.log(`Running on port ${API_PORT}`))
}


export {
  initAPI
}
