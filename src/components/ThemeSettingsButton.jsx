import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React from 'react'
import { FiSettings } from 'react-icons/fi'

const ThemeSettingsButton = ({ toggleSettingsMenu }) => {
  return (
    <div className='fixed right-4 bottom-4 z-10'>
      <TooltipComponent content='Settings' position='TopCenter' showTipPointer={false}>
        <button
          aria-label='Settings'
          className='text-3xl rounded-full dark:text-gray-300'
          onClick={toggleSettingsMenu}
        >
          <FiSettings />
        </button>
      </TooltipComponent>
    </div>
  )
}

// export default ThemeSettingsButton
export default React.memo(ThemeSettingsButton)
