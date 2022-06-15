import { createContext } from 'react'

export interface MouseContextState {
  x: number
  y: number
}

export const MouseContext = createContext<MouseContextState>({
  x: 0,
  y: 0,
})
