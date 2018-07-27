import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    findCroodId: ""
  },
  mutations: {
    updateCroodId(state, findCroodId) {
      state.findCroodId = findCroodId;
    }
  },
  getters: {
    findCroodId: state => state.findCroodId
  },
  actions: {}
});
