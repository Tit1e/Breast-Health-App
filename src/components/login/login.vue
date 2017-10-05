<template>
  <div class="login-block">
    <div class="login">
      <h1>登录</h1>
      <div id="phone">
        <i class="iconfont icon-user"></i>
        <input type="text" placeholder="请输入手机号">
      </div>
      <div id="password">
        <i class="iconfont icon-lock"></i>
        <input type="password" placeholder="请输入密码">
      </div>
      <div id="login-button">
        <button type="button" @click="_login()">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLogin: this.CheckLogin
    }
  },
  methods: {
    _login: function () {
      this.$router.push({path: '/detection'})
    }
  }
}
</script>

<style lang="scss" scoped>
.login-block {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FDF3FB;
  z-index: 999;
  .login {
    box-sizing: border-box;
    padding-top: 30%;
    h1 {
      font-size: 34px;
    }
    #phone,
    #password {
      position: relative;
      display: block;
      width: 70%;
      margin: 0 auto;
      margin-top: 26px;
      i {
        font-size: 30px;
        position: absolute;
        left: 6px;
        top: 5px;
      }
      input {
        background-color: transparent;
        border: 1px solid #F9AFC0;
        height: 44px;
        box-sizing: border-box;
        border-radius: 22px;
        width: 100%;
        padding-left: 46px;
        font-size: 16px;
        color: #F9AFC0;
      }
       ::-webkit-input-placeholder {
        color: #F9AFC0;
      }
       :-moz-placeholder {
        color: #F9AFC0;
      }
       ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #F9AFC0;
      }
    }
    #login-button {
      width: 70%;
      text-align: center;
      margin: 0 auto;
      margin-top: 26px;
      button {
        font-size: 16px;
        color: #fff;
        display: inline-block;
        width: 50%;
        background-color: #F9AFC0;
        border: none;
        box-sizing: border-box;
        height: 44px;
        border-radius: 22px;
      }
    }
  }
}
</style>

