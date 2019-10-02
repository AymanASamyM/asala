<template>
  <div class="">
    <appHeader v-bind:list1="headerPath" v-bind:btn1="btn1" v-bind:btn2="btn2" v:bind:search="search"></appHeader>
    <input type="text" name="" v-model="search">
    <base href="/users/">
    <!-- startList -->
    <a v-for="usr in filteredData" :href="usr.id" >
        <img src="" alt="">
        <div>
            <h3>{{usr.username}}</h3>
            <p>{{usr.email}}</p>
        </div>
    </a>

    <!-- endList -->
  </div>
</template>

<script>
import appHeader from './header.vue';
export default {
  components:{
    'appHeader':appHeader,
  },
  props:['userData'],
  data(){
    return{
        link:"",
        headerPath: [
          {
            name:"Users",
            link:"/users",
          }
        ],
        btn1:"New",
        btn2:"",
        search:""
    }
  },
  computed:{
    filteredData:function(){
      return this.userData.filter((usr)=>{
        return usr.username.toLowerCase().match(this.search)
      })
    }
  }
}
</script>

<style scoped>
a,img,div{
    display: flex;
}
a{
    /* background-color: #b19dd1; */
    border: 1px solid #c2c4c5;

    width: 24%;
    justify-content: space-between;
    margin-bottom: 10px;

    text-decoration: none;
}
img{
    background: #dad8dd url('../../images/001.svg') no-repeat 0px/100%;

    width: 30%;
    height: 100px;

}
div{
    width: 60%;
    flex-wrap: wrap;
    padding: 10px;

    overflow:auto;
}
h3{
    color:var(--headings-color);

    flex-basis: 100%;

    font-weight:100;
    font-size: var(--action-font);
}
p{
    color:var(--muted-color);
}
</style>
