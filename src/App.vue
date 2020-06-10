<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <foobar></foobar>
  </div>
</template>

<script>
import Navbar from './components/commons/Nabar.vue';
import Footer from './components/commons/Futer.vue';

export default {
  components: {
    navbar: Navbar,
    foobar: Footer,
  },
};
</script>
