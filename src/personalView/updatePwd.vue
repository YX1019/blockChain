<template>
<div class="perContaniner">
<h1><img src="../common/img/icon14.png"/>修改密码</h1>
    <div class="loginBox">
      <div class="loginItem"><input type="text" placeholder="输入手机号码" class="loginInput"/> </div>
      <div class="loginItem"><input type="text" placeholder="图形验证码" class="loginInput codeInput"/>
        <div class="imgCode"><img src="../common/img/imgCode.jpg"/><p>看不清，刷新一下</p></div>
      </div>
      <div class="loginItem"><input type="text" placeholder="验证码"  class="loginInput codeInput"/><input type="button" v-model="codeTxt" class="codeBtn"> </div>
      <div class="loginItem"><input type="password" placeholder="密码" class="loginInput"/> </div>
      <button class="loginBtn loginBtn2">确定</button>
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
  methods: {}
}
</script>
<style>
  @import "../common/css/login.scss";
</style>
<style lang="scss" rel="stylesheet/scss">
.perContaniner{
  width:100%;
  background: #fff;
  padding: 30px 45px;
  box-sizing: border-box;
  h1{
    font-size:24px;
    color: #00acec;
    display: flex;
    align-items: center;
    img{
      margin-right: 10px;
    }
  }
}
  .updatePwd{
    width:380px;
    margin: 0 auto;
  }
</style>
