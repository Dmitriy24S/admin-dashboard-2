import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from '@syncfusion/ej2-react-kanban'
import { PageHeader } from '../components'
import PageContentWrapper from '../components/Shared/PageContentWrapper'
import { kanbanData, kanbanGrid } from '../data/dummyData'

const Kanban = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='App' title='Kanban' />
      <KanbanComponent
        id='kanban'
        keyField='Status'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        width='100%'
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
          margin: '0 auto',
          minWidth: '1000px',
        }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </PageContentWrapper>
  )
}

export default Kanban
