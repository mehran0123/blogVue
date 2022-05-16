<template>
  <div class="bg-white dark:bg-slate-900">
    <h1 class="font-bold text-4xl">Welcome tailwind css</h1>
    <table class="table-fixed">
      <thead>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Salary</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="li in list" :key="li.id">
        <td>{{li.id}}</td>
        <td>{{li.employee_name}}</td>
        <td>{{li.employee_salary}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import Vue from 'vue';
// import VueAxios from 'vue-axios';
import axios from 'axios';
// Vue.use(axios);
 export default {
   name:'EmployeeList',
   data(){
      return {
        list :undefined
      }
   },
   mounted() {
     axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        this.list = res.data.data
        console.warn(res);
      });
   }
 }
</script>