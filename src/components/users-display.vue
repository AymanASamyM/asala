<template>
  <div class="body en">
    <header class="grand">
        <div class="container">
            <div class="parent">
                <article class="tree">
                    <!-- startList -->
                    <ul>
                        <li>
                            <a href="/users">Users</a><span>/</span>
                        </li>
                    </ul>&nbsp;
                    <span>{{userData.username}}</span>
                    <!-- endList -->
                </article>
                <article class="search">
                        <input type="text" placeholder="search..." v-model="search">
                </article>
                <article class="buttons">
                    <!-- startList -->
                    <ul>
                        <li>
                            <a class="defult" href="new">New</a>
                        </li>
                    </ul>
                    <!-- endList -->
                </article>
                <article class="filters rmv">
                    filters
                </article>
            </div>
        </div>
    </header>

        <!-- <input type="text" name="" v-model="search"> -->
    <base href="/users/">
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
export default {
  components:{
  },
  // props:['userData'],
  data(){
    return{
        userData:[],
        link:"",
        headerPath: [
          {
            name:"Users",
            link:"/users",
          }
        ],
        btn1:"New",
        btn1Link:'new',
        btn2:"",
        search:""
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
        this.$http.get('http://jsonplaceholder.typicode.com/users').then(function(data){
          this.userData=data.body;
        });
  }
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
header.grand{
    background-color:var(--pure-white-color);
    padding: 5px 0;
}
header.grand .container .parent{
    display: flex;
    flex-wrap: wrap;
}
header.grand .container .parent article{
    width:50%;
    display: flex;
    align-items: center;
}
/*-----------------------------------------*/
/*Tree*/
header.grand .container .parent article.tree{
    margin-bottom:10px;
}
header.grand .container .parent article.tree ul{
    flex-wrap: wrap;
    align-items: center;
}
header.grand .container .parent article.tree a{
    color:var(--gray-color);
    padding: 5px 10px;
    text-decoration: none;
    color:var(--action-color);
}
header.grand .container .parent article.tree span{
    color: var(--gray-color);
}
/*Tree*/
/*----------------------------------------------*/

/*----------------------------------------------*/
/*Search*/
header.grand .container .parent article.search{
    margin-bottom:10px;
}
header.grand .container .parent article.search input{
    width: 100%;
    border: none;
    background-color:transparent;
    padding:5px;
    border-bottom: 2px solid var(--body-color);
    font-size: 15px;
}
header.grand .container .parent article.search input::placeholder{
    color: var(--middle-gray-color);
}

/*search*/
/*----------------------------------------------*/

/*----------------------------------------------*/
/*button*/
header.grand .container .parent article.buttons ul{
    flex-wrap: wrap;
    flex-basis: 100%;
    align-items: center;
}
header.grand .container .parent article.buttons a{
    padding: 5px 10px;
    text-decoration: none;
}
header.grand .container .parent article.buttons a.defult{
    color:var(--pure-white-color);
    background-color:var(--action-color);
}
header.grand .container .parent article.buttons a.not-defult{
    color:var(--action-color);
}
header.grand .container .parent article.buttons a.defult:hover{
    color: #777;
    background-color:var(--dark-action-color);
}
header.grand .container .parent article.buttons a.not-defult:hover{
    color:var(--headings-color);
    background-color:var(--middle-gray-color);
}
/*button*/
/*----------------------------------------------*/

</style>
