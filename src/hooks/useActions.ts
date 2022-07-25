import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AuthActionCreators from '../store/action/auth'

export const useActionUsers = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AuthActionCreators, dispatch)
}
