import {$host} from '.'
import {IUser} from '../../types/user'

export const getUsers = async () => {
  const {data} = await $host.get<IUser[]>('./users.json')
  return data
}
