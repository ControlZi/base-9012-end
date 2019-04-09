<template>
  <div class="login">
    <div class="login-box">
      <div class="login-form" v-show="!ding">
        <p class="login-header">账号登录
          <span class="other-type clearfix" @click="ding = !ding">钉钉扫码登录></span>
        </p>
        <div class="form-item">
          <el-input placeholder="账号" v-model="form.username">
            <p slot="prefix" style="margin: 6px 0;">
              <svg-icon name="user"></svg-icon>
            </p>
          </el-input>
        </div>
        <div class="form-item">
          <el-input placeholder="密码" v-model="form.password" show-password>
            <p slot="prefix" style="margin: 6px 0;">
              <svg-icon name="password"></svg-icon>
            </p>
          </el-input>
        </div>
        <div class="remember clearfix">
          <el-checkbox>记住我</el-checkbox>
        </div>
        <div class="submit-btn">
          <el-button type="primary" @click="login">登录</el-button>
        </div>
      </div>
      <div class="login-form" v-show="ding">
        <p class="login-header">钉钉扫码登录
          <span class="other-type clearfix" @click="ding = !ding">账号登录></span>
        </p>
        <div class="qr-code">
          <div class="qr-box">
            <img src="" alt="二维码">
          </div>
        </div>
        <p class="footer">钉钉App - 首页右上角加号 - 扫一扫</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ding: false,
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      this.$router.push('/basic');
    }
  }
}
</script>
<style lang='scss' scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url("../../assets/images/login_bg@2x.png") no-repeat;
  background-size: 100% 100%;
  .login-box {
    width: 360px;
    height: 380px;
    background: rgba(255, 255, 255, 1);
    border-radius: 3px;
    .login-form {
      padding: 10px 30px;
      .login-header {
        text-align: left;
        font-size: 20px;
      }
      .form-item {
        margin: 15px 0;
      }
      .other-type {
        float: right;
        font-size: 16px;
        cursor: pointer;
        color: rgba(12, 126, 240, 1);
      }
      .remember {
        float: left;
        margin-bottom: 18px;
      }
      .submit-btn {
        .el-button {
          width: 100%;
        }
      }
      .qr-code {
        margin: 20px auto;
        height: 200px;
        width: 200px;
        border: 1px solid rgba(204, 204, 204, 1);
        .qr-box {
          width: 180px;
          height: 180px;
          margin: 10px auto;
        }
      }
      .footer {
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
</style>