import {IEvent} from '../../../types/event'
import {IUser} from '../../../types/user'

export interface IEventState {
  guests: IUser[]
  events: IEvent[]
}

//необходима затычка иначе нехавает тип Action
export enum EventsActionTypes {
  ZATUCHKA = 'ZATUCHKA',
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
}

export interface IZatuchkaAction {
  type: EventsActionTypes.ZATUCHKA
}

export interface ISetGuestsAction {
  type: EventsActionTypes.SET_GUESTS
  payload: IUser[]
}

export interface ISetEventAction {
  type: EventsActionTypes.SET_EVENTS
  payload: IEvent[]
}

export type EventActions = IZatuchkaAction | ISetGuestsAction | ISetEventAction
