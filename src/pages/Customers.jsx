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
import { Header } from '../components'
import { contextMenuItems, customersData, customersGrid } from '../data/dummyData'

const Customers = () => {
  return (
    <div
      className='m-10
  mt-16 md:mt-10 p-4 md:p-10 bg-white rounded-3xl overflow-auto dark:bg-secondary-dark-bg'
    >
      <Header category='Page' title='Customers' />
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
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers
