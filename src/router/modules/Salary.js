import Layout from '@/layout/index.vue'
export default {
  path: '/system',
  name: 'Salary',
  component: Layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/salary',
      component: () => import('@/views/system-salary/index.vue'),
      meta: {
        title: '薪酬管理'
      }
    }
  ]
}
