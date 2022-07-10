const getters = {
  token: (state) => state.user.token,
  menuList: (state) => state.user.menuList,
  routes: (state) => state.premission.routes
}
export default getters
