import { atom } from 'recoil'

//  creating a piece of state called modalState
export const modalState = atom({
  key: 'modalState', // should be unique
  default: false,
})
