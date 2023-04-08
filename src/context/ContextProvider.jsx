import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const StateContext = createContext()
const SidebarContext = createContext()
const TopbarContext = createContext()

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

export const StateContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const [topbarItemsState, setTopbarItemsState] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState(
    getStoredValue('dashboardColorMode', '#1A97F5')
  ) // useState('#1A97F5')
  const [currentMode, setCurrentMode] = useState(
    getStoredValue('dashboardThemeMode', 'Light')
  )

  // ! The 'setColor' function makes the dependencies of useMemo Hook (at line 79) change on every render. Move it inside the useMemo callback. Alternatively, wrap the definition of 'setColor' in its own useCallback() Hook.eslintreact-hooks/exhaustive-deps
  const setMode = useCallback((value) => {
    console.log('set mode:', value)
    setCurrentMode(value)
    localStorage.setItem('dashboardThemeMode', value)
  }, [])

  const setColor = useCallback((value) => {
    console.log('set color mode:', value)
    setCurrentColor(value)
    localStorage.setItem('dashboardColorMode', value)
  }, [])

  const toggleState = useCallback(
    (clickedItem) => {
      if (!(clickedItem in topbarItemsState)) {
        setTopbarItemsState(initialState)
        return
      }
      console.log('1clickedItem', clickedItem)
      console.log('2toggleState - initialState1', initialState)
      const itemState = topbarItemsState[clickedItem]
      console.log('3itemState', itemState)
      // setIsClicked({ ...initialState, [clickedItem]: true }) // !
      // setIsClicked({ ...initialState, [clickedItem]: true ? false : true })
      setTopbarItemsState({ ...initialState, [clickedItem]: !itemState })
      console.log('4toggleState - initialState2', initialState)
    },
    [topbarItemsState]
  )

  const values = useMemo(
    () => ({
      screenSize,
      setScreenSize,
      setColor,
      setMode,
      currentMode,
      currentColor,
    }),
    [screenSize, setScreenSize, setColor, setMode, currentMode, currentColor]
  )

  const topbarValues = useMemo(
    () => ({
      topbarItemsState,
      toggleState,
    }),
    [topbarItemsState, toggleState]
  )

  const sidebarValues = useMemo(
    () => ({
      isSidebarOpen,
      setIsSidebarOpen,
    }),
    [isSidebarOpen, setIsSidebarOpen]
  )

  return (
    <StateContext.Provider value={values}>
      <SidebarContext.Provider value={sidebarValues}>
        <TopbarContext.Provider value={topbarValues}>{children}</TopbarContext.Provider>
      </SidebarContext.Provider>
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
export const useSidebarContext = () => useContext(SidebarContext)
export const useTopbarContext = () => useContext(TopbarContext)
