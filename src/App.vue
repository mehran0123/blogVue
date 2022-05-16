<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
    // DataBinding,
  },
  data(){
    return {
      users:[{ 'username':'Mehran Shiraz','email':'meharmani212@gmail.com'},{ 'username':'Ali','email':'ali212@gmail.com'}],
      categories:['admin','Accountant','Guest User','Custonmer'],
      title:'Parent Comopnent Title',

    }
  },methods:{
    changeTitle(title){
      this.title = title
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
