import {Button, DatePicker, Form, Input, Row, Select} from 'antd'
import {Option} from 'antd/lib/mentions'
import {Moment} from 'moment'
import React, {FC, useState} from 'react'
import {IEvent} from '../types/event'
import {IUser} from '../types/user'
import {rules} from '../utils/rules'

interface EventFormProps {
  guests: IUser[]
}

const EventForm: FC<EventFormProps> = ({guests}) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  })

  const selectDate = (date: Moment | null) => {
    console.log(date)
  }

  return (
    <Form>
      <Form.Item
        label="Название события"
        name="description"
        rules={[rules.required('Введите названия события')]}
      >
        <Input
          value={event.description}
          onChange={e => setEvent({...event, description: e.target.value})}
        />
      </Form.Item>

      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.required('Выберите дату события')]}
      >
        <DatePicker onChange={selectDate} />
      </Form.Item>

      <Form.Item
        label="Пользователь"
        name="guest"
        rules={[rules.required('Выберите пользователь')]}
      >
        <Select onChange={guest => setEvent({...event, guest})}>
          {guests.map(guest => (
            <Option value={guest.username} key={guest.username}>
              {guest.username}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Row>
      </Form.Item>
    </Form>
  )
}

export default EventForm
