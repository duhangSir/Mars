<template>
  <div>
    <template v-if="item && item.component">
      <el-menu-item :index="item.path">
        <el-icon> </el-icon>
        {{ item.menuName }}
      </el-menu-item>
    </template>
    <template
      v-if="
        item && item.children && item.children.length > 0 && !item.component
      "
    >
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon> </el-icon>
          <span>{{ item.menuName }}</span>
        </template>
        <SidebarMenuItem
          v-for="(childItem, index) in item.children"
          :menuList="childItem"
          :key="index"
        ></SidebarMenuItem>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  menuList: {
    type: Object,
    default: () => {}
  }
})
// eslint-disable-next-line vue/no-setup-props-destructure
const item = props.menuList
</script>

<style scoped lang="scss"></style>
