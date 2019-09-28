<template>
  <div class="box">
    <user class="user"></user>
  </div>

</template>

<script>
import user from './components/user.vue'

export default {
  components: {
    'user' : user
  },
  data(){
    return{
    }
  }
}
</script>

<style >
.box{
   display: flex;
   width:99%;
   margin: auto;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
}
.user{
  background-color:red;
  width:100px;
  }
</style>
