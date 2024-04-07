import express, { Request, Responce } from 'express'
import cors from 'cors'

import { get } from './utils/API'
import { ArticlesInfoType, SearchBrandsKeyType, SearchBrandsType } from './models/item'


const app = express()
app.use(cors())

const { API_PORT } = process.env
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

const initAPI = () => {
  app.listen(API_PORT, () => console.log(`Running on port ${API_PORT}`))
}


export {
  initAPI
}
