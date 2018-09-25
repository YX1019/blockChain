<template>
<div class="container eContainer clearfix">
<div class="elf">
 <!--<div class="eItem" v-for="(item,index) in 4" :key="index" @click="toNewsDetail()">-->
   <!--<div class="eItem_lf">-->
     <!--<img src="../common/img/img1.jpg"/>-->
   <!--</div>-->
   <!--<div class="eItem_rg">-->
     <!--<h1>性能赶超EOS？一文带你深挖并发执行模型</h1>-->
     <!--<h3>本文将带你去伪存真，从多维度认知主流公链。</h3>-->
     <!--<p>-->
       <!--<span><img src="../common/img/icon6.png" class="eIcon"/><b>区块链大本营</b></span>-->
       <!--<span><img src="../common/img/icon7.png"/>21小时前  区块链 百科</span>-->
       <!--<span><img src="../common/img/icon8.png"/>1234567</span>-->
     <!--</p>-->
   <!--</div>-->
 <!--</div>-->
  <listItem v-for="(item,index) in 4" :key="index" @click="toNewsDetail()" :width="260"></listItem>
</div>
  <div class="erg">
   <h2 class="eTitle">最新发布</h2>
    <div class="ergItem" v-for="(item,index) in 7" :key="index">
      <img src="../common/img/img2.jpg"/>
      <h3>长江商学院教授曹辉宁生日演讲：区块链代表了道路、自...</h3>
      <p>2018-08-18</p>
    </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
import listItem from '../components/listItem'
export default {
  name: '',
  components: {
    listItem
  },
  data () {
    return {}
  },
  methods: {
    toNewsDetail: function () {
      this.$router.push({path: '/newsDetail'})
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.eContainer{
  margin: 40px auto;
}
  .elf{
    width:65%;
    height:auto;
    float: left;
  }
  .erg{
    width:30%;
    float: right;
    box-sizing: border-box;
    padding: 0 20px;
    background: #fff;
  }
  .eTitle{
    width: 100%;
    height: 22px;
    line-height: 22px;
    border-left: 3px solid #1e7bc1;
    font-size:16px;
    text-align: center;
    color: #333;
    margin-top: 15px;
  }
  .ergItem{
    width:100%;
    box-sizing: border-box;
    padding: 20px 0 20px 100px;
    position: relative;
    border-bottom: 1px solid #ccc;
    height: 105px;
    img{
      position: absolute;
      left:0;
      top:20px;
      width:90px;
      height: 65px;
    }
    h3{
      font-size: 15px;
      color: #191919;
    }
    p{
      font-size:13px;
      color: #646464;
      margin-top: 10px;
    }
  }
.ergItem:last-child{
  border-bottom: 0;
}
</style>
