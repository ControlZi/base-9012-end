import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recursionLay: 0
  },
  mutations: {
    SET_RECURSIONLAY: state => {
      state.recursionLay++;
    }
  },
  actions: {}
});
