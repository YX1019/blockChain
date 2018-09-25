<template>
<div class="foot">
<div class="footCont">
  <div class="foot_lf">
    <h3>友情链接</h3>
    <ul>
      <li><a href="#" target="_blank">蓝港互动</a></li>
      <li><a href="#" target="_blank">小青音箱</a></li>
      <li><a href="#" target="_blank">牛眼</a></li>
      <li><a href="#" target="_blank">CSDN</a></li>
      <li><a href="#" target="_blank">Block.cc</a></li>
      <li><a href="#" target="_blank">FN财经</a></li>
      <li><a href="#" target="_blank">非小号</a></li>
      <li><a href="#" target="_blank">币问</a></li>
      <li><a href="#" target="_blank">金融界区块链</a></li>
      <li><a href="#" target="_blank">币牛牛</a></li>
      <li><a href="#" target="_blank">比特快讯</a></li>
      <li><a href="#" target="_blank">要发车</a></li>
      <li><a href="#" target="_blank">白鲸财经</a></li>
      <li><a href="#" target="_blank">CoinUp</a></li>
      <li><a href="#" target="_blank">猎云财经</a></li>
      <li><a href="#" target="_blank">芬果财经</a></li>
      <li><a href="#" target="_blank">OKEx</a></li>
      <li><a href="#" target="_blank">真牛财经</a></li>
      <li><a href="#" target="_blank">链天下</a></li>
      <li><a href="#" target="_blank">起风财经</a></li>
      <li><a href="#" target="_blank">高度财经</a></li>
      <li><a href="#" target="_blank">蜜蜂财经</a></li>
      <li><a href="#" target="_blank">链塔智库</a></li>
      <li><a href="#" target="_blank">节点财经</a></li>
    </ul>
    <div class="footTxt">
      <img src="#" alt="LOGO" class="logoImg"/>
      <div>
        <p>Copyright ©2018  Ltd. All Right Reserved.</p>
        <p>浙ICP备18001237号-2</p>
      </div>
    </div>
  </div>
  <div class="foot_rg">
    <h3>广告合作</h3>
    <p>QQ：287545123211(同微信)        手机：18645123420</p>
    <p>商务邮箱：bd@xinlang163.com</p>
    <p>投稿邮箱：tougao@yahoo,com.cn</p>
    <div class="footImgList">
      <img src="../common/img/icon3.png"/>
      <img src="../common/img/icon4.png"/>
      <img src="../common/img/icon5.png"/>
    </div>
    <ul><li>关于我们</li>|<li>版权声明</li></ul>
  </div>
</div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.foot{
  width:100%;
  height: auto;
  background: #2e2e30;
  padding: 40px 0;
}
  .footCont{
    width:1200px;
    height:auto;
    margin: 0 auto;
  }
.footCont:after{
  clear: both;
  display: table;
  content:'';
}
  .foot_lf{
    float: left;
    width:50%;
    h3{
      font-size:16px;
      color: #e7e7e7;
      margin-bottom: 40px;
    }
    li{
      padding: 0 20px;
      margin-bottom: 20px;
      border-right: 1px solid #aaa;
      float: left;
      a{
        color: #aaa;
        font-size:16px;
      }
    }
  }
  .foot_rg{
    width:40%;
    float: right;
    h3{
      font-size:16px;
      color: #e7e7e7;
      text-align: right;
      margin-bottom: 40px;
    }
    p{
      text-align: right;
      font-size:14px;
      color: #aaa;
      margin-bottom: 20px;
    }
    ul{
      float: right;
      color: #aaa;
      li{
        display: inline-block;
        text-align: right;
        font-size: 14px;
        color: #aaa;
        padding: 0 20px;
      }
    }
  }
  .footTxt{
    display: flex;
    clear: both;
    padding-top: 50px;
    div{
      flex:1;
      p{
        font-size:12px;
        color: #5b5b61;
      }
    }
  }
  .logoImg{
    width:105px;
  }
  .footImgList{
    text-align: right;
    margin-top: 140px;
    margin-bottom: 20px;
    img{
      margin-left: 25px;
    }
  }
</style>
