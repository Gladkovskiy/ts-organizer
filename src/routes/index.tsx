import React from 'react'
import Events from '../page/Events'
import Login from '../page/Login'

export interface IRotes {
  path: string
  element: React.ReactNode
}

export enum RoutesName {
  LOGIN = '/login',
  EVENTS = '/',
}

export const pupblicRouters: IRotes[] = [
  {path: RoutesName.LOGIN, element: <Login />},
]

export const privetRouters: IRotes[] = [
  {path: RoutesName.EVENTS, element: <Events />},
]
