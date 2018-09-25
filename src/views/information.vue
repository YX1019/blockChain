<template>
<div class="info">
  <div class="infoBanner">
    <h1>资讯</h1>
    <p>行业最新动态、最新新闻资讯分享</p>
  </div>
<div class="container eContainer clearfix">
<div class="elf">
 <div class="eItem" v-for="(item,index) in 4" :key="index">
   <div class="line">--<i class="iconfont">&#xe62b;</i></div>
   <div class="eItem_lf">
     <img src="../common/img/img1.jpg"/>
   </div>
   <div class="eItem_rg">
     <h1>性能赶超EOS？一文带你深挖并发执行模型</h1>
     <h3>本文将带你去伪存真，从多维度认知主流公链。</h3>
     <p>
       <span><img src="../common/img/icon6.png" class="eIcon"/><b>Byesc</b></span>
       <span><img src="../common/img/icon8.png"/>123</span>
       <span><img src="../common/img/icon19.png"/>技术商业</span>
       <span class="rg"><img src="../common/img/icon7.png"/>2018-8-15</span>
     </p>
   </div>
 </div>
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
  .infoBanner{
    width:100%;
    height: auto;
    padding: 90px 0;
    text-align: center;
    background: url(../../src/common/img/infoBg.jpg) no-repeat;
    background-size: 100% 100%;
    color: #fff;
    h1{
      font-size: 36px;
      margin-bottom: 40px;
    }
    p{
      font-size: 18px;
    }
  }
.eContainer{
  margin: 20px auto;
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
  .eItem{
    width:100%;
    box-sizing: border-box;
    padding: 55px 20px 38px 20px;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #ccc;
    position: relative;
  }
  .line{
    position: absolute;
    top:20px;
    font-size:18px;
    color: #333;
    i{
      font-size:18px;
      color: #333;
    }
  }
  .eItem_lf{
    width:260px;
    height: 148px;
    img{
      width:100%;
    }
  }
  .eItem_rg{
    flex:1;
    margin-left: 15px;
    h1{
      font-size:20px;
      color: #151515;
      margin-bottom: 20px;
    }
    h3{
      font-size: 13px;
      color: #7c7c7c;
      margin-bottom: 50px;
    }
    p{
      color: #9d9d9d;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      span{
        margin-right: 25px;
      }
      img{
        vertical-align: middle;
        margin-right: 5px;
        &.eIcon{
          width:26px;
          height: 26px;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
      b{
        font-weight: normal;
        color: #161616;
      }
    }
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
