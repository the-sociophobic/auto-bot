import { BrandType, ItemType } from '../models'


const items: ItemType[] = [
  {
    id: '1',
    name: '190000T471',
    photo: 'https://pubimg.nodacdn.net/images/preview/081e84d253904e23765c959a90096978598d720002.png',
    price: 1000,
    amount_available: 99,
    description: '',
    brand_id: '1',
    timing: '10-20 дней'
  },
  {
    id: '2',
    name: '190000T471',
    photo: 'https://pubimg.nodacdn.net/images/preview/081e84d253904e23765c959a90096978598d720002.png',
    price: 1111,
    amount_available: 10,
    description: '',
    brand_id: '1',
    timing: '10-20 дней'
  },
  {
    id: '3',
    name: '190000T471',
    photo: '',
    price: 1023,
    amount_available: 3,
    description: '',
    brand_id: '1',
    timing: '10-20 дней'
  },
]

const brands: BrandType[] = [
  {
    id: '1',
    name: 'TOYOTA',
    photo: 'https://img.acat.online/acat/main/marks/32.png?AWSAccessKeyId=9sY8a5xfU3eNf8SPbg69&Expires=1705722880&Signature=U9r6m%2Fg5O28Vm3CrNVEIHhRX1yQ%3D',
  }
]


export {
  items,
  brands
}
