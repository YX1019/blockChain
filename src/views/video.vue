<template>
<div style="margin-top: 40px;">
  <div class="container">
    <el-row :gutter="30">
      <el-col :span="17">
        <div>
          <el-carousel height="500px" :interval="5000" arrow="always" indicator-position="none">
            <el-carousel-item v-for="item in 4" :key="item" @click="toVideoDetail()">
              <div class="imgItem">
               <img src="../common/img/vedioImg.jpg"/>
                <h2>【视频】许知远对谈王小川，区块链，讲的太通透了</h2>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="videoList">
          <ul class="clearfix">
            <li class="videoItem" v-for="item in 6" :key="item" @click="toVideoDetail()">
              <img src="../common/img/vedio.jpg" class="videoImg"/>
              <h2>今日要闻，58集团推出区块链服务平台、主流交易所普遍存在高危</h2>
              <p>
                <span><img src="../common/img/icon6.png" class="eIcon"/><b>哈希区域链</b></span>
                <span class="rg"><img src="../common/img/icon7.png"/>32分钟前</span>
              </p>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="newsflash">
          <h1><img src="../common/img/icon17.png"/>快讯<img src="../common/img/icon18.png" class="rg" style="margin-top:16px;"/></h1>
          <h2>2018-08-17 周五 今天</h2>
          <newsflash v-for="item in 8" :key="item"></newsflash>
        </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
import newsItem from '../components/newsItem'
import newsflash from '../components/newsflash'
export default {
  name: '',
  components: {
    newsItem,
    newsflash
  },
  data () {
    return {

    }
  },
  methods: {
    toVideoDetail: function () {
      this.$router.push({path: '/videoDetail'})
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.indexTop{
  width:100%;
  height: auto;
  background: #fff;
  margin-bottom: 35px;
  ul{
    margin: 0 auto;
    width:1200px;
  }
  li{
    width:200px;
    box-sizing: border-box;
    padding: 0 15px;
    margin: 15px 0;
    display: flex;
    float: left;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccc;
    img{
      margin-right: 10px;
    }
    h2{
      font-size: 14px;
      color: #818181;
      font-weight: bold;
      margin-bottom: 5px;
    }
    p{
      color: #737373;
      font-size: 14px;
      font-weight: bold;
      span{
        width:42px;
        height: 24px;
        display: inline-block;
        color: #fff;
        background: #84ccc9;
        text-align: center;
        line-height: 24px;
        margin-right: 5px;
      }
    }
  }
}
.leftImg{
  width:100%;
  height:auto;
}
 .imgTxt{
   width:94%;
   position: absolute;
   bottom: 10px;
   left: 3%;
   color: #fff;
   font-size:18px;
   background: rgba(0,0,0,0.7);
   box-sizing: border-box;
   padding: 10px;
   border-radius: 8px;
 }

.rank{
  width:100%;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  margin: 15px 0;
}
  .rankNav{
    box-sizing: border-box;
    padding: 0 15%;
    width:100%;
    margin-bottom: 30px;
    span{
      padding-bottom: 10px;
      font-size: 18px;
      color: #96a6bb;
      &:first-child{
        margin-right: 40%;
      }
      &.cur{
        color: #111;
        border-bottom: 2px solid #00acec;
      }
    }
  }
  .rankCondition{
    text-align: center;
    margin-bottom: 5px;
    span{
      padding: 3px 10px;
      color: #96a6bb;
      font-size: 14px;
      border:1px solid #96a6bb;
      margin-right: 5px;
      &.cur{
        color: #fff;
        background: #00acec;
        border:1px solid #00acec;
      }
    }
  }
  .rankTable{
    width:100%;
    tr{
      height: 55px;
      line-height: 55px;
    }
    th{
      font-size: 14px;
      color: #7f7f7f;
      font-weight: 100;
    }
    td{
      color: #161616;
      font-size: 14px;
      text-align: center;
      &:first-child{
        color: #fff;
      }
      &.up{
        color: #2ba863;
      }
      i{
        font-size: 12px;
        margin-right: 3px;
      }
    }
  }
.rankTable tr td span{
    display: block;
    width:22px;
    height: 22px;
    border-radius: 50%;
    background: #bec1c5;
    color: #fff;
    line-height: 22px;
    text-align: center;
  }
.rankTable tr:nth-child(2) td span{
  background: #00a0e9;
}
.rankTable tr:nth-child(3) td span{
  background: #4cbcf0;
}
.rankTable tr:nth-child(4) td span{
  background: #7fcff4;
}
  .imgs{
    width: 100%;
    height: auto;
    img{
      width: 100%;
      margin-bottom: 15px;
    }
  }
  .imgItem{
    width:100%;
    height: 500px;
    position: relative;
    img{
      width:100%;
      height: 500px;
      overflow: hidden;
    }
    h2{
      text-align: center;
      width:100%;
      color: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 65px;
      line-height: 65px;
      background: rgba(0,0,0,0.7);
    }
  }
  .videoList{
    width:100%;
    height:auto;
    ul{
      width:100%;
      height:auto;
    }
  }
  .videoItem{
    width:49%;
    height:auto;
    background: #fff;
    margin-top: 30px;
    float: left;
    h2{
      width:100%;
      font-size: 16px;
      color: #2e2e2e;
      height: 90px;
      line-height: 30px;
      overflow: hidden;
      box-sizing: border-box;
      padding: 15px;
    }
    p{
      line-height: 56px;
      padding: 15px;
      span{
        font-size: 14px;
        color: #747474;
        margin-right: 50px;
        img{
          vertical-align: middle;
          margin-right: 10px;
        }
      }
    }
  }
.videoImg{
  width:100%;
  height: auto;
}
.videoItem:nth-child(2n+1){
  margin-right: 2%;
}
</style>
