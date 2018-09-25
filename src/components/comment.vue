<template>
<div class="comment">
  <el-input v-model="commentTxt"></el-input>
  <button class="commentBtn clearfix">评论</button>
  <div class="commentList">
    <h2>共1条评论</h2>
    <div class="commentLi" v-for="item in 3" :key="item">
      <img src="../common/img/icon6.png"/>
      <h3>水知道答案<span>2018-08-21 21:23:56</span> <i class="iconfont rg">&#xe60c;</i></h3>
      <p>很好的视频。谢谢分享</p>
      <h5 class="answer">回复</h5>
    </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      commentTxt: ''
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .comment{
    margin-top: 15px;
  }
.commentBtn{
  width:56px;
  height: 28px;
  border:1px solid #00acec;
  color: #00acec;
  text-align: center;
  line-height: 28px;
  background: #fff;
  border-radius: 3px;
  margin: 15px 0;
  float: right;
}
  .commentList{
    h2{
      font-size: 18px;
      color: #353535;
      line-height:65px;
    }
  }
  .commentLi{
    position: relative;
    padding: 20px 0 20px 60px;
    box-sizing: border-box;
    width:100%;
    border-top: 1px solid #ccc;
    img{
      position: absolute;
      top:20px;
      left: 0;
      width:35px;
      height: 35px;
      border-radius: 50%;
    }
    h3{
      font-size:14px;
      color: #000;
      margin-bottom: 12px;
      span{
        color: #838383;
        font-size: 12px;
        margin-left: 5px;
      }
      i{
        color: #b4b4b4;
      }
    }
    p{
      font-size:14px;
      color: #000;
      text-align: left;
    }
  }
  .answer{
    text-align: right;
    font-size: 12px;
    color: #00acec;
    width:100%;
  }
</style>
