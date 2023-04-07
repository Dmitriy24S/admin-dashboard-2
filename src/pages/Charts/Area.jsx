import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
} from '@syncfusion/ej2-react-charts'
import React from 'react'
import { PageHeader } from '../../components'
import PageContentWrapper from '../../components/Shared/PageContentWrapper'
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from '../../data/dummyData'
// import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  // const { currentMode } = useStateContext();

  return (
    <PageContentWrapper>
      <PageHeader category='Area' title='Inflation Rate in percentage' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
          style={{ borderRadius: '8px' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </PageContentWrapper>
  )
}

export default Area
