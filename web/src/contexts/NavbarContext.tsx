import { createContext, useContext, useState } from 'react'

const NavbarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
})

const NavbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // @ts-ignore
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  )
}

const useNavbar = () => {
  return useContext(NavbarContext)
}
