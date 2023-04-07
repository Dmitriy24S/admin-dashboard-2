import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import React from 'react'
import { PageHeader } from '../components'
import PageContentWrapper from '../components/Shared/PageContentWrapper'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
  // setSelectedValue(args.currentValue.hex)
  document.getElementById('value').style.color = args.currentValue.hex
  document.getElementById('value').textContent = args.currentValue.hex
}

const CustomColorPicker = ({ id, mode }) => (
  <ColorPickerComponent
    id={id}
    mode={mode}
    modeSwitcher={false}
    inline
    showButtons={false}
    change={change}
    // value={'#4c3179'}
  />
)

const ColorPicker = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='App' title='Color Picker' />
      <div className='text-center'>
        {}
        <div
          id='preview' // !
        />
        <p
          id='value'
          style={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            letterSpacing: '1.7px',
            // color: `#${selectedValue}`,
          }}
        >
          <br />
        </p>
        <div className='flex justify-between flex-wrap items-center gap-20'>
          <div>
            <p className='dark:text-gray-200'>Inline Pallete</p>
            <CustomColorPicker id='inline-palette' mode='Palette' />
          </div>
          <div>
            <p className='dark:text-gray-200'>Inline Picker</p>
            <CustomColorPicker id='inline-picker' mode='Picker' />
          </div>
        </div>
      </div>
    </PageContentWrapper>
  )
}

export default ColorPicker
