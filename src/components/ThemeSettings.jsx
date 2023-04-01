import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCheck } from 'react-icons/bs'

import { useStateContext } from '../context/ContextProvider'
import { themeColors } from '../data/dummyData'

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext()

  return (
    <div className='bg-half-transparent w-screen absolute bottom-0 nav-item top-0 right-0'>
      <div className='fixed right-0 h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg w-[234px]'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>Settings</p>
          <button
            type='button'
            aria-label='close theme sidebar'
            onClick={() => setThemeSettings(false)} // close theme sidebar
            className='text-xl p-1.5 text-[#99abb4] hover:bg-light-gray hover:drop-shadow-xl rounded-full dark:hover:bg-main-dark-bg'
          >
            <AiOutlineClose />
          </button>
        </div>
        {/* Options */}
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Options</p>
          <div className='mt-4'>
            <input
              type='radio'
              name='light'
              id='light'
              value='Light'
              className='cursor-pointer'
              onChange={() => setMode('Light')}
              checked={currentMode === 'Light'}
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-4'>
            <input
              type='radio'
              name='dark'
              id='dark'
              value='Dark'
              className='cursor-pointer'
              onChange={() => setMode('Dark')}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>
        {/* Colors */}
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3 flex-wrap'>
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position='TopCenter'
                showTipPointer={false}
              >
                <div className='relative mt-4 cursor-pointer flex gap-2 items-center'>
                  <button
                    type='button'
                    className='rounded-full cursor-pointer h-10 w-10'
                    style={{
                      backgroundColor: item.color,
                    }}
                    onClick={() => setColor(item.color)}
                    aria-label={item.name}
                  >
                    <BsCheck
                      // className={`ml-2 text-2xl text-white ${false ? 'block' : 'hidden'}`}
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
                {/* {color.name} */}
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings
