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

import { Header } from '../components'
import { scheduleData } from '../data/dummyData'

const Calendar = () => {
  return (
    <div
      className='m-10
  mt-16 md:mt-10 p-4 md:p-10 bg-white rounded-3xl overflow-auto dark:bg-secondary-dark-bg'
    >
      <Header category='App' title='Calendar' />
      <ScheduleComponent
        style={{
          borderRadius: '8px',
        }}
        height='650px'
        eventSettings={{
          dataSource: scheduleData,
        }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
