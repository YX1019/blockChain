<template>
<div class="top">
  <div class="topCont">
<div class="top_lf">logo</div>
<div class="top_mid">
  <input type="text" placeholder="输入关键字搜索" class="keywords">
  <input type="button" value="搜索" class="searchBtn"/> </div>
<div class="top_rg">
  <ul>
    <li><img src="../common/img/icon1.png"/><br/>投稿</li>
    <li @click="toLogin()" v-show="!isLogin"><img src="../common/img/icon2.png"/><br/>登录</li>
    <li @click="toPersonal()" v-show="isLogin"><img src="../common/img/icon2.png"/></li>

  </ul>
</div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    toLogin: function () {
      this.$router.push({path: '/login'})
    },
    toPersonal: function () {
      this.$router.push({path: '/personal'})
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.top{
  width:100%;
  height:90px;
  background: #f3f5f8;
}
.topCont{
  display: flex;
  margin: 0 auto;
  width: 1200px;
  @media screen and (max-width: 1150px){
    width:62.5%;
  }
}
  .top_lf,.top_mid,.top_rg{
    flex:1;
  }
.top_lf{
  line-height: 90px;
}
.top_mid{
  display: flex;
  justify-content: center;
  align-items: center;
}
  .keywords{
    width:315px;
    height: 55px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    padding: 5px 10px;
    background: #fff;
    font-size: 18px;
    color: #c2cddb;
  }
  .searchBtn{
    width:100px;
    height: 55px;
    background: #00acec;
    color: #fff;
    font-size: 18px;
  }
.top_rg{
  ul{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 90px;
    li{
      width:80px;
      text-align: center;
      color: #9f9f9f;
      font-size: 14px;
    }
  }
}
</style>
