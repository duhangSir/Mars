import Layout from '@/layout/index.vue'
export default {
  path: '/system',
  name: 'Dept',
  component: Layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/dept',
      component: () => import('@/views/system-dept/index.vue'),
      meta: {
        title: '部门管理'
      }
    }
  ]
}
