import {Menu, Row} from 'antd'
import {Header} from 'antd/lib/layout/layout'
import React, {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {useActionUsers} from '../hooks/useActions'
import {useAppSelector} from '../hooks/useSelectors'
import {RoutesName} from '../types/routes'

const Navbar: FC = () => {
  const nav = useNavigate()
  const {isAuth} = useAppSelector(state => state.auth)
  const {setAuth, setUser} = useActionUsers()

  const exit = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    setAuth(false)
    setUser({password: '', username: ''})
  }

  return (
    <Header>
      <Row justify="end">
        <Menu theme="dark" style={{display: 'flex', alignItems: 'center'}}>
          {isAuth ? (
            <>
              <div style={{color: 'white'}}>Andrey Gladkov</div>
              <Menu.Item key={1} onClick={exit}>
                Выйти
              </Menu.Item>
            </>
          ) : (
            <Menu.Item key={1} onClick={() => nav(RoutesName.LOGIN)}>
              Логин
            </Menu.Item>
          )}
        </Menu>
      </Row>
    </Header>
  )
}

export default Navbar
