import router from './router'
import store from './store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      const menulist = store.getters.menuList.menuList
      if (!menulist) {
        const response = await store.dispatch('user/setProList')
        const menu = []
        response.menuList.forEach((item) => {
          menu.push(...item.children)
        })
        const res = await store.dispatch('premission/filterRoutes', menu)
        res.forEach((item) => {
          router.addRoute(item)
        })
        return next(to.path)
      } else {
        next()
      }
      // next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
