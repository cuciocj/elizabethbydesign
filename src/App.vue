<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <foobar></foobar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    navbar: Navbar,
    foobar: Footer,
  },
};
</script>
