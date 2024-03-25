export type IdType = string

export interface UserType {
  id: IdType
}

export interface ItemType {
  id: IdType
  name: string
  photo: string
  price: number
  amount_available: number
  brand_id: IdType
  description: string
  timing: string
}

export type ItemInCartType = {
  item_id: IdType
  amount: number
}

export type IteratableObject = {
  [key: string]: any
}

export type BrandType = {
  id: IdType
  name: string
  photo: string
}