<template>
  <div class="">
    <header class="grand">
      <div class="container">
        <div class="parent">
          <article class="tree">
                <!-- startList -->
            <ul>
              <li>
                <a href="/clients">Clients</a><span>/</span>
              </li>
            </ul>&nbsp;
            <span>{{userData.name}}</span>
                <!-- endList -->
          </article>
          <article class="search">
            <input type="text" placeholder="search..." v-model="search">
          </article>
          <article class="buttons">
                <!-- startList -->
            <ul>
              <li>
                <a class="defult" href="new" >New</a>
              </li>
            </ul>
                <!-- endList -->
          </article>
          <article class="filters rmv">
            filters
          </article>
        </div>
      </div>
    </header>        <!-- <input type="text" name="" v-model="search"> -->
        <!-- <input type="text" name="" v-model="search"> -->
    <base href="/clients/">
    <!-- startList -->
    <a class="allusers" v-for="usr in filteredData" :href="usr.id" > <!--mohab added class allusers to differentiate between this anchor and the header anchors -->
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
  props:[],
  data(){
    return{
        link:"",
        headerPath: [
          {
            name:"Users",
            link:"/clients",
          }
        ],
        btn1:"New",
        btn1Link:"new",
        btn2:"",
        search:"",
        userData:[],
    }
  },
  computed:{
    filteredData:function(){
      return this.userData.filter((usr)=>{
        return usr.username.toLowerCase().match(this.search);
      })
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/users/').then(function(data){
      console.log(data);
      this.userData=data.body;
    })
  },
}
</script>

<style scoped>
a,img,div,ul,li{
    display: flex;
}
a.allusers{ /* mohab added ".allusers" */
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
