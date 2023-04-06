import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSelection,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PyramidSeries,
} from '@syncfusion/ej2-react-charts'
import React from 'react'
import { Header } from '../../components'
import { useStateContext } from '../../context/ContextProvider'
import { PyramidData } from '../../data/dummyData'

const Pyramid = () => {
  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:mt-10 mt-16 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md max-w-7xl mx-auto'>
      <Header category='Pyramid' title='Food Comparison Chart' />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pyramid-chart'
          tooltip={{ enable: true }}
          // background='transparent'
          background={currentMode === 'Dark' ? '#33373E' : undefined}
          legendSettings={{
            borderRadius: '8px',
            overflow: 'hidden',
            // background: 'white'
            // background: currentMode === 'Dark' ? '#1c1d1f' : '#f4f4f4',
            // background: currentMode === 'Dark' ? '#2c2d2e' : undefined,
            textStyle: {
              color: currentMode === 'Dark' ? '#e8e8e8' : undefined,
            },
          }}
          style={{
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid
