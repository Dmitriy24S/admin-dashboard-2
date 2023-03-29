import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'

import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../context/ContextProvider'
import avatarImg from '../data/avatar.jpg'

const TopbarButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter' showTipPointer={false}>
    <button
      className='relative text-xl rounded-full p-3 hover:bg-light-ray'
      onClick={customFunc}
    >
      <span
        style={{ backgroundColor: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Topbar = () => {
  const { setIsSidebarOpen, topbarItemsState, toggleState, screenSize, setScreenSize } =
    useStateContext()

  // Check window size
  useEffect(() => {
    const handleScreenResize = () => {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleScreenResize)
    handleScreenResize()

    return () => window.removeEventListener('resize', handleScreenResize)
  }, [])

  // Close/open sidebar depending on screen size
  useEffect(() => {
    if (screenSize <= 900) {
      setIsSidebarOpen(false)
    } else {
      setIsSidebarOpen(true)
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <TopbarButton
        title='Menu'
        customFunc={() => setIsSidebarOpen((prev) => !prev)}
        color='blue'
        dotColor='red'
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <TopbarButton
          title='Cart'
          // customFunc={() => setActiveMenu((prev) => !prev)}
          customFunc={() => toggleState('isCartOpen')}
          color='blue'
          dotColor='red'
          icon={<FiShoppingCart />}
        />
        <TopbarButton
          title='Chat'
          customFunc={() => toggleState('isChatOpen')}
          color='blue'
          dotColor='#03C9D7'
          icon={<BsChatLeft />}
        />
        <TopbarButton
          title='Notification'
          customFunc={() => toggleState('isNotificationOpen')}
          color='blue'
          dotColor='#03C9D7'
          icon={<RiNotification3Line />}
        />
        <TooltipComponent
          content='Profile'
          position='BottomCenter'
          showTipPointer={false}
        >
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => toggleState('isUserProfileOpen')}
          >
            <img src={avatarImg} alt='user' className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>
              <span className='text-gray-700 font-bold ml-1 text-14'>David</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {topbarItemsState.isCartOpen && <Cart />}
        {topbarItemsState.isChatOpen && <Chat />}
        {topbarItemsState.isNotificationOpen && <Notification />}
        {topbarItemsState.isUserProfileOpen && <UserProfile />}
      </div>
    </div>
  )
}

export default Topbar
