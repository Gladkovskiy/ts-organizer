import {useQuery} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'
import {useActionUsers} from '../../../hooks/useActions'
import {useAppSelector} from '../../../hooks/useSelectors'
import {RoutesName} from '../../../types/routes'
import {getUsers} from '../../api/user'

export const useGetUsers = () => {
  const {setError, setAuth} = useActionUsers()
  const {user} = useAppSelector(state => state.auth)
  const nav = useNavigate()

  const query = useQuery(['users'], getUsers, {
    enabled: false,
    onSuccess(data) {
      const login = data?.find(
        item =>
          item.password === user.password && item.username === user.username
      )

      if (login) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('username', login.username)
        setError('')
        setAuth(true)
        nav(RoutesName.EVENTS)
      } else {
        setError('Неверный пароль или имя пользователя')
      }
    },
  })
  return query
}
