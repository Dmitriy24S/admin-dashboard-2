import React from 'react'

import { Header, LineChart } from '../../components'

const Line = () => (
  // <div className='m-10 mt-16 md:mt-10 p-4 md:p-10 bg-white rounded-3xl overflow-auto dark:bg-secondary-dark-bg'>
  <div className='m-4 md:mt-10 mt-16 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md'>
    <Header category='Line' title='Inflation Rate' />
    <div className='w-full'>
      <LineChart />
    </div>
  </div>
)

export default Line
