import {IEvent} from '../../types/event'
import {IUser} from '../../types/user'
import {EventsActionTypes} from '../reducers/event/types'

export const setGuests = (guests: IUser[]) => {
  return {
    type: EventsActionTypes.SET_GUESTS,
    payload: guests,
  }
}

export const setEvents = (events: IEvent[]) => {
  return {
    type: EventsActionTypes.SET_EVENTS,
    payload: events,
  }
}
