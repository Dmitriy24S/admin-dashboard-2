import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts'
import React from 'react'
import { Header } from '../../components'
import { useStateContext } from '../../context/ContextProvider'
import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from '../../data/dummyData'

const ColorMapping = () => {
  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:mt-10 mt-16 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md max-w-7xl mx-auto'>
      <Header category='Color Mappping' title='USA Climate - Weather By Month' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          // primaryXAxis={ColorMappingPrimaryXAxis}
          primaryXAxis={{
            ...ColorMappingPrimaryXAxis,
            labelStyle: {
              color: currentMode === 'Dark' ? '#c5c5c5' : undefined,
            },
            titleStyle: {
              color: currentMode === 'Dark' ? '#c5c5c5' : undefined,
            },
          }}
          primaryYAxis={{
            ...ColorMappingPrimaryYAxis,
            labelStyle: {
              color: currentMode === 'Dark' ? '#c5c5c5' : undefined,
            },
            titleStyle: {
              color: currentMode === 'Dark' ? '#c5c5c5' : undefined,
            },
          }}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{
            mode: 'Range',
            background: 'transparent',
            textStyle: {
              color: currentMode === 'Dark' ? '#c5c5c5' : undefined,
            },
          }}
          tooltip={{ enable: true }}
          background='transparent'
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name='USA'
              xName='x'
              yName='y'
              type='Column'
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMapping
