<template>
<div style="margin-top: 40px;">
  <div class="container">
    <el-row :gutter="30">
      <el-col :span="17">
        <div class="vedioCont">
          <h1>《链派百科》第22期--李笑来的圈钱之作-超级比特币</h1>
          <p class="vedioInfo">
            <span><img src="../common/img/icon7.png"/>2018-8-15</span>
            <span><img src="../common/img/icon19.png"/>技术商业</span>
            <span><img src="../common/img/icon8.png"/>123</span>
            <span><i class="iconfont">&#xe62a;</i>收藏</span>
          </p>
          <h4>作为币圈的风云人物，李笑来从新东方的一名普通讲师，到比特币首富，从身家300万，到70亿，只用了6年时间。作为币圈神话，他力捧的超级比特币项目可以
          称之为币圈收割韭菜的经典之作。fifi今天就带大家扒一扒李笑来的超级比特币...</h4>
          <comment></comment>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="nDetailRg">
          <div class="nTop">
            <div class="nTitle">
              <img src="../common/img/icon10.png"/>
              <h1>源动力数字货币点金</h1>
              <p>想进社区内部群的可关注同名微信公众号:ydlszhdbj</p>
            </div>
            <p class="nInfo">文章 8 粉丝 554 <span>+关注</span></p>
            <h4>近期文章</h4>
            <a v-for="item in 6" :key="item">比特币以太坊8月21日至23日走势早知道</a>
          </div>
          <div class="nMid">
            <h1>相关新闻</h1>
            <div class="nItem">
              <img src="../common/img/img2.jpg"/>
              <h2>瑞士证券交易所持开放态度，可能提供加密交易服务</h2>
              <p>2018-07-16</p>
            </div>
          </div>
          <div class="nBtm">
            <h1>下一篇</h1>
            <img src="../common/img/img2.jpg"/>
            <p>比特币耶稣“真信徒”难寻，BCH商业支付额两月暴跌65%</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
import comment from '../components/comment'
import newsflash from '../components/newsflash'
import videoItem from '../components/videoItem'
export default {
  name: '',
  components: {
    comment,
    newsflash,
    videoItem
  },
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang="scss" rel="stylesheet/scss">
.vedioCont{
  width:100%;
  height: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 25px 50px;
  margin-bottom: 100px;
  h1{
    font-size:30px;
  }
  h4{
    font-size: 14px;
    color: #151515;
    line-height:22px;
  }
}
.vedioInfo{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  span{
    flex: 1;
    font-size: 13px;
    color: #898989;
    img{
      margin-right: 10px;
    }
  }
}
.nTop{
  width: 100%;
  background: #fff;
  padding: 25px;
  h4{
    line-height:55px;
    color: #00acec;
    font-size: 13px;
  }
  a{
    display: block;
    font-size: 14px;
    color: #202020;
    line-height: 32px;
  }
}
  .nTitle{
    width:100%;
    padding-left: 85px;
    position: relative;
    box-sizing: border-box;
    img{
      width:70px;
      position: absolute;
      left:0;
      top:0;
    }
    h1{
      font-size: 18px;
      color: #131313;
    }
    p{
      font-size: 14px;
      color: #808080;
    }
  }
  .nInfo{
    color: #808080;
    font-size: 14px;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    height: 28px;
    line-height: 28px;
    span{
      color: #00acec;
      height: 26px;
      width:70px;
      display: inline-block;
      float: right;
      border:1px solid #00acec;
      border-radius: 3px;
      text-align: center;
      line-height: 26px;
    }
  }
.nMid{
  width: 100%;
  background: #fff;
  padding: 25px;
  margin: 15px 0;
  h1{
    font-size: 16px;
    color: #2a2a2a;
    margin-bottom: 30px;
  }
}
  .nItem{
    width:100%;
    box-sizing: border-box;
    padding-left: 105px;
    position: relative;
    img{
      position: absolute;
      left: 0;
      top:0;
      width:95px;
      height: 65px;
    }
    h2{
      font-size: 16px;
      color: #2a2a2a;
      height: 52px;
    }
    p{
      font-size: 12px;
      color: #828282;
    }
  }
  .nBtm{
    width: 100%;
    background: #fff;
    padding: 25px;
    margin-bottom: 50px;
    h1{
      color: #2a2a2a;
      font-size: 16px;
      margin-bottom: 10px;
    }
    img{
      width:100%;
      height: auto;
      margin: 10px 0;
    }
    p{
      font-size: 16px;
      color: #2a2a2a;
      line-height: 32px;
    }
  }
</style>
