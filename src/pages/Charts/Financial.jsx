import {
  ChartComponent,
  Crosshair,
  DateTime,
  HiloSeries,
  Inject,
  Logarithmic,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Zoom,
} from '@syncfusion/ej2-react-charts'
import React from 'react'
import { Header } from '../../components'
import { useStateContext } from '../../context/ContextProvider'
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from '../../data/dummyData'

const date1 = new Date('2017, 1, 1')

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low
  }
}
const returnValue = financialChartData.filter(filterValue)

const Financial = () => {
  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:mt-10 mt-16 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md max-w-7xl mx-auto'>
      <Header category='Financial' title='AAPLE Historical' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={{
            ...FinancialPrimaryXAxis,
            labelStyle: {
              color: currentMode === 'Dark' ? '#c5c5c5' : undefined,
            },
            titleStyle: {
              color: currentMode === 'Dark' ? '#c5c5c5' : undefined,
            },
          }}
          // primaryYAxis={FinancialPrimaryYAxis}
          primaryYAxis={{
            ...FinancialPrimaryYAxis,
            labelStyle: {
              color: currentMode === 'Dark' ? '#c5c5c5' : undefined,
            },
            titleStyle: {
              color: currentMode === 'Dark' ? '#c5c5c5' : undefined,
            },
          }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          chartArea={{ border: { width: 0 } }}
          background='transparent'
          subTitleStyle={{
            textStyle: {
              color: 'red',
            },
          }}
        >
          <Inject
            services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName='x'
              yName='low'
              name='Apple Inc'
              type='Hilo'
              low='low'
              high='high'
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial
