export type PartInfoType = {
  distributorId: number
  grp: null | string
  code: string
  brand: string
  key: string
  number: string
  numberFix: string
  description: string
  availability: number
  packing: number
  deliveryPeriod: number
  deliveryPeriodMax: string
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
  item: FindPartsType
  amount: number
}

export type ABCB_ImagType = {
  name: string
  order: number
}
