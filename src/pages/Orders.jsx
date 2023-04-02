import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from '@syncfusion/ej2-react-grids'
import React from 'react'
import { Header } from '../components'
import { contextMenuItems, ordersData, ordersGrid } from '../data/dummyData'

const Orders = () => {
  return (
    <div
      className='m-10
mt-16 md:mt-10 p-4 md:p-10 bg-white rounded-3xl overflow-auto dark:bg-secondary-dark-bg'
    >
      <Header category='Page' title='Orders' />
      <GridComponent
        // borderRadius='8px'
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
        }}
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  )
}

// export default React.memo(Orders)
export default Orders
