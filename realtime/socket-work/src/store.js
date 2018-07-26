import Vue from 'vue';
import Vuex from 'vuex';
import socket from './socket';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isConnected: false,
    message: null,
  },
  mutations: {
    SOCKET_CONNECT(state, status) {
      console.log('SOCKET_CONNECT ',status);
      state.isConnected = true;
    },
    SOCKET_USER_MESSAGE(state, message) {
      console.log('SOCKET_USER_MESSAGE ',message);
      state.message = message;
    },
    SOCKET_TEST_MESSAGE(state, message) {
      console.log('SOCKET_TEST_MESSAGE ',message);
      state.message = message;
      socket.emit("USER_MESSAGE",{"testMessage" : "my personal data"});
    },
  },
  actions: {
    otherAction(context, type) {
      return true;
    },
    socket_userMessage({ commit, dispatch }, message) {
      console.log('socket_userMessage ',message);
      
    },
    socket_testMessage({ commit, dispatch }, message) {
      console.log('socket_testMessage ',message);
      commit("SOCKET_TEST_MESSAGE", {"data" : "action from"});
    }
  },
})