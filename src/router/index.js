import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import AboutUs from '@/views/AboutUs.vue';
import Where from '@/views/Where.vue';
import Style from '@/views/Style.vue';
import Measurements from '@/views/Measurements.vue';
import ContactUs from '@/views/ContactUs.vue';

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
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
