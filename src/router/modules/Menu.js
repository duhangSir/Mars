import Layout from '@/layout/index.vue'
export default {
  path: '/system',
  name: 'Menu',
  component: Layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/menu',
      component: () => import('@/views/system-menu/index.vue'),
      meta: {
        title: '菜单管理'
      }
    }
  ]
}
