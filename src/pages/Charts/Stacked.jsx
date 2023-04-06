import React from 'react'
import { Header, StackedChart } from '../../components'

const Stacked = () => {
  return (
    <div className='m-4 md:mt-10 mt-16 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md max-w-7xl mx-auto'>
      <Header category='Stacked' title='Revenue Breakdown' />
      <StackedChart />
    </div>
  )
}

export default Stacked
