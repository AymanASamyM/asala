<template>
    <!-- startDropList -->
    <div class="box"  v-on:click="displayItems = ! displayItems">
        <div class="title">
            list title
        </div>
        <ul v-if="displayItems">
            <li>
                <a href="">
                    item 1
                </a>
            </li>
            <li>
                <a href="">
                    item 2
                </a>
            </li>
            <li>
                <a href="">
                    item 3
                </a>
            </li>
            <li>
                <a href="">
                    item 4
                </a>
            </li>
        </ul>
    </div>
    <!-- endDropList -->
</template>

<script>
import {bus} from '../main'

export default {
  data(){
    return{
      displayItems : true,
    }
  },
  methods:{
    toggleDisplayItems(){
      var x = document.getElementById("listItems");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      this.displayItems = true;
    },
},
beforeCreate(){
  bus.$on('closeDisplay',(data)=>{
    this.displayItems =false;
    console.log('disabled');
  })
}
}

document.onclick=function(){
  // internal.$emit('clicked');
  bus.$emit('closeDisplay','temp');
}

</script>

<style scoped>
div.box{
    display: flex;
    flex-wrap: wrap;
    width:180px;
}
div.title{
    color:var(--body-color);
    border: 1px solid #000;
}
div.title:hover{
    border:1px solid var(--gray-color);
}
ul,li,a{
    display: flex;
}
ul{
    border:1px solid var(--light-gray-color);
    flex-wrap: wrap;
    padding:10px;
    /* display: none; */
}
li{
    /* justify-content: center; */
    flex-basis: 100%;
}
a{
    color:var(--gray-color);
    padding: 5px 10px;
    text-decoration: none;
}
</style>
