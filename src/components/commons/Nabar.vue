<template>
  <header role="banner">
    <img
      id="logo-main"
      v-bind:src="logo"
      width="200"
      alt="Logo Thing main logo"
    />
    <nav id="navbar-primary" class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-primary-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbar-primary-collapse">
          <ul class="nav navbar-nav">
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
              <router-link to="/design">Design</router-link>
            </li>
            <li>
              <router-link to="/contact_us">Contact Us</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </header>
  <!-- header role="banner" -->
</template>

<style>

header[role="banner"] #logo-main {
  display: block;
  margin: 20px auto;
}

.navbar-nav {
    display: inline-block;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    font-size: 2rem;
}

#navbar-primary.navbar-default {
  background: transparent;
  border: none;
}

#navbar-primary.navbar-default .navbar-nav {
  width: 100%;
  text-align: center;
}

#navbar-primary.navbar-default .navbar-nav > li {
  display: inline-block;
  float: none;
}

#navbar-primary.navbar-default .navbar-nav > li > router-link {
  padding-left: 30px;
  padding-right: 30px;
}
</style>

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
