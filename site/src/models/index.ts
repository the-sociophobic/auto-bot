export type IdType = string

export interface UserType {
  id: IdType
}

export interface ItemType {
  id?: IdType
  name: string
  price: number
}

export type IteratableObject = {
  [key: string]: any
}
