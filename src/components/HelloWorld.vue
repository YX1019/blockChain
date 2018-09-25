<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="item in numList" :key="item.name">{{item.name}}</li>
    </ul>
    <ul>
      <li v-for="item in items" :key="item" @click="getList()">{{item}}</li>
    </ul>
    <ul>
      <li v-for="item in obj.addr" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      numList: [{'name': '小明', 'age': '20'}],
      items: ['a', 'b', 'c'],
      obj: {name: 1, addr: [1, 2, 3]}
    }
  },
  created () {
    this.items[1] = 'x'
    this.items.length = 6
    // this.items.splice(6)
    console.log(this.items)
    // this.getList()
  },
  mounted () {
    // this.getList()
    this.items[2] = 'x'
    this.obj.addr[2] = 9
    this.numList[0].name = 'xiaoming'
    this.$set(this.items, 2, 'hhh')
    console.log(this.items)
  },
  methods: {
    getList: function () {
      this.items[0] = 'bushiba'
      console.log(this.items)
    },
    changeVal: function (index) {
      this.contents[index].name = 'change'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
