import axios from 'axios'
import { message } from 'antd'

// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.defaults.baseURL = `http://192.168.0.144:20001/business/v1/`
// axios.defaults.baseURL = `https://test.jianchedashi.com:20001/business/v1/`


axios.interceptors.request.use(config => {

  config.headers['hci_agent'] = window.navigator.userAgent.replace(/\([0-9]+?\)/g, '')

  // 已登录
  if (sessionStorage.getItem('accessTokenGas')) config.headers['hci_b_signature'] = sessionStorage.getItem('accessTokenGas')

  return config
}, error => {
  message.error(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {

  if (!response.data.status && response.data.message) {

    message.error(response.data.message)
  }

  if (response.status === 203) {

    sessionStorage.removeItem('accessTokenGas')

    message.error('请登录')

    // createHistory().push('/login')
  }

  return response
}, error => {
  message.error(error)
  return Promise.reject(error)
})

export default axios