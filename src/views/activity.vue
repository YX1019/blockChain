<template>
<div class="container">
<ul class="activityList">
  <li v-for="(item,index) in 6" :key="index">
    <img src="../common/img/img3.jpg"/>
    <h2><span>区块链--财富的二次分配未来峰会次分配未来峰会</span><a>报名中</a></h2>
    <p><i class="iconfont">&#xe618;</i>上海 08月04日-08月04日</p>
  </li>
</ul>
  <div class="pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
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
.activityList{
  width:100%;
  height: auto;
  margin: 50px 0;
  li{
    display: inline-block;
    vertical-align: top;
    width:32%;
    margin-bottom: 10px;
    background: #fff;
    &:nth-child(3n+2){
      margin: 0 2%;
    }
    img{
      width:100%;
      max-height: 178px;
    }
    h2{
      font-size: 16px;
      color: #141414;
      padding: 20px 10px 40px 20px;
      span{
        display: inline-block;
        width:75%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 21px;
      }
      a{
        color: #fff;
        padding: 3px 18px;
        border-radius: 35px;
        background: #4285f4;
        float: right;
        font-size: 12px;
      }
    }
    p{
      margin: 0 10px 0 20px;
      padding: 25px 0 12px 0;
      border-top:1px solid #eee;
      font-size: 14px;
      color: #7b7b7b;
    }
  }
}
.pagination{
  margin: 60px auto;
  text-align: center;
}
</style>
