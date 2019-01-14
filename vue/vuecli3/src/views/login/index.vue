<template>
  <div class="main">
    <div class="container">
      <el-form :model="loginForm" label-width="4em">
        <el-form-item label="账号">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <p class="submit-wapper">
          <el-button>登录</el-button>
        </p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: '',
        password: ''
      }
    };
  },
}
</script>
<style lang='scss' scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 90vh;
  .submit-wapper {
    text-align: center;
  }
}
</style>