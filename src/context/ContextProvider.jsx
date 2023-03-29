import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  isChatOpen: false,
  isCartOpen: false,
  isUserProfileOpen: false,
  isNotificationOpen: false,
}

export const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <StateContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext)
