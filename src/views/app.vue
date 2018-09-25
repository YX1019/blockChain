<template>
<div class="download">
<div class="container clearfix">
<div class="lf">
  <img src="../common/img/appImg1.png"/>
</div>
  <div class="rg downloadRg">
     <h2>区域链先锋门户</h2>
    <div class="downloadUrl">
      <div class="downCode"><img src="../common/img/appCode.jpg"/> </div>
      <div><p><img src="../common/img/appIos.png"/> </p><p><img src="../common/img/appAndriod.png"/></p></div>
    </div>
  </div>
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
.download{
  width:100%;
  height:auto;
  padding: 20px 0;
  background: url(../../src/common/img/appBg.jpg) no-repeat;
  background-size: 100% 100%;
}
.downloadRg{
  margin-top: 30%;
  h2{
    color: #fff;
    font-size: 36px;
    font-weight: normal;
    margin-bottom: 95px;
  }
}
  .downloadUrl{
    display: flex;
    p{margin-bottom: 25px;}
  }
  .downCode{
    margin-right: 35px;
    img{
      border:15px solid #96bcee;
      border-radius: 5px;
    }
  }
</style>
