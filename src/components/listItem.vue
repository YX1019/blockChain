<template>
  <div class="eItem">
    <div class="eItem_lf" :style="`width:${width}px`">
      <img src="../common/img/img1.jpg"/>
    </div>
    <div class="eItem_rg">
      <h1>性能赶超EOS？一文带你深挖并发执行模型</h1>
      <h3>本文将带你去伪存真，从多维度认知主流公链。</h3>
      <p>
        <span><img src="../common/img/icon6.png" class="eIcon"/><b>区块链大本营</b></span>
        <span><img src="../common/img/icon7.png"/>21小时前  区块链 百科</span>
        <span><img src="../common/img/icon8.png"/>1234567</span>
      </p>
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
  props: ['width'],
  created () {

  },
  mounted () {
    console.log(this.width)
  },
  methods: {}
}
</script>
<style lang="scss" rel="stylesheet/scss">
  $width:200px;
  .eItem{
    width:100%;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    background: #fff;
    margin-bottom: 5px;
  }
  .eItem_lf{
    width:$width;
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
</style>
