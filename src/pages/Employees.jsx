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
import { Header } from '../components'
import { contextMenuItems, employeesData, employeesGrid } from '../data/dummyData'

const Employees = () => {
  return (
    <div className='m-10 mt-16 md:mt-10 p-4 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
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

export default Employees
