<template>
  <header role="banner">
    <b-container fluid>
      <b-row class="my-wrapper">
        <b-col>
          <b-img
            id="logo-main"
            v-bind:src="logo"
            fluid 
            alt="logo"
            contain
            width="200"
          >
          </b-img>
        </b-col>
      </b-row>
      <b-row class="my-wrapper">
        <b-col>
          <b-navbar id="navbar-primary" class="navbar-default" toggleable="md">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <b-navbar-toggle target="navbar-primary-collapse"></b-navbar-toggle>
              </div>
              <b-collapse id="navbar-primary-collapse" class="navbar-collapse" is-nav>
                <ul class="navbar-nav">
                  <li>
                    <router-link to="/">Home</router-link>
                  </li>
                  <li>
                    <router-link to="/about_us">About Us</router-link>
                  </li>
                  <li>
                    <router-link to="/where">Where are you Going?</router-link>
                  </li>
                  <li>
                    <router-link to="/style">Understanding your Style</router-link>
                  </li>
                  <li>
                    <router-link to="/measurements">Measurements</router-link>
                  </li>
                  <li>
                    <router-link to="/contact_us">Contact Us</router-link>
                  </li>
                </ul>
              </b-collapse>
            </div>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>


<script>
import navbarLogo from '@/assets/logo-final-v2.png';

export default {
  data() {
    return {
      logo: navbarLogo,
    };
  },
};
</script>


<style>

.my-wrapper{
  background-color: #e9ecea;
}

header[role="banner"] #logo-main {
  display: block;
  margin: 20px auto;
}

.navbar-nav {
    display: inline-block;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
}

#navbar-primary.navbar-default {
  background-color: #e9ecea;
  border: none;
}

#navbar-primary.navbar-default .navbar-nav {
  width: 100%;
  text-align: center;
}

#navbar-primary.navbar-default .navbar-nav > li {
  display: inline-block;
  float: none;
  padding: 15px 30px;
}

#navbar-primary.navbar-default .navbar-nav > li a {
  text-decoration: none;
  color: #000000;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

#navbar-primary.navbar-default .navbar-nav > li a:hover {
  color: #c8a338;
}

#navbar-primary.navbar-default .navbar-nav > li a.router-link-exact-active{
  color: #c8a338;
}

</style>
