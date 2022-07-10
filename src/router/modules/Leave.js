import Layout from '@/layout/index.vue'
export default {
  path: '/audit',
  name: 'Leave',
  component: Layout,
  meta: {
    title: '审批管理'
  },
  children: [
    {
      path: '/audit/leave',
      component: () => import('@/views/audit-leave/index.vue'),
      meta: {
        title: '休假管理'
      }
    }
  ]
}
