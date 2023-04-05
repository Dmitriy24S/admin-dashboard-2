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
import { Header } from '../../components'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummyData'

const Bar = () => {
  return (
    <div className='m-4 md:mt-10 mt-16 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md max-w-7xl mx-auto'>
      <Header category='Bar' title='Olympic Medal Counts - RIO' />
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
    </div>
  )
}

export default Bar
