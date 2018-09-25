<template>
<div style="margin-top: 40px;">
  <div class="videoTop">
    <div class="container clearfix">
      <div class="video_lf lf">
        <video src="" controls="controls"></video>
      </div>
      <div class="video_rg lf">
        <h2>上一篇</h2>
        <videoItem></videoItem>
        <h2>下一篇</h2>
        <videoItem></videoItem>
        <h2>最新视频</h2>
        <videoItem v-for="item in 2" :key="item"></videoItem>
      </div>
    </div>
  </div>
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
        <div class="newsflash">
          <h1><img src="../common/img/icon17.png"/>快讯<img src="../common/img/icon18.png" class="rg" style="margin-top:16px;"/></h1>
          <h2>2018-08-17 周五 今天</h2>
          <newsflash v-for="item in 3" :key="item"></newsflash>
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
    font-size:22px;
  }
  h4{
    font-size: 14px;
    color: #898989;
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
  .video_lf{
    width:72%;
    height: 430px;
    video{
      width:100%;
      height: 100%;
    }
  }
  .video_rg{
    width:28%;
    height:430px;
    background: #232323;
    color: #fff;
    padding:15px;
    box-sizing: border-box;
    h2{
      height:20px;
      line-height: 20px;
      font-size: 12px;
    }
  }
  .videoTop{
    width:100%;
    height: 500px;
    background: #fff;
    margin-bottom: 20px;
  }
</style>
