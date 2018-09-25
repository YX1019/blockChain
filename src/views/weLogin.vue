<template>
  <div class="login">
    <div class="loginBox" style="text-align: center;">
      <h1>微信登录<i class="iconfont closed">&#xe617;</i></h1>
      <img src="../common/img/appCode.jpg" class="weCode">
      <p class="loginTxt2">请使用微信扫描二维码登录</p>
      <p class="anotherWay">其他方式登录</p>
      <ul class="wayList">
        <li @click="toWeLogin()"><img src="../common/img/icon12.png"/><br/>账号</li>
        <li class="rg"><img src="../common/img/icon11.png"/><br/>短信</li>
      </ul>
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
