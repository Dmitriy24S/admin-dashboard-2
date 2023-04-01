import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts'
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../data/dummyData'

const StackedChart = ({ width, height }) => {
  return (
    <ChartComponent
      style={{
        borderRadius: '8px',
      }}
      width={width}
      height={height}
      // id='stack chart' // ! no tooltip
      id='charts' // ! demo data name
      // data insisible without this?
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{
        border: { width: 0 }, // remove it
      }}
      tooltip={{ enable: true }}
      legendSettings={{
        background: 'white',
      }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      {/* draws data: insisible wihout x y axis, overflow/float legend -> give white bg to legend*/}
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default StackedChart
