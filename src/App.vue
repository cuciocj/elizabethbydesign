<template>
  <div id="app">
    <navbar></navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about_us">About Us</router-link>
    </div> -->
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
