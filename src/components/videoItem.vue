<template>
  <div class="videoItem">
    <div class="vItem_lf">
      <img src="../common/img/img2.jpg"/>
    </div>
    <div class="vItem_rg">
      <h3>800元一枚汉堡币能换一个巨无霸？麦当劳：我想玩票大的</h3>
      <p>2018-08-21</p>
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
.videoItem{
  width:100%;
  display: flex;
  margin: 8px 0;
}
  .vItem_lf{
    width:125px;
    height: 70px;
    margin-right: 10px;
    img{
      width:100%;
      height: 100%;
    }
  }
.vItem_rg{
  flex:1;
  font-size: 12px;
  h3{
    color: #fff;
    height: 60px;
    line-height:20px;
    overflow: hidden;
  }
  p{
    color: #ccc;
  }
}
</style>
