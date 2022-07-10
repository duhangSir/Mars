import request from '../untils/request'
const login = (data) => {
  return request({ url: '/users/login', method: 'POST', data })
}
const getproList = () => {
  return request({ url: '/users/getPermissionList', method: 'GET' })
}
export default { login, getproList }
