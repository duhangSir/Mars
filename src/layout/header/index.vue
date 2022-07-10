<template>
  <div>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">{{ $store.getters.token.userName }}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a"
            >邮箱:{{ $store.getters.token.userEmail }}</el-dropdown-item
          >
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const handleCommand = async (command) => {
  if (command === 'logout') {
    try {
      await store.dispatch('user/logout')
      router.push('/login')
      // console.log('123')
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped lang="scss"></style>
