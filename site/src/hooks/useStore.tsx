import { create } from 'zustand'
import { UserType, ItemType, ItemInCartType, IdType } from '../models'


export type StateType = {
  user: null | UserType
  items: ItemType[]
  setItems: (items: ItemType[]) => void
  // getItem: (item_id: IdType) => undefined | ItemType
  items_in_cart: ItemInCartType[]
  setItemInCart: (item_id: IdType, amount: number) => void
}


const useStore = create<StateType>(set => ({
  user: null,
  items: [],
  setItems: (items: ItemType[]) => set({ items }),
  items_in_cart: [],
  setItemInCart: (item_id: IdType, amount: number) =>
    set(state => {
      const item_index = state.items_in_cart.findIndex(item => item.item_id === item_id)
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
            { item_id, amount },
            ...state.items_in_cart.slice(item_index + 1),
          ]
        else
          items_in_cart = [
            ...state.items_in_cart,
            { item_id, amount },
          ]

      return ({ items_in_cart })
    })
  // addItem: (new_item: ItemType) => set((state) => ({ items: [...state.items, new_item] })),
  // removeItem: (new_item: ItemType) => set((state) => ({ items: [...state.items, new_item] })),
}))


export default useStore
