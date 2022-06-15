import { any } from 'prop-types'
import { createContext, useState, Dispatch, ReactNode } from 'react'

export interface RtlState {
  rtl: boolean
  setRtl: Dispatch<React.SetStateAction<boolean>>
}

// @ts-ignore
export const RtlContext = createContext({
  rtl: false,
  setRtl: () => {},
})

export const RtlProvider = ({ children }: { children: ReactNode }) => {
  const [rtl, setRtl] = useState(false)

  return (
    // @ts-ignore
    <RtlContext.Provider value={(rtl, setRtl)}>{children}</RtlContext.Provider>
  )
}

export function useRtl() {
  const context = React.useContext(RtlContext)
  if (context === null) {
    throw new Error('useRtl must be used within a RtlProvider')
  }
  return context
}
