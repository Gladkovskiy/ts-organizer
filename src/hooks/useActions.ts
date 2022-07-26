import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AuthActionCreators from '../store/action/auth'
import * as EventsActionCreators from '../store/action/event'

export const useActionUsers = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AuthActionCreators, dispatch)
}

export const useActionEvents = () => {
  const dispatch = useDispatch()
  return bindActionCreators(EventsActionCreators, dispatch)
}
