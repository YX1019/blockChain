<template>
<div class="perContaniner">
<h1><img src="../common/img/icon13.png"/>实名认证</h1>
  <div class="perCont perCont2">
    <div class="perItem"><label>身份证姓名:</label><input type="text" placeholder="请输入姓名" style="width:430px;"/></div>
    <div class="perItem"><label>身份证号码:</label><input type="text" placeholder="请输入身份证号码" style="width:430px;"/></div>
    <h3 class="photoTitle">上传身份证照片</h3>
    <div class="photos">
      <div class="photoItem"><img src="../common/img/inputImg1.png"/><input type="file"></div>
      <div class="photoItem"><img src="../common/img/inputImg2.png"/><input type="file"></div>
    </div>
    <p style="color: #b1b1b1;">只是jpeg、png等格式，照片大小不超过5M。</p>
    <div class="tip"><el-radio v-model="radio"></el-radio>我已阅读并接受<a>《服务条款》</a></div>
    <div class="perItem" style="text-align: center"><button class="blue bluebtn2">确定</button></div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      radio: ''
    }
  },
  methods: {}
}
</script>
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
  .perCont{
    width:650px;
    height: auto;
    text-align: center;
    margin: 0 auto;
    p{
      font-size: 14px;
      color: #686868;
      line-height: 28px;
    }
  }
.perCont2{
  width:540px;
}
  .perItem{
    text-align: left;
    margin-top: 25px;
    width:100%;
    label{
      width:90px;
      text-align: right;
      font-size: 16px;
      color: #646363;
      vertical-align: top;
      margin-right: 10px;
      display: inline-block;
      line-height: 38px;
    }
    input{
      height: 38px;
      width:430px;
      border:1px solid #ccc;
      margin-right: 10px;
      box-sizing: border-box;
      padding: 0 10px;
    }
    textarea{
      width: 550px;
      height: 105px;
      border:1px solid #ccc;
      vertical-align: top;
      box-sizing: border-box;
      padding: 10px;
    }
    button{
      width:108px;
      height: 38px;
      box-sizing: border-box;
      text-align: center;
      background: #fff;
      color: #5d5d5d;
      border:1px solid #5d5d5d;
      border-radius: 5px;
      &.blue{
        color: #00acec;
        border:1px solid #00acec;
      }
      &.bluebtn2{
        width:400px;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
      }
    }
  }
  .inputImg{
    width:100%;
    text-align: center;
    position: relative;
    span{
      display: inline-block;
      width:110px;
      height: 38px;
      line-height: 38px;
      color: #00acec;
      border:1px solid #00acec;
      border-radius: 5px;
    }
    input{
      position: absolute;
      top:0;
      left: 50%;
      margin-left: -55px;
      width:110px;
      height: 40px;
      z-index: 2;
      opacity: 0;
    }
  }
  .photos{
    display: flex;
    margin: 15px 0;
  }
  .photoItem{
    flex:1;
    position: relative;
    img{
      width:250px;
      height: 165px;
    }
    input{
      position: absolute;
      width:250px;
      height: 165px;
      left:50%;
      top:0;
      margin-left: -125px;
      opacity: 0;
    }
  }
  .photoTitle{
    font-size: 16px;
    color: #646363;
    margin-top: 25px;
  }
  .tip{
    font-size: 14px;
    color: #b1b1b1;
    margin-top: 40px;
    a{
      color: #00acec;
    }
  }
</style>
