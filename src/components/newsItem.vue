<template>
  <div class="newsItem">
    <div class="newsItem_lf">
      <img src="../common/img/img1.jpg"/>
    </div>
    <div class="newsItem_rg">
      <h1>性能赶超EOS？一文带你深挖并发执行模型</h1>
      <h3>本文将带你去伪存真，从多维度认知主流公链。</h3>
      <p>
        <span>哈希拍</span>
        <span>刚刚</span>
        <b class="rg">关键字：区块链，行情</b>
      </p>
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
  .newsItem{
    width:100%;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    background: #fff;
    margin-bottom: 12px;
  }
  .newsItem_lf{
    width:220px;
    height: 160px;
    img{
      width:100%;
      height: 100%;
    }
  }
  .newsItem_rg{
    flex:1;
    margin-left: 15px;
    position: relative;
    h1{
      font-size:20px;
      color: #151515;
      margin-bottom: 10px;
    }
    h3{
      font-size: 13px;
      height: 75px;
      line-height: 25px;
      color: #7c7c7c;
    }
    p{
      position: absolute;
      bottom: 0;
      left:0;
      width:100%;
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
        color: #8f929c;
      }
    }
  }
</style>
