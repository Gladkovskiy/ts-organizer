import {Card, Form, Input, Button} from 'antd'
import React, {FC} from 'react'
import {useActionUsers} from '../hooks/useActions'
import {useAppSelector} from '../hooks/useSelectors'
import {useGetUsers} from '../http/query/user'
import {rules} from '../utils/rules'

const LoginForm: FC = () => {
  const users = useGetUsers()
  const {error, user} = useAppSelector(state => state.auth)
  const {setUser} = useActionUsers()

  const submit = () => {
    users.refetch()
  }

  return (
    <Card title="Авторизация">
      <Form onFinish={submit}>
        <Form.Item
          label="Имя пользователя"
          name="username"
          rules={[rules.required('Введите имя пользователя')]}
        >
          <Input
            value={user.username}
            onChange={e => setUser({...user, username: e.target.value})}
          />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[rules.required('Введите пароль')]}
        >
          <Input.Password
            value={user.password}
            onChange={e => setUser({...user, password: e.target.value})}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={users.isFetching}>
            Войти
          </Button>
        </Form.Item>
        {error && <div style={{color: 'red'}}>{error}</div>}
      </Form>
    </Card>
  )
}

export default LoginForm
