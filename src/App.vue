<template>
  <div>
    <navbar></navbar>
    <!-- <appHeader v-bind:list1="headerPath" v-bind:btn1="btn1" v-bind:btn2="btn2"></appHeader> -->
    <!-- <input type="text" placeholder="name" v-model="myName">
    <span>{{myName}}</span>
    <button type="button" v-on:click="append">add</button> -->
    <router-view ></router-view>
  </div>
</template>

<script>

import navbar from './components/navbar.vue';
import user from './components/users-display.vue';
import appHeader from './components/header.vue';
import appheader2 from './components/header2.vue';
import userDisplay from './components/users-display';
export default {
  components: {
    'user': user,
    'navbar' : navbar,
    'appHeader': appHeader,
    'userDisplay': userDisplay,
  },
  data(){
    return{
      headerPath: [
        {
          name:"Client",
          link:"/clients",
        }
      ],
      btn1:"save",
      btn2:"discard",
      userData:[],
      id:this.$route.params.id,
      myName:"",
  }

},
// computed:{
//   myProps(){
//     if (this.$route.name === 'userInfo') {
//       this.btn1='Edit';
//       this.btn2='';
//       this.$http.get('http://jsonplaceholder.typicode.com/users/'+this.id).then(function(data){
//         console.log(data);
//         this.userData=data.body;
//       });
//       return{ userData:this.userData};
//   }
//   else if (this.$route.name === 'users') {
//     this.btn1='New';
//     this.btn2='';
//     this.$http.get('http://jsonplaceholder.typicode.com/users').then(function(data){
//       this.userData=data.body;
//     });
//     return{ userData:this.userData};
//   }
//   else if (this.$route.name === 'clients') {
//     this.btn1='New';
//     this.btn2='';
//     this.$http.get('http://jsonplaceholder.typicode.com/users').then(function(data){
//       this.userData=data.body;
//     });
//     return{ userData:this.userData};
//   }
//   else if (this.$route.name === 'clientInfo') {
//     this.btn1='New';
//     this.btn2='';
//     this.$http.get('http://jsonplaceholder.typicode.com/users').then(function(data){
//       this.userData=data.body;
//     });
//     return{ userData:this.userData};
//   }
//   else if (this.$route.name === 'units') {
//     this.btn1='New';
//     this.btn2='';
//     this.$http.get('http://jsonplaceholder.typicode.com/users').then(function(data){
//       this.userData=data.body;
//     });
//     return{ userData:this.userData};
//   }
//   else if (this.$route.name === 'unitInfo') {
//     this.btn1='New';
//     this.btn2='';
//     this.$http.get('http://jsonplaceholder.typicode.com/users').then(function(data){
//       this.userData=data.body;
//     });
//     return{ userData:this.userData};
//   }
//   }
// },
methods:{
  append(){
    window.location.href = '/user'
    this.list1.push({name:this.myName,link:this.$route.currentRoute});
    // console.log(this.$route);
  }
}
}
</script>

<style>
@import url('../css/variables.css');
@import url("../css/normalize.css");
@import url('../css/rules.css');
</style>
