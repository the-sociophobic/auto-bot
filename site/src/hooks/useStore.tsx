import { create } from 'zustand'
import { UserType, ItemType, ItemInCartType, IdType, FindPartsType } from '../models'


export type StateType = {
  user: null | UserType
  // items: ItemType[]
  // setItems: (items: ItemType[]) => void
  // getItem: (item_id: IdType) => undefined | ItemType
  items_in_cart: ItemInCartType[]
  findItemInCart: (item: FindPartsType) => {
    item_index: number
    item_in_cart?: ItemInCartType
  }
  setItemInCart: (item: FindPartsType, amount: number) => void
  // incrementItemInCart: (item: FindPartsType) => void
  // decrementItemInCart: (item: FindPartsType) => void
}


const useStore = create<StateType>((set, get) => ({
  user: null,
  // items: [],
  // setItems: (items: ItemType[]) => set({ items }),
  items_in_cart: [],
  findItemInCart: (item: FindPartsType) => {
    const items_in_cart = get().items_in_cart
    const item_index = items_in_cart
      .findIndex(item_in_cart => item_in_cart.item.key === item.key)
    const item_in_cart = item_index === -1 ? undefined : items_in_cart[item_index]

    return ({
      item_index,
      item_in_cart
    })
  },
  setItemInCart: (item: FindPartsType, amount: number) =>
    set(state => {
      const { item_index } = get().findItemInCart(item)
      let items_in_cart: ItemInCartType[] = []

      if (amount === 0 && item_index !== -1)
        items_in_cart = [
          ...state.items_in_cart.slice(0, item_index),
          ...state.items_in_cart.slice(item_index + 1),
        ]

      if (amount > 0)
        if (item_index !== -1)
          items_in_cart = [
            ...state.items_in_cart.slice(0, item_index),
            { item, amount },
            ...state.items_in_cart.slice(item_index + 1),
          ]
        else
          items_in_cart = [
            ...state.items_in_cart,
            { item, amount },
          ]

      return ({ items_in_cart })
    }),
  // incrementItemInCart: (item: FindPartsType) => set(state => {
  //   const { item_in_cart } = state.findItemInCart(item)

  //   state.setItemInCart(item, item_in_cart ? item_in_cart.amount : 1)
  // }),
  // decrementItemInCart: (item: FindPartsType) => set(state => {

  // }),
}))


export default useStore
