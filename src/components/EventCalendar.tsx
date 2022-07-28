import {Calendar} from 'antd'
import {Moment} from 'moment'
import React, {FC} from 'react'
import {IEvent} from '../types/event'
import {formateDate} from '../utils/date'

interface EventCalendarProps {
  events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = ({events}) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formateDate(value.toDate())
    const currentDayEvent = events.filter(event => event.date === formatedDate)
    return (
      <div>
        {currentDayEvent.map((event, index) => (
          <div key={index}>{event.description}</div>
        ))}
      </div>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}

export default EventCalendar
