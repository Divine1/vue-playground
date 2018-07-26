import Vue from 'vue'
import App from './App.vue'

import VueSocketio from 'vue-socket.io-extended';
import socket from './socket';

import store from './store';

Vue.use(VueSocketio, socket, { store });

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
