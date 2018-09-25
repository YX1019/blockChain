<template>
  <div class="login">
    <div class="loginBox">
      <h1>注册<i class="iconfont closed">&#xe617;</i></h1>
      <div class="loginItem"><input type="text" placeholder="输入手机号码" class="loginInput"/> </div>
      <div class="loginItem"><input type="text" placeholder="图形验证码" class="loginInput codeInput"/>
        <div class="imgCode"><img src="../common/img/imgCode.jpg"/><p>看不清，刷新一下</p></div>
      </div>
      <div class="loginItem"><input type="text" placeholder="验证码"  class="loginInput codeInput"/><input type="button" v-model="codeTxt" class="codeBtn"> </div>
      <div class="loginItem"><input type="password" placeholder="密码" class="loginInput"/> </div>
      <button class="loginBtn loginBtn2">注册</button>
      <a class="loginTxt" @click="toLogin()">已有账号 直接登录<i class="iconfont">&#xe62b;</i></a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      codeTxt: '发送验证码'
    }
  },
  methods: {
    toLogin: function () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>
<style>
  @import "../common/css/login.scss";
</style>
