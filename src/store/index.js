import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import premission from './modules/premission'
export default createStore({
  getters,
  modules: {
    user,
    premission
  }
})
