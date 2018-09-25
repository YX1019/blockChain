<template>
<div class="container margin15">
 <div class="personTop">
   <img src="../common/img/headImg.png" class="headImg"/>
   <h1>张烨</h1>
   <p>暂无简介</p>
   <div>
     <ul>
       <li>粉丝数量<p>0</p></li>
       <li>文章数量<p>0</p></li>
     </ul>
   </div>
 </div>
  <div class="personNav">
    <ul>
      <li v-for="(item,index) in personMenu" :key="item" @click="toPersonPage(index)" :class="{'cur': index == active}">{{item}}</li>
    </ul>
  </div>
  <div class="personInfo">
    <router-view/>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'personal',
  data () {
    return {
      personMenu: ['个人资料', '修改密码', '实名认证', '我的关注', '我的收藏'],
      active: 0
    }
  },
  methods: {
    toPersonPage: function (index) {
      this.active = index
      if (this.active === 0) {
        this.$router.push({path: '/personal/personalInfo'})
      } else if (this.active === 1) {
        this.$router.push({path: '/personal/updatePwd'})
      } else if (this.active === 2) {
        this.$router.push({path: '/personal/certification'})
      } else if (this.active === 3) {
        this.$router.push({path: '/personal'})
      } else if (this.active === 4) {
        this.$router.push({path: '/personal/myCollect'})
      }
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .margin15{
    margin:25px auto;
  }
.personTop{
  width:100%;
  height: auto;
  background: url(../../src/common/img/personBg.jpg) no-repeat;
  background-size: 100% 100%;
  padding: 45px 0;
  text-align: center;
  color: #fff;
  h1{
    line-height: 55px;
    font-size: 30px;
  }
  p{
    font-size: 14px;
    margin-bottom: 28px;
  }
  ul{
    width:36%;
    margin: 0 auto;
    text-align: left;
    li{
      display: inline-block;
      font-size: 18px;
      text-align: center;
      &:last-child{
        float: right;
      }
      p{
        font-size: 18px;
        margin-top: 10px;
      }
    }
  }
}
  .headImg{
    width:118px;
    height: 118px;
    border-radius: 50%;
    margin: 10px 0;
  }
.personNav{
  width:100%;
  height: 65px;
  background: #fff;
  ul{
    width:790px;
    margin: 0 auto;
    li{
      width:90px;
      font-size: 16px;
      text-align: center;
      height: 65px;
      line-height: 65px;
      float: left;
      box-sizing: border-box;
      margin: 0 34px;
      &.cur{
        border-bottom: 2px solid #00acec;
        color: #00acec;
      }
    }
  }
}
  .personInfo{
    margin: 20px 0;
  }
</style>
