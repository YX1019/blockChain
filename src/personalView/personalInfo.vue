<template>
<div class="perContaniner">
<h1><img src="../common/img/icon13.png"/>个人资料</h1>
  <div class="perCont">
    <img src="../common/img/headImg.png"/>
    <div class="inputImg"><span>上传头像</span><input type="file"></div>
    <p>1.上传图片大小不超过2MB</p>
    <p>2.如果要展示完整头像，可上传宽高尺寸为1:1的图片</p>
    <div class="perItem"><label>昵称:</label><input type="text"/><button class="blue">确认修改</button></div>
    <div class="perItem"><label>绑定手机:</label><input type="text"/><button>已绑定</button></div>
    <div class="perItem"><label>个人简介:</label><textarea placeholder="请编写您的个人简介"></textarea></div>
    <div class="perItem clearfix"><button class="blue rg">确定</button></div>
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
</style>
