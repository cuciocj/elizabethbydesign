import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import AboutUs from '../components/AboutUs.vue';
import Where from '../components/Where.vue';
import Style from '../components/Style.vue';
import Measurements from '../components/Measurements.vue';
import ContactUs from '../components/ContactUs.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about_us',
      name: 'About Us',
      component: AboutUs,
    },
    {
      path: '/where',
      name: 'Where are you going',
      component: Where,
    },
    {
      path: '/style',
      name: 'Understanding your style',
      component: Style,
    },
    {
      path: '/measurements',
      name: 'measurements',
      component: Measurements,
    },
    {
      path: '/contact_us',
      name: 'Contact Us',
      component: ContactUs,
    },
  ],
});
