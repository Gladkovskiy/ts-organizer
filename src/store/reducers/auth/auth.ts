import {IAuthState, AuthActions, AuthActionTypes} from './types'

const initialState: IAuthState = {
  isAuth: false,
  user: {
    password: '',
    username: '',
  },
  isLoading: false,
  error: '',
}

export const authReducer = (
  state = initialState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH:
      return {...state, isAuth: action.payload}

    case AuthActionTypes.SET_USER:
      return {...state, user: action.payload}

    case AuthActionTypes.SET_ERROR:
      return {...state, error: action.payload}

    case AuthActionTypes.SET_IS_LOADING:
      return {...state, isLoading: action.payload}

    default:
      return state
  }
}
