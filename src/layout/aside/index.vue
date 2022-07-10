<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#fff"
      router
    >
      <div class="menuList">
        <div class="menuImg">
          <img
            src="http://manager.9yuecloud.com/img/logo.384b81fb.png"
            alt=""
          />
        </div>
        <span>Manager</span>
      </div>
      <sidebarmenuitem
        v-for="item in menuList"
        :key="item"
        :menuList="item"
      ></sidebarmenuitem>
    </el-menu>
  </div>
</template>
<script setup>
import sidebarmenuitem from './SidebarMenuItem.vue'
import { filterRouters } from '../../untils/router'
import store from '@/store'
const menu = store.getters.menuList.menuList
const menuList = filterRouters(menu)
</script>
<style scoped lang="scss">
div {
  color: #fff;
}
.menuList {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  .menuImg {
    width: 34px;
    height: 34px;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">菜单管理</el-menu-item>
        <el-menu-item index="1-3">角色管理</el-menu-item>
        <el-menu-item index="1-3">部门管理</el-menu-item>
        <el-menu-item index="1-3">员工管理</el-menu-item>
        <el-menu-item index="1-3">薪酬管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><setting /></el-icon>
          <span>审批管理</span>
        </template>
        <el-menu-item index="2-1">休假申请</el-menu-item>
        <el-menu-item index="2-2">待审批</el-menu-item>
      </el-sub-menu> -->
