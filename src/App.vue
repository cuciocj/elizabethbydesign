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

<style>
  .container-fluid{
    margin:0%;
    padding:0%;
  }
  .intro{
    border: solid 1px	#e9ecea;
  }
  .intro-title{
    font-size: 100%;
    margin: 0% 2% 0% 2%;
    padding: 0% 1% 0% 1%;
    width: auto;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: bold;
    color: #c8a338;
  }
  .intro-text{
    text-align: justify;
    color: #777;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding: 0%;
    margin: 2%;
  }
  .style-container{
    position: relative;
    overflow: hidden;
    border: solid 1px	#fec943;
    height: 250px;
    border-radius: 250px;
  }
  .style-img{
    position: absolute;
    top: -5%;
    left: -20%;
    width: 120%;
  }
  .lets-start-text{
    text-align: justify;
    font-weight: bold;
    color: #c8a338;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding: 0%;
    margin: 2%;
  }
</style>
