import React, { useCallback, useState } from 'react'
import './App.css'
import { Footer, Sidebar, ThemeSettings, Topbar } from './components'
import ThemeSettingsButton from './components/ThemeSettingsButton'
import { useSidebarContext, useStateContext } from './context/ContextProvider'

import { RoutesComponent } from './pages'

function App() {
  const { currentMode } = useStateContext()
  const { isSidebarOpen } = useSidebarContext()
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false)

  // const toggleSettingsMenu = () => {
  //   console.count('toggleSettingsMenu func')
  //   setIsThemeSettingsOpen((prev) => !prev)
  // }
  const toggleSettingsMenu = useCallback(() => {
    setIsThemeSettingsOpen((prev) => !prev)
  }, [])

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='flex relative dark:bg-main-dark-bg'>
        {/* Sidebar */}
        {isSidebarOpen ? (
          <div className='w-72 fixed z-50 sidebar dark:bg-secondary-dark-bg bg-white '>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        {/* Main */}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            isSidebarOpen ? 'md:ml-72 overflow-hidden' : 'flex-2'
          }`}
        >
          <div className='fixed md:static z-40 bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Topbar />
          </div>
          {/* Theme Settings */}
          <div className='dark:bg-main-dark-bg p-4 pt-16 md:pt-10 min-h-screen'>
            {isThemeSettingsOpen && (
              <ThemeSettings toggleSettingsMenu={toggleSettingsMenu} />
            )}
            {/* Routes */}
            <RoutesComponent />
          </div>
          {/* Theme Settings Button */}
          <ThemeSettingsButton toggleSettingsMenu={toggleSettingsMenu} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(App)
