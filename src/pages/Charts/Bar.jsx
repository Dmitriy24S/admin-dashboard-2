import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts'
import React from 'react'
import { PageHeader } from '../../components'
import PageContentWrapper from '../../components/Shared/PageContentWrapper'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummyData'

const Bar = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='Bar' title='Olympic Medal Counts - RIO' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ background: 'white' }}
          style={{
            borderRadius: '8px',
          }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </PageContentWrapper>
  )
}

export default Bar
