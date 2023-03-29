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
  const [topbarItemsState, setTopbarItemsState] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)

  const toggleState = (clickedItem) => {
    console.log('clickedItem', clickedItem)
    // const itemState = initialState.clickedItem // undefined
    // const itemState = initialState[clickedItem]
    const itemState = topbarItemsState[clickedItem]
    // setIsClicked({ ...initialState, [clickedItem]: true }) // !
    // setIsClicked({ ...initialState, [clickedItem]: true ? false : true })
    console.log('itemState', itemState)
    // setIsClicked({ ...initialState, [clickedItem]: true ? false : true })
    setTopbarItemsState({ ...initialState, [clickedItem]: !itemState })
    console.log('initialState', initialState)
    // {
    //     "isChatOpen": false,
    //     "isCartOpen": false,
    //     "isUserProfile": false,
    //     "isNotification": false
    // }
  }

  return (
    <StateContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        topbarItemsState,
        toggleState,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext)
