import {authReducer} from './auth/auth'
import {eventReducer} from './event/event'

const reducers = {
  auth: authReducer,
  event: eventReducer,
}

export default reducers
