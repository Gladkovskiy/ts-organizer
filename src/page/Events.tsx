import {Button, Layout, Modal, Row} from 'antd'
import React, {FC, useState} from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import {useAppSelector} from '../hooks/useSelectors'
import {useGetGuests} from '../http/query/events/guests'

const Events: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  useGetGuests()
  const {guests} = useAppSelector(state => state.event)

  return (
    <Layout>
      <EventCalendar events={[]} />
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
          <EventForm guests={guests} />
        </Modal>
      </Row>
    </Layout>
  )
}

export default Events
