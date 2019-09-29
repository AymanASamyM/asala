<template>
  <div class="">
    <navbar></navbar>
    <!-- startBoard -->
    <section class="board">
        <div class="container">
          <div class="parent">
            <user class="user" v-for="item in items"></user>
          </div>
        </div>
    </section>
    <!-- endBoard -->
  </div>
</template>

<script>
import user from './components/user.vue';
import navbar from './components/navbar.vue';

export default {
  data(){
    return{
      items:[1,2,3,4,5,6]
    }
  },
  components: {
    'user': user,
    'navbar' : navbar,
  }

}
</script>

<style>
@import url('../css/variables.css');
*{
    padding: 0;
    margin:0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
section.board{
    background-color: var(--light-gray-color);
}
.container{
  width:99%;
  margin:auto;
}
.parent{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
</style>
