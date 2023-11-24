import { create } from 'zustand'
import { UserType, ItemType } from '../models'


export type StateType = {
  user: null | UserType
  items: ItemType[]
  addItem: (new_item: ItemType) => void
  removeItem: (new_item: ItemType) => void
}


const useStore = create<StateType>(set => ({
  user: null,
  items: [],
  addItem: (new_item: ItemType) => set((state) => ({ items: [...state.items, new_item] })),
  removeItem: (new_item: ItemType) => set((state) => ({ items: [...state.items, new_item] })),
}))


export default useStore
