<template>
  <div class="login">
    <div class="login-form">
      <div class="login-text">火星</div>
      <div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
        >
          <el-form-item prop="userName">
            <el-input
              placeholder="请输入用户名"
              prefix-icon="user"
              v-model.trim="ruleForm.userName"
            />
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input
              prefix-icon="View"
              placeholder="请输入密码"
              v-model.trim="ruleForm.userPwd"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLoginButton"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const ruleForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})
const ruleFormRef = ref()
const handleLoginButton = async () => {
  if (!ruleFormRef.value) return
  await ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const response = await store.dispatch('user/setToken', ruleForm)
      // await store.dispatch('user/setProList')
      console.log(response)
      router.push('/')
    } else {
      console.log('失败')
    }
  })
}
const rules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      min: 6,
      max: 20,
      message: ' 密码不能小于6位或者大于20位',
      trigger: 'blur'
    }
  ]
})
</script>
<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background-color: #f9fcff;
  position: relative;
  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 14px rgba(109, 106, 106, 0.8);
  }
  .login-text {
    font-size: 50px;
    text-align: center;
    margin-bottom: 30px;
    height: 70px;
    margin-top: 30px;
    line-height: 70px;
  }
  .el-form {
    width: 400px;
    margin: auto;
  }
  .el-input {
    height: 50px;
  }
  .el-button {
    width: 400px;
  }
}
</style>
