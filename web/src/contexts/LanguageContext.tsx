import { createContext, useContext } from 'react'
import detectBrowserLanguage from 'detect-browser-language'

const LanguageContext = createContext(detectBrowserLanguage())

export const LanguageProvider = ({ children }) => {
  return (
    <LanguageContext.Provider value="en-US">
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
