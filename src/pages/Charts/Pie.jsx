import React from 'react'
import { PageHeader, PieChart } from '../../components'
import PageContentWrapper from '../../components/Shared/PageContentWrapper'
import { pieChartData } from '../../data/dummyData'

const Pie = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='Pie' title='Project Cost Breakdown' />
      <div className='w-full'>
        <PieChart id='chart-pie' data={pieChartData} legendVisibility height='full' />
      </div>
    </PageContentWrapper>
  )
}

export default Pie
