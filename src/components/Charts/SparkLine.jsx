import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts'
import React from 'react'

// const SparkLine = ({ id, height, width, color, currentColor, data, type }) => {
// ! Using class component fixes error on window resize: SparklineComponent(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, currentColor, data, type } = this.props

    return (
      SparklineComponent && (
        <SparklineComponent
          id={id}
          height={height}
          width={width}
          lineWidth={1}
          valueType='Numeric'
          fill={color}
          border={{ color: currentColor, width: 2 }}
          tooltipSettings={{
            visible: true,
            format: '${x} : data ${yval}',
            trackLineSettings: {
              visible: true,
            },
          }}
          markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
          dataSource={data}
          xName='x'
          yName='yval' // !
          type={type}
        >
          <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
      )
    )
  }
}

export default SparkLine
