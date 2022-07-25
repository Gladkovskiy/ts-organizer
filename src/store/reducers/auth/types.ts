import {IUser} from '../../../types/user'

export interface IAuthState {
  isAuth: boolean
  user: IUser
  isLoading: boolean
  error: string
}

//необходима затычка иначе нехавает тип Action
export enum AuthActionTypes {
  ZATUCHKA = 'ZATUCHKA',
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface IZatuchkaAction {
  type: AuthActionTypes.ZATUCHKA
}

export interface ISetAuthAction {
  type: AuthActionTypes.SET_AUTH
  payload: boolean
}

export interface ISetUserAction {
  type: AuthActionTypes.SET_USER
  payload: IUser
}

export interface ISetErrorAction {
  type: AuthActionTypes.SET_ERROR
  payload: string
}

export interface ISetIsLoadingAction {
  type: AuthActionTypes.SET_IS_LOADING
  payload: boolean
}

export type AuthActions =
  | IZatuchkaAction
  | ISetAuthAction
  | ISetUserAction
  | ISetErrorAction
  | ISetIsLoadingAction
