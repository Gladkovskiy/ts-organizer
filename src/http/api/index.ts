import axios from 'axios'

//запросы без  авторизации
export const $host = axios.create({
  baseURL: '',
})

//запросы с авторизацией
export const $authHost = axios.create({
  baseURL: '/api',
})

const authIntercepter = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authIntercepter)
