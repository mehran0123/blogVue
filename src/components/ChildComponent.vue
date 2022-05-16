<template>
  <div>
    <h1>Child Component </h1>
    <p>{{email}}</p>
    <table border="2px">
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users" :key="user">
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
      </tr>
    </table>
    <br>
    <table border="2px">
      <tr>
        <td>User Roles</td>
      </tr>
      <tr v-for="category in categories" :key="category">
        <td>{{category}}</td>
      </tr>
    </table>
    <button v-on:click="Updatetext">Send Data to parent component</button>
  </div>
</template>
<script>
 export default {
   name:'ChildComponet',
   props:['users','categories'],
   methods:{
     Updatetext(){
      // console.warn('Hello world')
       this.$emit('changeText','Text From Child Component');
     }
   }
 }
</script>