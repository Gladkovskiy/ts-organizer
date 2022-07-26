import {$host} from '.'
import {IUser} from '../../types/user'

export const getGuests = async () => {
  try {
    const {data} = await $host.get<IUser[]>('./users.json')
    return data
  } catch (error) {
    console.log(error)
  }
}
