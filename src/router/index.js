import { createRouter, createWebHashHistory } from 'vue-router'
import Approve from './modules/Approve'
import Dept from './modules/Dept'
import Leave from './modules/Leave'
import Menu from './modules/Menu'
import Role from './modules/Role'
import Salary from './modules/Salary'
import Staff from './modules/Staff'
import User from './modules/User'
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/index.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index')
      }
    ]
  }
]
export const privateRoutes = [
  Approve,
  Dept,
  Leave,
  Menu,
  Role,
  Salary,
  Staff,
  User
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router

// {
//   path: '/system',
//   name: 'system',
//   redirect: '/system/user',
//   meta: {
//     title: '系统管理',
//     icon: 'Setting'
//   },
//   children: [
//     {
//       path: '/system/user',
//       name: 'system-user',
//       component: () => import('../views/system-user/index.vue'),
//       meta: {
//         title: '用户管理'
//       }
//     },
//     {
//       path: '/system/menu',
//       name: 'system-menu',
//       meta: {
//         title: '菜单管理'
//       },
//       component: () => import('../views/system-menu/index.vue')
//     },
//     {
//       path: '/system/role',
//       name: 'system-role',
//       meta: {
//         title: '角色管理'
//       },
//       component: () => import('../views/system-role/index.vue')
//     },
//     {
//       path: '/system/dept',
//       name: 'system-dept',
//       meta: {
//         title: '部门管理'
//       },
//       component: () => import('../views/system-dept/index.vue')
//     },
//     {
//       path: '/system/staff',
//       name: 'system-staff',
//       meta: {
//         title: '员工管理'
//       },
//       component: () => import('../views/system-staff/index.vue')
//     },
//     {
//       path: '/system/salary',
//       name: 'system-salary',
//       meta: {
//         title: '薪酬管理'
//       },
//       component: () => import('../views/system-salary/index.vue')
//     }
//   ]
// },
// {
//   path: '/audit',
//   name: 'audit',
//   meta: {
//     title: '审批管理'
//   },
//   children: [
//     {
//       path: '/audit/leave',
//       name: 'audit-leave',
//       component: () => import('../views/audit-leave/index.vue'),
//       meta: {
//         title: '休假申请'
//       }
//     },
//     {
//       path: '/audit/approve',
//       name: 'audit-approve',
//       component: () => import('../views/audit-approve/index.vue'),
//       meta: {
//         title: '待审批'
//       }
//     }
//   ]
// }
