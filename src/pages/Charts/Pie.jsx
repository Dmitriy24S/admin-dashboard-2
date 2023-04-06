import React from 'react'
import { Header, PieChart } from '../../components'
import { pieChartData } from '../../data/dummyData'

const Pie = () => {
  return (
    <div className='m-4 md:mt-10 mt-16 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md max-w-7xl mx-auto'>
      <Header category='Pie' title='Project Cost Breakdown' />
      <div className='w-full'>
        <PieChart id='chart-pie' data={pieChartData} legendVisibility height='full' />
      </div>
    </div>
  )
}

export default Pie
