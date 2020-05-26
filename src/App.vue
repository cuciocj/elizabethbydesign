<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/commons/Navbar.vue';

export default {
  components: {
    navbar: Navbar,
  },
};
</script>
