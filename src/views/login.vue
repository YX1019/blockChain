<template>
<div class="login">
  <div class="loginBox">
  <h1>密码登录<a @click="toRegister()">注册新账号<i class="iconfont">&#xe62b;</i></a><i class="iconfont closed">&#xe617;</i></h1>
    <div class="loginItem"><input type="text" placeholder="输入手机号码" class="loginInput"/> </div>
    <div class="loginItem"><input type="password" placeholder="密码" class="loginInput"/> </div>
    <a class="forgotPwd">忘记密码</a>
    <button class="loginBtn">登录</button>
    <p class="anotherWay">其他方式登录</p>
    <ul class="wayList">
      <li @click="toWeLogin()"><img src="../common/img/icon10.png"/><br/>微信</li>
      <li class="rg"><img src="../common/img/icon11.png"/><br/>短信</li>
    </ul>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {}
  },
  methods: {
    toRegister: function () {
      this.$router.push({path: '/register'})
    },
    toWeLogin: function () {
      this.$router.push({path: '/weLogin'})
    }
  }
}
</script>
<style>
    @import "../common/css/login.scss";
</style>
