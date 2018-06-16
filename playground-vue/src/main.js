import Vue from 'vue';
import {routes} from './routes';
import VueRouter from 'vue-router';
import {store} from './store';
import App from './App.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes : routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
