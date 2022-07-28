import moment, {Moment} from 'moment'

export const rules = {
  required: (message: string) => {
    return {
      required: true,
      message,
    }
  },
  validatDate: (message: string) => () => ({
    validator(_: any, value: Moment) {
      console.log(value)
      if (value.isSameOrBefore(moment())) {
        return Promise.resolve()
      }
      return Promise.reject(new Error(message))
    },
  }),
}
