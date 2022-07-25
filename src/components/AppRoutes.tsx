import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import {useAppSelector} from '../hooks/useSelectors'
import Login from '../page/Login'
import {privetRouters, pupblicRouters} from '../routes/index'
const AppRoutes: FC = () => {
  const {isAuth} = useAppSelector(state => state.auth)

  return (
    <Routes>
      {pupblicRouters.map(route => (
        <Route {...route} key={route.path} />
      ))}
      {isAuth
        ? privetRouters.map(route => <Route {...route} key={route.path} />)
        : null}
      <Route path="*" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
