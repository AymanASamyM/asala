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
        </div>
      </div>
  </section>
  <!-- endBoard -->
</template>

<script>
import user from './components/user.vue';
export default {

  components: {
    'user': user
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
