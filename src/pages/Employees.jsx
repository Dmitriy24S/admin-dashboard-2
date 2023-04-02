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
import { Header } from '../components'
import { contextMenuItems, employeesData, employeesGrid } from '../data/dummyData'

const Employees = () => {
  return (
    <div
      className='m-10
  mt-16 md:mt-10 p-4 md:p-10 bg-white rounded-3xl overflow-auto dark:bg-secondary-dark-bg'
    >
      <Header category='Page' title='Employees' />
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
    </div>
  )
}

// export default React.memo(Employees)
export default Employees
