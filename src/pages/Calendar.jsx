import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Week,
  WorkWeek,
} from '@syncfusion/ej2-react-schedule'

import { PageHeader } from '../components'
import PageContentWrapper from '../components/Shared/PageContentWrapper'
import { scheduleData } from '../data/dummyData'

const Calendar = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='App' title='Calendar' />
      <ScheduleComponent
        style={{
          borderRadius: '8px',
          minWidth: '600px',
        }}
        height='650px'
        eventSettings={{
          dataSource: scheduleData,
        }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </PageContentWrapper>
  )
}

export default Calendar
