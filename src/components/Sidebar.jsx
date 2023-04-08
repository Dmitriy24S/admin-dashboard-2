import React from 'react'
import { useSidebarContext } from '../context/ContextProvider'
import SidebarContent from './SidebarContent'

const Sidebar = () => {
  const { isSidebarOpen } = useSidebarContext()

  return isSidebarOpen ? (
    <div className='w-72 fixed z-30 sidebar dark:bg-secondary-dark-bg bg-white'>
      <SidebarContent />
    </div>
  ) : (
    <div className='w-0 dark:bg-secondary-dark-bg'>
      <SidebarContent />
    </div>
  )
}

// export default React.memo(Sidebar)
export default Sidebar
