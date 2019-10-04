<template>
  <div>
    <navbar></navbar>
    <router-view ></router-view>
  </div>
</template>

<script>

import navbar from './components/navbar.vue';

export default {
    components: {
    'navbar' : navbar,
    }
}

</script>

<style>
@import url('../css/variables.css');
@import url("../css/normalize.css");
@import url('../css/rules.css');
</style>
