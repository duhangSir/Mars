import Layout from '@/layout/index.vue'
export default {
  path: '/system',
  name: 'User',
  component: Layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/user',
      component: () => import('@/views/system-user/index.vue'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}
