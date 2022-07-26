import {EventActions, EventsActionTypes, IEventState} from './types'

const initialState: IEventState = {
  guests: [],
  events: [],
}

export const eventReducer = (
  state = initialState,
  action: EventActions
): IEventState => {
  switch (action.type) {
    case EventsActionTypes.SET_GUESTS:
      return {...state, guests: action.payload}
    case EventsActionTypes.SET_EVENTS:
      return {...state, events: action.payload}
    default:
      return state
  }
}
