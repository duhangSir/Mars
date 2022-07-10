import Layout from '@/layout/index.vue'
export default {
  path: '/audit',
  name: 'Approve',
  component: Layout,
  meta: {
    title: '审批管理'
  },
  children: [
    {
      path: '/audit/approve',
      component: () => import('@/views/audit-approve/index.vue'),
      meta: {
        title: '待审批'
      }
    }
  ]
}
