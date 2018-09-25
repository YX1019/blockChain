<template>
<div class="perContaniner">
<h1><img src="../common/img/icon15.png"/>我的收藏</h1>
  <div class="pList">
  <div class="pItem" v-for="(item,index) in 4" :key="index">
    <div class="pItem_lf">
      <img src="../common/img/img1.jpg"/>
    </div>
    <div class="pItem_rg">
      <h1>性能赶超EOS？一文带你深挖并发执行模型</h1>
      <h3>本文将带你去伪存真，从多维度认知主流公链。</h3>
      <p>
        <span><img src="../common/img/icon6.png" class="eIcon"/><b>区块链大本营</b></span>
        <span class="rg">2分钟前</span>
      </p>
    </div>
  </div>
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
.pList{
  width:100%;
  box-sizing: border-box;
  padding-left: 50px;
  padding-right: 30px;
  box-sizing: border-box;
}
.pItem{
  padding: 30px 0 20px 0;
  display: flex;
  box-sizing: border-box;
}
.pItem_lf{
  width:220px;
  img{
    width: 100%;
  }
  margin-right: 15px;
}
  .pItem_rg{
    flex:1;
    h1{
      color: #1a1a1a;
      font-size: 20px;
      margin-bottom: 10px;
    }
    h3{
      font-size: 14px;
      color: #757575;
      line-height: 20px;
      height: 40px;
      overflow: hidden;
    }
    P{
      font-size: 14px;
      color: #757575;
      margin-top: 20px;
      img{
        vertical-align: middle;
        margin-right: 10px;
      }
      b{
        font-weight: normal;
      }
    }
  }
</style>
