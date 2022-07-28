import {Button, Layout, Modal, Row} from 'antd'
import React, {FC, useEffect, useState} from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import {useActionEvents} from '../hooks/useActions'
import {useAppSelector} from '../hooks/useSelectors'
import {useGetGuests} from '../http/query/events/guests'
import {IEvent} from '../types/event'

const Events: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  useGetGuests()
  const {guests, events} = useAppSelector(state => state.event)
  const {user} = useAppSelector(state => state.auth)
  const {setEvents} = useActionEvents()

  useEffect(() => {
    const events = localStorage.getItem('events') || '[]'
    const json: IEvent[] = JSON.parse(events)
    const currentEvent = json.filter(
      event => event.guest === user.username || event.author === user.username
    )
    setEvents(currentEvent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //имитация работы с сервером через localstorage
  const addEvent = (event: IEvent) => {
    const events = localStorage.getItem('events') || '[]'
    const json: IEvent[] = JSON.parse(events)
    setEvents([...json, event])
    localStorage.setItem('events', JSON.stringify([...json, event]))
    setIsModalVisible(false)
  }

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          Добавить событие
        </Button>
        <Modal
          title="Добавить событие"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <EventForm guests={guests} submit={addEvent} />
        </Modal>
      </Row>
    </Layout>
  )
}

export default Events
