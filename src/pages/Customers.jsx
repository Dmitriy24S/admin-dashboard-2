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
  Search,
  Selection,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids'
import React from 'react'
import { PageHeader } from '../components'
import PageContentWrapper from '../components/Shared/PageContentWrapper'
import { contextMenuItems, customersData, customersGrid } from '../data/dummyData'

// const Customers = React.memo(() => {
const Customers = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='Page' title='Customers' />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        width='auto'
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </PageContentWrapper>
  )
}

export default Customers
