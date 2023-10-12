export type IdType = string

export interface UserType {
  id: IdType
}

export interface ItemType {
  id: IdType
}

export type IteratableObject = {
  [key: string]: any
}
