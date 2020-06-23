import '@mdi/font/css/materialdesignicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
