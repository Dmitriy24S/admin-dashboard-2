import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  isChatOpen: false,
  isCartOpen: false,
  isUserProfileOpen: false,
  isNotificationOpen: false,
}

function getStoredValue(key, defaultValue) {
  const storedValue = localStorage.getItem(key)
  console.log('get stored value, storedValue:', storedValue)
  // return storedValue ? JSON.parse(storedValue) : defaultValue
  return storedValue ? storedValue : defaultValue
}

export const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [topbarItemsState, setTopbarItemsState] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  // const [currentColor, setCurrentColor] = useState('#1A97F5')
  const [currentColor, setCurrentColor] = useState(
    getStoredValue('dashboardColorMode', '#1A97F5')
  )
  // const [currentMode, setCurrentMode] = useState('Light')
  const [currentMode, setCurrentMode] = useState(
    getStoredValue('dashboardThemeMode', 'Light')
  )
  const [themeSettings, setThemeSettings] = useState(false) // sidebar open/close?

  const setMode = (value) => {
    console.log('set mode:', value)
    setCurrentMode(value)
    localStorage.setItem('dashboardThemeMode', value)
  }

  const setColor = (value) => {
    console.log('set color mode:', value)
    setCurrentColor(value)
    localStorage.setItem('dashboardColorMode', value)
  }

  const toggleState = (clickedItem) => {
    console.log('clickedItem', clickedItem)
    console.log('toggleState - initialState1', initialState)
    // const itemState = initialState.clickedItem // undefined
    // const itemState = initialState[clickedItem]
    const itemState = topbarItemsState[clickedItem]
    // setIsClicked({ ...initialState, [clickedItem]: true }) // !
    // setIsClicked({ ...initialState, [clickedItem]: true ? false : true })
    console.log('itemState', itemState)
    // setIsClicked({ ...initialState, [clickedItem]: true ? false : true })
    setTopbarItemsState({ ...initialState, [clickedItem]: !itemState })
    console.log('toggleState - initialState2', initialState)
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
        setColor,
        setMode,
        currentMode,
        currentColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext)
