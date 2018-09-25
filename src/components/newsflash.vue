<template>
  <!--<div class="newsflash">-->
    <!--<h1><img src="../common/img/icon17.png"/>快讯<img src="../common/img/icon18.png" class="rg" style="margin-top:16px;"/></h1>-->
    <!--<h2>2018-08-17 周五 今天</h2>-->
    <!--<div class="nfItem" v-for="item in 3" :key="item">-->
      <!--<h4><i class="iconfont">&#xe650;</i>10:05<span></span></h4>-->
      <!--<div>-->
        <!--<h3>韩国对于虚拟货币交易所进行调查</h3>-->
        <!--<p>韩国科技通讯部和韩国网络振兴院为防止韩国虚拟货币关联企业遭受黑客攻击，对21-->
          <!--个企业进行调查。点检结果，在管理虚拟货币钱包方面并不完善，需要多加改善。</p>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  <div class="nfItem" >
    <h4><i class="iconfont">&#xe650;</i>10:05<span></span></h4>
    <div>
      <h3>韩国对于虚拟货币交易所进行调查</h3>
      <p>韩国科技通讯部和韩国网络振兴院为防止韩国虚拟货币关联企业遭受黑客攻击，对21
        个企业进行调查。点检结果，在管理虚拟货币钱包方面并不完善，需要多加改善。</p>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .newsflash{
    width:100%;
    height:auto;
    background: #fff;
    padding-bottom: 5px;
    h1{
      color: #111;
      font-size: 18px;
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      height: 50px;
      line-height: 50px;
      background: #fafafa;
      img{
        vertical-align: text-bottom;
        margin-right: 5px;
      }
    }
    h2{
      padding: 20px 0 15px 0;
      margin: 0 20px 20px 20px;
      font-size: 14px;
      color: #111;
      border-bottom: 1px solid #eee;
    }
  }
  .nfItem{
    margin: -3px 28px 0 28px;
    h4{
      color: #bdc2d2;
      font-size: 12px;
      position: relative;
      margin-left: -8px;
      top: 2px;
      i{
        margin-right: 3px;
      }
      span{
        width: 75%;
        height: 1px;
        display: inline-block;
        border-top:1px dashed #ccc;
        margin-left: 5px;
      }
    }
    div{
      padding-left: 20px;
      border-left:1px solid #c8ccda;
      h3{
        font-size: 14px;
        color: #131313;
        line-height: 40px;
      }
      p{
        font-size: 14px;
        color: #717171;
        padding-bottom: 15px;
      }
    }
  }
</style>
