import { create } from 'zustand'
import { UserType, ItemType } from '../models'


export type StateType = {
  user: null | UserType
  items: ItemType[]
}


const useStore = create<StateType>(set => ({
  user: null,
  items: [],
  setItems: (items: ItemType[]) => set({ items: items }),
}))


export default useStore
