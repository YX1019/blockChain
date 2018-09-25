<template>
  <div id="app">
    <top></top>
    <topMenu></topMenu>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import top from '@/components/top'
import topMenu from '@/components/topMenu'
import foot from '@/components/foot'
export default {
  name: 'App',
  components: {
    top,
    topMenu,
    foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
background: #f3f5f8;
}
  *{margin:0;padding:0;border:0;}
  ul,li{list-style: none;}
  a{text-decoration: none;}
  h1,h2,h3,h4,h5,h6{font-weight: normal;}
  .container{
    width:1200px;
    margin: 0 auto;
  }
  .lf{
    float: left;
  }
  .rg{
    float: right;
  }
  .clearfix{
    display: table;
    content: '';
    clear: both;
  }
</style>
