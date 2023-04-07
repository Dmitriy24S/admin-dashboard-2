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
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids'
import React from 'react'
import { PageHeader } from '../components'
import PageContentWrapper from '../components/Shared/PageContentWrapper'
import { contextMenuItems, employeesData, employeesGrid } from '../data/dummyData'

const Employees = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='Page' title='Employees' />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
        // borderRadius='8px'
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </PageContentWrapper>
  )
}

// export default React.memo(Employees)
export default Employees
