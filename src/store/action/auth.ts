import {IUser} from '../../types/user'
import {AuthActionTypes} from '../reducers/auth/types'

export const setAuth = (auth: boolean) => {
  return {
    type: AuthActionTypes.SET_AUTH,
    payload: auth,
  }
}

export const setUser = (user: IUser) => {
  return {
    type: AuthActionTypes.SET_USER,
    payload: user,
  }
}

export const setError = (error: string) => {
  return {
    type: AuthActionTypes.SET_ERROR,
    payload: error,
  }
}

export const setIsLoading = (isLoading: boolean) => {
  return {
    type: AuthActionTypes.SET_AUTH,
    payload: isLoading,
  }
}
