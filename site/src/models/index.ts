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

export type IteratableObject = {
  [key: string]: any
}

export type BrandType = {
  id: IdType
  name: string
  photo: string
}

export type PartInfoType = {
  images: ABCB_ImagType[]
  key: string

  distributorId: number
  grp: null | string
  code: string
  brand: string
  number: string
  numberFix: string
  description: string
  availability: number
  packing: number
  deliveryPeriod: number
  deliveryPeriodMax: number
  deadlineReplace: string
  distributorCode: null | number
  supplierCode: number
  supplierColor: null | string
  supplierDescription: string
  itemKey: string
  price: number
  weight: number
  volume: null | number
  lastUpdateTime: string
  additionalPrice: number
  noReturn: boolean
  isUsed: boolean
  deliveryProbability: number
  priceIn: number
  priceRate: number
}




export type SearchBrandsType = {
  availability: number,
  brand: string,
  description: string,
  number: string,
  numberFix: string
  price?: number
}

export type SearchBrandsKeyType = SearchBrandsType & {
  key: string
}

export type ArticlesInfoType = Omit<SearchBrandsType, 'availability' | 'numberFix'> & {
  images: ABCB_ImagType[],
  images_count: number,
}

export type FindPartsType = SearchBrandsKeyType & ArticlesInfoType

export type ItemInCartType = {
  item: PartInfoType
  amount: number
}

export type ABCB_ImagType = {
  name: string
  order: number
}
