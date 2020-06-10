<template>
  <nav class="nav-header">
    <div class="nav-header-logo">
      <b-img
        v-bind:src="logo"
        fluid alt="logo"
        contain
        width="200"
        >
      </b-img>
    </div>
    <div>
      <ul>
        <li>
          <a>
            <router-link to="/">Home</router-link>
          </a>
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
          <router-link to="/contact_us">Contact Us</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>

nav {
  width: 100%;
  margin: 0 auto;
  background: #e9ecea;
  padding: 10px 0 0 0;
}

nav ul {
  list-style: none;
  text-align: center;
  padding: 0px;
  margin-bottom: 0;
}

nav ul li {
  display: inline-block;
  max-width: 300px;
}

nav ul li a {
  display: block;
  padding: 30px 40px 10px;
  text-decoration: none;
  color: #aaa;
  text-transform: uppercase;
  margin: 0 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all 0.5s;
}

nav ul li a:hover {
  color: #c8a338;
  text-decoration: none;
}

nav.nav-header ul li a {
  position: relative;
}

nav.nav-header ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: #aaa;
  height: 1px;
}

nav.stroke ul li a:hover:after {
  width: 100%;
}

nav div.nav-header-logo {
  text-align: center;
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
