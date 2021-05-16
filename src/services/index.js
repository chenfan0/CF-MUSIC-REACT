import axios from 'axios'

export default function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:9001',
    timeout: 10000
  })

  instance.interceptors.request.use((config) => {
    return config
  }, err => {

  })

  instance.interceptors.response.use((res) => {
    return res.data
  }, err => {

  })
  return instance(config)
}


