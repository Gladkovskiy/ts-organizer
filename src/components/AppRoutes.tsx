import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../page/Login'
import {privetRouters, pupblicRouters} from '../routes/index'
const AppRoutes: FC = () => {
  const auth = true

  return (
    <Routes>
      {pupblicRouters.map(route => (
        <Route {...route} key={route.path} />
      ))}
      {auth
        ? privetRouters.map(route => <Route {...route} key={route.path} />)
        : null}
      <Route path="*" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
