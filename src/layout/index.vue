<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <HeaDer></HeaDer>
        </el-header>
        <el-main>
          <MaIn></MaIn>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Aside from './aside/index.vue'
import HeaDer from './header/index.vue'
import MaIn from './main/index.vue'
</script>
<style scoped lang="scss">
.common-layout {
  background-color: #eef0f3;
}
.el-aside {
  height: 100vh;
  background-color: #001529;
  color: #fff;
}
.el-header {
  width: 100%;
  background-color: #fff;
}
</style>
