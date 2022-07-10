import Layout from '@/layout/index.vue'
export default {
  path: '/system',
  name: 'Role',
  component: Layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/role',
      component: () => import('@/views/system-role/index.vue'),
      meta: {
        title: '角色管理'
      }
    }
  ]
}
