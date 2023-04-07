import React from 'react'
import { PageHeader, StackedChart } from '../../components'
import PageContentWrapper from '../../components/Shared/PageContentWrapper'

const Stacked = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='Stacked' title='Revenue Breakdown' />
      <StackedChart />
    </PageContentWrapper>
  )
}

export default Stacked
