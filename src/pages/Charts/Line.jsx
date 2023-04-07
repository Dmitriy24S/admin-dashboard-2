import React from 'react'

import { LineChart, PageHeader } from '../../components'
import PageContentWrapper from '../../components/Shared/PageContentWrapper'

const Line = () => (
  <PageContentWrapper>
    <PageHeader category='Line' title='Inflation Rate' />
    <div className='w-full'>
      <LineChart />
    </div>
  </PageContentWrapper>
)

export default Line
