import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from '@syncfusion/ej2-react-kanban'
import { Header } from '../components'
import { kanbanData, kanbanGrid } from '../data/dummyData'

const Kanban = () => {
  return (
    <div className='m-10 mt-16 md:mt-10 p-10 bg-white rounded-3xl overflow-scroll'>
      <Header category='App' title='Kanban' />
      <KanbanComponent
        id='kanban'
        keyField='Status'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        width='1000px'
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban
