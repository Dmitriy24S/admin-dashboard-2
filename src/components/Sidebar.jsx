import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { SiShopware } from 'react-icons/si'
import { Link, NavLink } from 'react-router-dom'

import { useStateContext } from '../context/ContextProvider'
import { links } from '../data/dummyData'

const Sidebar = () => {
  // const activeMenu = true
  const { isSidebarOpen, setIsSidebarOpen, screenSize } = useStateContext()

  // If mobile screen -> close sidebar after click on Link
  const handleCloseSideBar = () => {
    if (isSidebarOpen && screenSize <= 900) {
      setIsSidebarOpen(false)
    }
  }

  const activeLink =
    'flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg bg-light-gray text-md m-2'
  const normalLink =
    'flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-light-gray m-2 dark:hover:bg-main-dark-bg'

  return (
    <div className='px-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {isSidebarOpen && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              // onClick={() => setActiveMenu(false)}
              onClick={handleCloseSideBar}
              className='flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
            >
              <SiShopware />
              <span>Shopyy</span>
            </Link>
            <TooltipComponent
              content='Close'
              position='BottomCenter'
              showTipPointer={false}
            >
              <button
                type='button'
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                className='text-xl rounded-full p-1.5 hover:bg-light-gray mt-3.5 block md:hidden text-[#99abb4] dark:hover:bg-main-dark-bg'
              >
                <AiOutlineClose />
              </button>
            </TooltipComponent>
          </div>
          {/* Menu Links */}
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    // isActive from NavLink
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
