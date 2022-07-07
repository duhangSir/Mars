import request from '../untils/request'
const login = (data) => {
  request({ url: '/users/login', method: 'GET', data })
}
export default { login }
