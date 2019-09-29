<template>
  <!-- startBoard -->
  <section class="board">
      <div class="container">
        <div class="parent">
          <user class="user"></user>
          <user class="user"></user>
          <user class="user"></user>
          <user class="user"></user>
          <user class="user"></user>
          <user class="user"></user>
          <user class="user"></user>
          <drop-list></drop-list>
        </div>
          </div>
    </section>
    <!-- endBoard -->

</template>

<script>
import user from './components/user.vue';
import navbar from './components/navbar.vue';
import dropList from './components/drop-list.vue';

export default {
  data(){
    return{
      items:[1,2,3,4,5,6]
    }
  },
  components: {
    'user': user,
    'navbar' : navbar,
    'drop-list': dropList

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
