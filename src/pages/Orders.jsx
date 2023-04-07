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
import { PageHeader } from '../components'
import PageContentWrapper from '../components/Shared/PageContentWrapper'
import { contextMenuItems, ordersData, ordersGrid } from '../data/dummyData'

const Orders = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='Page' title='Orders' />
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
    </PageContentWrapper>
  )
}

// export default React.memo(Orders)
export default Orders
