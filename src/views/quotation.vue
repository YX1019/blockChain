<template>
<div class="quotation">
  <div class="container clearfix">
    <div class="searchLine">
      <span>全部</span><span>我关注的</span>
      <select><option>流通币值从高到低</option></select>
      <select><option>人民币</option></select>
      <div class="searchRg">
        <input type="text" placeholder="输入货币名称搜索" v-model="searchCont"/>
        <i class="iconfont">&#xe6fe;</i>
      </div>
    </div>
    <table class="rankTable">
      <tr>
        <th>关注</th>
        <th>排名</th>
        <th>名称</th>
        <th>流通市值</th>
        <th>价格</th>
        <th>流通水量</th>
        <th>成交额(24h)</th>
        <th>涨幅(24h)</th>
        <th>价格趋势(7d)</th>
      </tr>
      <tr v-for="(item,index) in 4" :key="index">
        <td><i class="iconfont">&#xe62a;</i></td>
        <td>1</td>
        <td class="blue"><img src="../common/img/icon9.png" class="coinIcon"/>BTC-比特币</td>
        <td>￥7599.863亿</td>
        <td class="blue">￥44189.7</td>
        <td>1719.862万</td>
        <td class="blue">￥45.604亿</td>
        <td>1.34%</td>
        <td><img src="../common/img/line.jpg" class="trandeLine"/></td>
      </tr>
    </table>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      searchCont: ''
    }
  },
  methods: {}
}
</script>
<style lang="scss" rel="stylesheet/scss">
.quotation{
  width:100%;
  height:auto;
  background: #fff;
  padding: 40px 0;
}
  .searchLine{
     span{
       padding: 0 30px;
       font-size: 18px;
       &.cur{
         color: #006aff;
       }
     }
    select{
      width:210px;
      height: 38px;
      line-height:38px;
      box-sizing: border-box;
      border:1px solid #ccc;
      border-radius: 3px;
      margin-right: 25px;
    }
  }
.searchRg{
  float: right;
  input{
    width:180px;
    height: 38px;
    border-bottom: 1px solid #00a0e9;
    padding: 0 5px;
    box-sizing: border-box;
    float: left;
  }
  i{
    color: #00acec;
    font-size: 24px;
    font-weight: bold;
    float: left;
    margin-top: 5px;
  }
}
.rankTable{
  width:100%;
  height:auto;
  font-size: 18px;
  border-top: 1px solid #eee;
  margin-top: 40px;
  th{
    color: #383838;
    font-weight: normal;
    text-align: center;
    line-height: 60px;
  }
  tr{
    td{
      color: #171717;
      text-align: center;
      line-height: 60px;
      img{
        vertical-align: middle;
      }
      &.blue{
        color: #517ff5;
      }
      i{
        font-size: 22px;
        color: #517ff5;
      }
    }
    &:nth-child(2n+2){
    background: #fbf9fa;
  }
  }
  }
  .coinIcon{
    width:36px;
    height: 36px;
    margin-right: 5px;
  }
  .trandeLine{
    width:136px;
    height: 34px;
  }
  .pagination{
    margin: 60px auto;
    text-align: center;
  }
</style>
