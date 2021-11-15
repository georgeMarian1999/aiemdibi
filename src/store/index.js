import Vue from "vue";
import Vuex from "vuex";
import * as genres from "@/store/modules/genres";
import * as movie from "@/store/modules/movie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    genres,
    movie,
  },
});
