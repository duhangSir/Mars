import User from '../../api/user'
import { setItem, getItem, removeItem } from '../../untils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    menuList: []
  },
  mutations: {
    handleSetToken(state, response) {
      state.token = response
      setItem('token', response)
    },
    handleSetProList(state, response) {
      state.menuList = response
      // setItem('menuList', state.menuList)
    }
  },
  actions: {
    async setToken({ commit }, ruleForm) {
      const response = await User.login(ruleForm)
      commit('handleSetToken', response)
      return response
    },
    async setProList({ commit }) {
      const response = await User.getproList()
      console.log(response)
      commit('handleSetProList', response)
      return response
    },
    async logout({ commit }) {
      removeItem('token')
      commit('handleSetToken', '')
    }
  }
}
