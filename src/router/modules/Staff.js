import Layout from '@/layout/index.vue'
export default {
  path: '/system',
  name: 'Staff',
  component: Layout,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/system/staff',
      component: () => import('@/views/system-staff/index.vue'),
      meta: {
        title: '员工管理'
      }
    }
  ]
}
