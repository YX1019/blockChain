<template>
<div>
<div class="indexTop">
  <ul class="clearfix">
    <li v-for="item in 12" :key="item">
      <div><img src="../common/img/icon16.png"/></div>
      <div><h2>BTC-比特币</h2><p><span>1.2%</span>￥43821.90</p></div>
    </li>
  </ul>
</div>
  <div class="container">
    <el-row :gutter="12">
      <el-col :span="17">
        <el-row :gutter="12">
          <div class="index_lf">
            <img src="../common/img/img4.jpg" class="leftImg"/>
            <div class="imgTxt">解码”归零式”三大特征：虚假宣传、拉名人站台、”传
              销式”推广</div>
          </div>
          <div class="index_rg">
            <div style="position: relative;margin-bottom: 10px;">
              <img src="../common/img/img5.jpg" class="leftImg"/>
              <div class="imgTxt">科技日报:数字货币大起大落，区块链技术被玩坏</div>
            </div>
            <div style="position: relative;">
              <img src="../common/img/img6.jpg" class="leftImg"/>
              <div class="imgTxt">韩国2019年预计向区块链领域投资1万亿韩元</div>
            </div>
          </div>
        </el-row>
        <ul class="newsNav">
          <li class="cur">最新文章</li>
          <li>热门推荐</li>
        </ul>
        <div class="newsList">
            <newsItem v-for="(item,index) in 7" :key="index"></newsItem>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="newsflash">
          <h1><img src="../common/img/icon17.png"/>快讯<img src="../common/img/icon18.png" class="rg" style="margin-top:16px;"/></h1>
          <h2>2018-08-17 周五 今天</h2>
          <newsflash v-for="item in 3" :key="item"></newsflash>
        </div>
        <div class="rank">
          <div class="rankNav">
            <span class="cur">涨幅榜</span>
            <span>跌幅榜</span>
          </div>
          <div class="rankCondition">
            <span class="cur">1小时</span>
            <span>24小时</span>
            <span>1周</span>
          </div>
          <table class="rankTable">
            <tr>
              <th>排名</th>
              <th>币种</th>
              <th>最新价格</th>
              <th>涨幅</th>
            </tr>
            <tr v-for="(item,index) in 10" :key="item">
              <td><span>{{index}}</span></td>
              <td>VCLC</td>
              <td>￥0.00086755009</td>
              <td class="up"><i class="iconfont" style="font-size: 12px;">&#xe600;</i>80.95%</td>
            </tr>
          </table>
        </div>
        <div class="imgs">
          <img src="../common/img/img7.jpg"/>
          <img src="../common/img/img8.jpg"/>
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
  methods: {}
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
  .index_lf{
    position: relative;
    width:60%;
    float: left;
  }
  .index_rg{
    float: left;
    width: 37%;
    margin-left: 15px;
  }
.newsNav{
  width:100%;
  height:auto;
  line-height: 55px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  margin: 30px 0;
  li{
    font-size: 16px;
    color: #666;
    display: inline-block;
    margin-right: 40px;
    padding: 0 5px;
    box-sizing: border-box;
    &.cur{
      color:#191919;
      border-bottom: 2px solid #00acec;
    }
  }
}
  .newsList{
    margin-bottom: 80px;
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
</style>
