import {useQuery} from '@tanstack/react-query'
import {useActionEvents} from '../../../hooks/useActions'
import {getGuests} from '../../api/events'

export const useGetGuests = () => {
  const {setGuests} = useActionEvents()

  const query = useQuery(['guests'], getGuests, {
    onSuccess(data) {
      if (data) setGuests(data)
    },
  })
  return query
}
