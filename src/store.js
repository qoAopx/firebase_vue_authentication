import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: null,
    user: null
  },
  mutations: {
    signIn (state, user) {
      state.status = true;
      state.user = user;
    },
    signOut (state) {
      state.status = false;
      state.user = null;
    }
  },
  actions: {}
});
