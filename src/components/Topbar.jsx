import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect, useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'

import { Cart, Chat, Notification, UserProfile } from '.'
import {
  useSidebarContext,
  useStateContext,
  useTopbarContext,
} from '../context/ContextProvider'
import avatarImg from '../data/avatar.jpg'
import useDisableBodyScroll from '../hooks/useDisableBodyScroll'
import useHandleClickOutside from '../hooks/useHandleClickOutside'

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
  const { screenSize, setScreenSize, currentColor } = useStateContext()
  const { setIsSidebarOpen } = useSidebarContext()
  const { topbarItemsState, toggleState } = useTopbarContext()

  console.log('Topbar topbarItemsState:', topbarItemsState)

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

  // const topbarRef = useRef(null)
  const topbarRef = useHandleClickOutside(
    () =>
      toggleState({
        isChatOpen: false,
        isCartOpen: false,
        isUserProfileOpen: false,
        isNotificationOpen: false,
      }),
    topbarItemsState
  )

  useDisableBodyScroll(topbarItemsState.isCartOpen) // Disable body scroll when open cart

  return (
    <div
      ref={topbarRef}
      className='flex justify-between p-2 md:mx-6 relative dark:text-gray-200'
    >
      <TopbarButton
        title='Menu'
        customFunc={() => setIsSidebarOpen((prev) => !prev)}
        // color='blue'
        // color={currentColor}
        // dotColor='red'
        icon={<AiOutlineMenu />}
      />
      <div className='flex items-center'>
        <TopbarButton
          title='Cart'
          // customFunc={() => setActiveMenu((prev) => !prev)}
          customFunc={() => toggleState('isCartOpen')}
          // color='blue'
          // dotColor='red'
          dotColor={currentColor}
          icon={<FiShoppingCart />}
        />
        <TopbarButton
          title='Chat'
          customFunc={() => toggleState('isChatOpen')}
          // color='blue'
          // dotColor='#03C9D7'
          dotColor={currentColor}
          icon={<BsChatLeft />}
        />
        <TopbarButton
          title='Notification'
          customFunc={() => toggleState('isNotificationOpen')}
          // color='blue'
          // dotColor='#03C9D7'
          dotColor={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent
          content='Profile'
          position='BottomCenter'
          showTipPointer={false}
        >
          <button
            type='button'
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg dark:hover:bg-secondary-dark-bg'
            onClick={() => toggleState('isUserProfileOpen')}
          >
            <img src={avatarImg} alt='user' className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>
              <span className='text-gray-700 font-bold ml-1 text-14 dark:text-gray-100'>
                David
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </button>
        </TooltipComponent>
        {topbarItemsState.isCartOpen && <Cart />}
        {topbarItemsState.isChatOpen && <Chat />}
        {topbarItemsState.isNotificationOpen && <Notification />}
        {topbarItemsState.isUserProfileOpen && <UserProfile />}
      </div>
    </div>
  )
}

export default React.memo(Topbar)
