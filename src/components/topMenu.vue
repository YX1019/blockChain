<template>
<div class="topmenu">
  <div class="menuLsit">
    <ul>
      <li v-for="(item,index) in menuList" :key="index" @click="toPage(index)">{{item}}</li>
    </ul>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      menuList: ['首页', '资讯', '行情', '视频', '活动', '百科', 'APP']
    }
  },
  methods: {
    toPage: function (index) {
      if (index === 0) {
        this.$router.push({path: '/index'});
      } else if (index === 1) {
        this.$router.push({path: '/information'});
      } else if (index === 2) {
        this.$router.push({path: '/quotation'});
      } else if (index === 3) {
        this.$router.push({path: '/video'});
      } else if (index === 5) {
        this.$router.push({path: '/encyclopedias'});
      } else if (index === 6) {
        this.$router.push({path: '/app'});
      } else if (index === 4) {
        this.$router.push({path: '/activity'});
      }
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.topmenu{
  width:100%;
  height: 60px;
  line-height: 60px;
  background: #323953;
}
.menuLsit{
  width:1200px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  li{
    margin-right: 90px;
    color: #fff;
    font-size:18px;
    float: left;
    cursor: pointer;
  }
}
</style>
